export type TaxType = "progressive" | "flat" | "none";

export type PlatformKey = "none" | "upwork" | "fiverr";

export type StateCode = "CA" | "NY" | "IL" | "TX" | "FL";

export interface TaxBracket {
  min: number;
  max: number | null;
  rate: number;
}

export interface ProgressiveStateTax {
  name: string;
  type: "progressive";
  standardDeduction: number;
  brackets: TaxBracket[];
}

export interface FlatStateTax {
  name: string;
  type: "flat";
  rate: number;
  personalExemption: number;
}

export interface NoneStateTax {
  name: string;
  type: "none";
  rate: number;
}

export type StateTaxConfig =
  | ProgressiveStateTax
  | FlatStateTax
  | NoneStateTax;

export interface FederalTaxConfig {
  filingStatus: string;
  standardDeduction: number;
  brackets: TaxBracket[];
}

export interface SelfEmploymentConfig {
  rate: number;
  deductiblePortion: number;
  socialSecurityWageBase: number;
}

export interface PlatformConfig {
  name: string;
  feeRate: number;
  description?: string;
}

export interface TaxData {
  year: number;
  currency: string;
  federal: FederalTaxConfig;
  selfEmployment: SelfEmploymentConfig;
  platforms: Record<PlatformKey, PlatformConfig>;
  states: Record<StateCode, StateTaxConfig>;
}

export interface CalculatorInput {
  grossIncome: number;
  platform: PlatformKey;
  state: StateCode;
  includeSelfEmploymentTax: boolean;
}

export interface TaxBreakdownItem {
  label: string;
  amount: number;
  rate?: number;
}

export interface CalculatorResult {
  grossIncome: number;
  platformFee: number;
  platformFeeRate: number;
  incomeAfterPlatformFee: number;
  federalTax: number;
  stateTax: number;
  selfEmploymentTax: number;
  totalTax: number;
  netIncome: number;
  effectiveTaxRate: number;
  breakdown: TaxBreakdownItem[];
  chartData: ChartDataPoint[];
}

export interface ChartDataPoint {
  name: string;
  value: number;
  fill: string;
}
