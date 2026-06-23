import { AdSlot } from "@/components/ads/AdSlot";
import { CalculatorShell } from "@/components/calculator/CalculatorShell";
import { SeoContent } from "@/components/seo/SeoContent";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <AdSlot variant="leaderboard" slotId="top-leaderboard" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10 max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Freelancer Tax &amp; Fee Calculator
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Estimate your 2026 US freelance net income after Upwork or Fiverr
            platform fees, federal income tax, state tax, and self-employment
            tax. Real-time calculations for California, New York, Illinois,
            Texas, and Florida.
          </p>
        </header>

        <CalculatorShell />
      </section>

      <section className="border-t border-border bg-card/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SeoContent />
        </div>
      </section>

      <section className="border-t border-border py-8">
        <div className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
          <AdSlot variant="leaderboard" slotId="bottom-leaderboard" />
        </div>
      </section>
    </>
  );
}
