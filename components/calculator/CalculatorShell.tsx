"use client";

import { CalculatorForm } from "@/components/calculator/CalculatorForm";
import { ResultsPanel } from "@/components/calculator/ResultsPanel";
import { AdSlot } from "@/components/ads/AdSlot";
import { useTaxCalculator } from "@/hooks/useTaxCalculator";

export function CalculatorShell() {
  const { form, result } = useTaxCalculator();

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="space-y-8">
        <CalculatorForm form={form} />
        <AdSlot variant="rectangle" slotId="form-inline-1" className="mx-auto" />
      </div>
      <div className="space-y-8">
        <ResultsPanel result={result} />
        <AdSlot variant="rectangle" slotId="results-inline-1" className="mx-auto" />
      </div>
    </div>
  );
}
