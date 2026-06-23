export type TaxType = "progressive" | "flat" | "none";

export type PlatformKey = "none" | "upwork" | "fiverr";

export type StateCode = "CA" | "NY" | "IL" | "TX" | "FL";

export type FilingStatus = "single" | "married_filing_jointly";

export interface TaxBracket {
  min: number;
  max: number | null;
  rate: number;
}

export interface FilingStatusBracketConfig {
  standardDeduction: number;
  brackets: TaxBracket[];
}

export interface FilingStatusExemptionConfig {
  personalExemption: number;
}

export interface ProgressiveStateTax {
  name: string;
  type: "progressive";
  filingStatuses: Record<FilingStatus, FilingStatusBracketConfig>;
}

export interface FlatStateTax {
  name: string;
  type: "flat";
  rate: number;
  filingStatuses: Record<FilingStatus, FilingStatusExemptionConfig>;
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

export interface FederalFilingStatusConfig {
  label: string;
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
  federal: Record<FilingStatus, FederalFilingStatusConfig>;
  selfEmployment: SelfEmploymentConfig;
  platforms: Record<PlatformKey, PlatformConfig>;
  states: Record<StateCode, StateTaxConfig>;
}

export interface CalculatorInput {
  grossIncome: number;
  platform: PlatformKey;
  state: StateCode;
  filingStatus: FilingStatus;
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
  filingStatusLabel: string;
  breakdown: TaxBreakdownItem[];
  chartData: ChartDataPoint[];
}

export interface ChartDataPoint {
  name: string;
  value: number;
  fill: string;
}
