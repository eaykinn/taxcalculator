import type {
  CalculatorInput,
  CalculatorResult,
  ChartDataPoint,
  FederalTaxConfig,
  ProgressiveStateTax,
  SelfEmploymentConfig,
  StateTaxConfig,
  TaxBreakdownItem,
  TaxBracket,
} from "@/types/tax";
import { CHART_COLORS, TAX_DATA } from "./constants";

function calculateProgressiveTax(
  taxableIncome: number,
  brackets: TaxBracket[]
): number {
  if (taxableIncome <= 0) return 0;

  let tax = 0;

  for (const bracket of brackets) {
    const upper = bracket.max ?? Infinity;
    if (taxableIncome <= bracket.min) break;

    const taxableInBracket =
      Math.min(taxableIncome, upper) - bracket.min;

    if (taxableInBracket > 0) {
      tax += taxableInBracket * bracket.rate;
    }
  }

  return tax;
}

function calculateFederalTax(
  income: number,
  federal: FederalTaxConfig,
  seDeduction: number
): number {
  const taxableIncome = Math.max(
    0,
    income - federal.standardDeduction - seDeduction
  );
  return calculateProgressiveTax(taxableIncome, federal.brackets);
}

function calculateStateTax(
  income: number,
  stateConfig: StateTaxConfig
): number {
  switch (stateConfig.type) {
    case "progressive": {
      const taxableIncome = Math.max(
        0,
        income - stateConfig.standardDeduction
      );
      return calculateProgressiveTax(
        taxableIncome,
        stateConfig.brackets
      );
    }
    case "flat": {
      const taxableIncome = Math.max(
        0,
        income - stateConfig.personalExemption
      );
      return taxableIncome * stateConfig.rate;
    }
    case "none":
      return 0;
    default:
      return 0;
  }
}

function calculateSelfEmploymentTax(
  netProfit: number,
  config: SelfEmploymentConfig
): { total: number; deductible: number } {
  if (netProfit <= 0) return { total: 0, deductible: 0 };

  const netEarnings = netProfit * 0.9235;
  const socialSecurityTax =
    Math.min(netEarnings, config.socialSecurityWageBase) * 0.124;
  const medicareTax = netEarnings * 0.029;
  const total = socialSecurityTax + medicareTax;
  const deductible = total * config.deductiblePortion;

  return { total, deductible };
}

function buildChartData(
  netIncome: number,
  federalTax: number,
  stateTax: number,
  platformFee: number,
  selfEmploymentTax: number
): ChartDataPoint[] {
  const items: ChartDataPoint[] = [
    { name: "Net Income", value: netIncome, fill: CHART_COLORS.netIncome },
    { name: "Federal Tax", value: federalTax, fill: CHART_COLORS.federalTax },
    { name: "State Tax", value: stateTax, fill: CHART_COLORS.stateTax },
    { name: "Platform Fee", value: platformFee, fill: CHART_COLORS.platformFee },
  ];

  if (selfEmploymentTax > 0) {
    items.push({
      name: "Self-Employment Tax",
      value: selfEmploymentTax,
      fill: CHART_COLORS.selfEmploymentTax,
    });
  }

  return items.filter((item) => item.value > 0);
}

export function calculateFreelancerTax(
  input: CalculatorInput
): CalculatorResult {
  const { grossIncome, platform, state, includeSelfEmploymentTax } = input;
  const platformConfig = TAX_DATA.platforms[platform];
  const stateConfig = TAX_DATA.states[state];

  const platformFee = grossIncome * platformConfig.feeRate;
  const incomeAfterPlatformFee = grossIncome - platformFee;

  const seResult = includeSelfEmploymentTax
    ? calculateSelfEmploymentTax(
        incomeAfterPlatformFee,
        TAX_DATA.selfEmployment
      )
    : { total: 0, deductible: 0 };

  const federalTax = calculateFederalTax(
    incomeAfterPlatformFee,
    TAX_DATA.federal,
    seResult.deductible
  );

  const stateTax = calculateStateTax(incomeAfterPlatformFee, stateConfig);

  const totalTax = federalTax + stateTax + seResult.total;
  const netIncome = incomeAfterPlatformFee - totalTax;
  const effectiveTaxRate =
    grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0;

  const breakdown: TaxBreakdownItem[] = [
    { label: "Gross Income", amount: grossIncome },
    {
      label: `${platformConfig.name} Platform Fee`,
      amount: platformFee,
      rate: platformConfig.feeRate,
    },
    { label: "Income After Platform Fee", amount: incomeAfterPlatformFee },
    { label: "Federal Income Tax", amount: federalTax },
    {
      label: `${stateConfig.name} State Tax`,
      amount: stateTax,
    },
  ];

  if (includeSelfEmploymentTax) {
    breakdown.push({
      label: "Self-Employment Tax",
      amount: seResult.total,
      rate: TAX_DATA.selfEmployment.rate,
    });
  }

  breakdown.push(
    { label: "Total Tax & Fees", amount: platformFee + totalTax },
    { label: "Estimated Net Income", amount: netIncome }
  );

  const chartData = buildChartData(
    Math.max(0, netIncome),
    federalTax,
    stateTax,
    platformFee,
    seResult.total
  );

  return {
    grossIncome,
    platformFee,
    platformFeeRate: platformConfig.feeRate,
    incomeAfterPlatformFee,
    federalTax,
    stateTax,
    selfEmploymentTax: seResult.total,
    totalTax,
    netIncome,
    effectiveTaxRate,
    breakdown,
    chartData,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPercent(rate: number, decimals = 1): string {
  return `${(rate * 100).toFixed(decimals)}%`;
}

export function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
