"use client";

import { formatCurrency, formatPercent } from "@/lib/calculations";
import type { CalculatorResult } from "@/types/tax";
import { IncomeChart } from "./IncomeChart";

interface ResultsPanelProps {
  result: CalculatorResult;
}

export function ResultsPanel({ result }: ResultsPanelProps) {
  return (
    <section aria-labelledby="results-heading" className="space-y-6">
      <div>
        <h2 id="results-heading" className="text-xl font-semibold">
          Estimated Results
        </h2>
        <p className="mt-1 text-sm text-muted">
          Based on 2026 projected brackets and your inputs
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
        <ResultCard
          label="Net Income"
          value={formatCurrency(result.netIncome)}
          highlight
        />
        <ResultCard
          label="Effective Tax Rate"
          value={`${result.effectiveTaxRate.toFixed(1)}%`}
        />
        <ResultCard
          label="Federal Tax"
          value={formatCurrency(result.federalTax)}
        />
        <ResultCard
          label="State Tax"
          value={formatCurrency(result.stateTax)}
        />
        <ResultCard
          label="Platform Fee"
          value={formatCurrency(result.platformFee)}
          sub={
            result.platformFeeRate > 0
              ? formatPercent(result.platformFeeRate)
              : undefined
          }
        />
        {result.selfEmploymentTax > 0 && (
          <ResultCard
            label="Self-Employment Tax"
            value={formatCurrency(result.selfEmploymentTax)}
          />
        )}
      </div>

      <IncomeChart data={result.chartData} />

      <div className="rounded-xl border border-border bg-card">
        <h3 className="border-b border-border px-4 py-3 text-sm font-semibold">
          Full Breakdown
        </h3>
        <dl className="divide-y divide-border">
          {result.breakdown.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between px-4 py-3 text-sm"
            >
              <dt className="text-muted">
                {item.label}
                {item.rate !== undefined && (
                  <span className="ml-1 text-xs">
                    ({formatPercent(item.rate)})
                  </span>
                )}
              </dt>
              <dd className="font-medium tabular-nums">
                {formatCurrency(item.amount)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function ResultCard({
  label,
  value,
  sub,
  highlight,
}: {
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        highlight
          ? "border-accent/40 bg-accent/5"
          : "border-border bg-card"
      }`}
    >
      <p className="text-xs font-medium uppercase tracking-wide text-muted">
        {label}
      </p>
      <p
        className={`mt-1 text-lg font-bold tabular-nums ${
          highlight ? "text-accent" : ""
        }`}
      >
        {value}
      </p>
      {sub && <p className="text-xs text-muted">{sub}</p>}
    </div>
  );
}
