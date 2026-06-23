"use client";

import { PLATFORM_OPTIONS, STATE_OPTIONS } from "@/lib/constants";
import type { CalculatorFormValues } from "@/hooks/useTaxCalculator";
import type { UseFormReturn } from "react-hook-form";

interface CalculatorFormProps {
  form: UseFormReturn<CalculatorFormValues>;
}

export function CalculatorForm({ form }: CalculatorFormProps) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <section aria-labelledby="calculator-form-heading" className="space-y-6">
      <div>
        <h2 id="calculator-form-heading" className="text-xl font-semibold">
          Enter Your Details
        </h2>
        <p className="mt-1 text-sm text-muted">
          Adjust values to see real-time tax and fee estimates
        </p>
      </div>

      <form className="space-y-5" noValidate>
        <div>
          <label
            htmlFor="grossIncome"
            className="mb-2 block text-sm font-medium"
          >
            Annual Gross Freelance Income (USD)
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted">
              $
            </span>
            <input
              id="grossIncome"
              type="number"
              min={0}
              step={1000}
              aria-invalid={!!errors.grossIncome}
              aria-describedby={
                errors.grossIncome ? "grossIncome-error" : undefined
              }
              className="w-full rounded-lg border border-border bg-card py-3 pl-8 pr-4 text-base tabular-nums outline-none ring-accent focus:ring-2"
              {...register("grossIncome", { valueAsNumber: true })}
            />
          </div>
          {errors.grossIncome && (
            <p id="grossIncome-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.grossIncome.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="platform" className="mb-2 block text-sm font-medium">
            Freelance Platform
          </label>
          <select
            id="platform"
            className="w-full rounded-lg border border-border bg-card px-4 py-3 text-base outline-none ring-accent focus:ring-2"
            {...register("platform")}
          >
            {PLATFORM_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-muted">
            Platform fees are deducted before tax calculations
          </p>
        </div>

        <div>
          <label htmlFor="state" className="mb-2 block text-sm font-medium">
            State of Residence
          </label>
          <select
            id="state"
            className="w-full rounded-lg border border-border bg-card px-4 py-3 text-base outline-none ring-accent focus:ring-2"
            {...register("state")}
          >
            {STATE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
          <input
            id="includeSelfEmploymentTax"
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-border accent-accent"
            {...register("includeSelfEmploymentTax")}
          />
          <div>
            <label
              htmlFor="includeSelfEmploymentTax"
              className="text-sm font-medium"
            >
              Include Self-Employment Tax (15.3%)
            </label>
            <p className="mt-0.5 text-xs text-muted">
              Applies to most US freelancers (Social Security + Medicare)
            </p>
          </div>
        </div>
      </form>
    </section>
  );
}
