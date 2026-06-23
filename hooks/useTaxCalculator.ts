"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { calculateFreelancerTax } from "@/lib/calculations";
import type { CalculatorInput, CalculatorResult } from "@/types/tax";

const calculatorSchema = z.object({
  grossIncome: z
    .number({ invalid_type_error: "Enter a valid income amount" })
    .min(0, "Income cannot be negative")
    .max(10_000_000, "Income must be under $10,000,000"),
  platform: z.enum(["none", "upwork", "fiverr"]),
  state: z.enum(["CA", "NY", "IL", "TX", "FL"]),
  filingStatus: z.enum(["single", "married_filing_jointly"]),
  includeSelfEmploymentTax: z.boolean(),
});

export type CalculatorFormValues = z.infer<typeof calculatorSchema>;

const defaultValues: CalculatorFormValues = {
  grossIncome: 75000,
  platform: "upwork",
  state: "CA",
  filingStatus: "single",
  includeSelfEmploymentTax: true,
};

export function useTaxCalculator() {
  const form = useForm<CalculatorFormValues>({
    resolver: zodResolver(calculatorSchema),
    defaultValues,
    mode: "onChange",
  });

  const watchedValues = form.watch();

  const result: CalculatorResult = useMemo(() => {
    const input: CalculatorInput = {
      grossIncome: watchedValues.grossIncome ?? 0,
      platform: watchedValues.platform ?? "none",
      state: watchedValues.state ?? "CA",
      filingStatus: watchedValues.filingStatus ?? "single",
      includeSelfEmploymentTax:
        watchedValues.includeSelfEmploymentTax ?? true,
    };
    return calculateFreelancerTax(input);
  }, [
    watchedValues.grossIncome,
    watchedValues.platform,
    watchedValues.state,
    watchedValues.filingStatus,
    watchedValues.includeSelfEmploymentTax,
  ]);

  return { form, result, watchedValues };
}
