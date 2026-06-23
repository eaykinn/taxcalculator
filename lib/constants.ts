import taxData from "./taxData.json";
import type { FilingStatus, PlatformKey, StateCode, TaxData } from "@/types/tax";

export const TAX_DATA = taxData as TaxData;

export const TAX_YEAR = TAX_DATA.year;

export const STATE_OPTIONS: { value: StateCode; label: string }[] = (
  Object.entries(TAX_DATA.states) as [StateCode, { name: string }][]
).map(([code, state]) => ({
  value: code,
  label: `${state.name} (${code})`,
}));

export const PLATFORM_OPTIONS: { value: PlatformKey; label: string }[] = (
  Object.entries(TAX_DATA.platforms) as [PlatformKey, { name: string }][]
).map(([key, platform]) => ({
  value: key,
  label: platform.name,
}));

export const FILING_STATUS_OPTIONS: { value: FilingStatus; label: string }[] = (
  Object.entries(TAX_DATA.federal) as [FilingStatus, { label: string }][]
).map(([value, config]) => ({
  value,
  label: config.label,
}));

export const CHART_COLORS = {
  netIncome: "#22c55e",
  federalTax: "#3b82f6",
  stateTax: "#a855f7",
  platformFee: "#f97316",
  selfEmploymentTax: "#ef4444",
} as const;

export const FAQ_ITEMS = [
  {
    question: "How does this freelancer tax calculator work?",
    answer:
      "Enter your gross freelance income, select your freelancing platform (Upwork, Fiverr, or none), and choose your state. The calculator deducts platform fees first, then estimates federal income tax, state income tax, and optional self-employment tax to show your estimated net take-home pay.",
  },
  {
    question: "What platform fees does Upwork charge?",
    answer:
      "Upwork typically charges a service fee on earnings that varies by contract type and client relationship. This calculator uses a simplified 10% estimate for planning purposes. Actual fees may differ based on your Upwork contract tier.",
  },
  {
    question: "How much does Fiverr take from freelancers?",
    answer:
      "Fiverr charges a 20% commission on completed order earnings. This calculator applies that rate before estimating your tax obligations and net income.",
  },
  {
    question: "Which states have no income tax?",
    answer:
      "Texas and Florida are included in this calculator as zero income tax states. If you live in a no-income-tax state, you will still owe federal taxes and potentially self-employment tax as a freelancer.",
  },
  {
    question: "Does this include self-employment tax?",
    answer:
      "Yes. When enabled, the calculator estimates the 15.3% self-employment tax (Social Security and Medicare) that applies to most US freelancers, with the deductible employer-equivalent portion reflected in federal tax calculations.",
  },
  {
    question: "Are these tax estimates accurate for filing?",
    answer:
      "This tool provides educational estimates based on 2026 bracket projections. It does not account for all deductions, credits, local taxes, or individual circumstances. Consult a qualified tax professional before filing.",
  },
] as const;
