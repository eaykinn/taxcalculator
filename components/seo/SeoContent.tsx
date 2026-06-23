import { FAQ_ITEMS } from "@/lib/constants";

export function SeoContent() {
  return (
    <section
      aria-labelledby="seo-content-heading"
      className="prose prose-neutral mx-auto max-w-4xl dark:prose-invert"
    >
      <h2 id="seo-content-heading" className="text-2xl font-bold not-prose">
        How to Calculate Your Freelance Net Income in the United States
      </h2>

      <p>
        As a freelancer in the United States, understanding your true take-home
        pay requires more than subtracting a flat percentage from your gross
        earnings. Platform marketplaces like Upwork and Fiverr charge service
        fees before you ever see a deposit. On top of that, you owe federal
        income tax, state income tax (in most states), and self-employment tax
        covering Social Security and Medicare. This Freelancer Tax &amp; Fee
        Calculator brings those layers together in one place so you can plan
        your budget, set your rates, and avoid surprises at tax time.
      </p>

      <h3 className="text-xl font-semibold not-prose">
        Step 1: Start With Gross Freelance Income
      </h3>
      <p>
        Gross income is the total amount you bill clients before any deductions.
        Whether you invoice through a platform or directly, this number
        represents your top-line revenue for the year. Enter your estimated
        annual gross in the calculator to begin. If your income varies month
        to month, use a conservative annual projection based on your current
        client pipeline and historical earnings.
      </p>

      <h3 className="text-xl font-semibold not-prose">
        Step 2: Deduct Platform Fees (Upwork, Fiverr, or None)
      </h3>
      <p>
        Freelance platforms take a cut of every transaction. Fiverr charges a
        flat 20% commission on completed orders, which significantly reduces
        your taxable base before funds reach your bank account. Upwork uses a
        tiered service fee structure that typically ranges from 5% to 10%
        depending on your contract history with each client. Selecting your
        platform in this calculator automatically applies the appropriate fee
        rate so your tax estimates reflect what you actually earn, not what
        clients pay on paper.
      </p>

      <h3 className="text-xl font-semibold not-prose">
        Step 3: Calculate Federal Income Tax
      </h3>
      <p>
        The IRS taxes freelance income using progressive federal brackets. As
        your income rises, each additional dollar falls into a higher marginal
        rate. For 2026, this calculator uses projected single-filer brackets
        adjusted from recent IRS inflation data, along with the standard
        deduction. When self-employment tax is enabled, half of that amount is
        deducted from your federal taxable income, mirroring how Schedule SE
        interacts with Form 1040 for most sole proprietors and independent
        contractors.
      </p>

      <h3 className="text-xl font-semibold not-prose">
        Step 4: Apply State Income Tax by Tax Type
      </h3>
      <p>
        State tax rules vary dramatically across the US. California and New
        York use progressive bracket systems with multiple rates that increase
        as income grows. Illinois applies a flat 4.95% rate on income above
        its personal exemption. Texas and Florida impose no state income tax at
        all, which can make a meaningful difference in effective tax rate for
        remote freelancers choosing where to establish residency. This
        calculator detects each state&apos;s tax type automatically and applies
        the correct formula — progressive brackets, flat rate, or zero — so you
        can compare outcomes across states.
      </p>

      <h3 className="text-xl font-semibold not-prose">
        Step 5: Account for Self-Employment Tax
      </h3>
      <p>
        Unlike W-2 employees who split payroll taxes with employers, freelancers
        pay the full 15.3% self-employment tax on net earnings. This covers
        12.4% for Social Security (up to the annual wage base) and 2.9% for
        Medicare. The calculator uses the standard 92.35% net earnings factor
        and applies the current Social Security wage cap. Enabling this option
        gives you a realistic picture of total tax burden that many generic
        income tax calculators omit entirely.
      </p>

      <h3 className="text-xl font-semibold not-prose">
        Step 6: Arrive at Estimated Net Income
      </h3>
      <p>
        Net income is what remains after platform fees, federal tax, state tax,
        and self-employment tax. This is the number that should drive your
        quarterly estimated tax payments, emergency fund sizing, and rate
        negotiations with new clients. The interactive chart on this page
        visualizes how each deduction slice compares to your take-home portion,
        making it easy to see where your money goes.
      </p>

      <h3 className="text-xl font-semibold not-prose">
        Frequently Asked Questions
      </h3>
      <dl className="not-prose space-y-6">
        {FAQ_ITEMS.map((item) => (
          <div key={item.question}>
            <dt className="font-semibold text-foreground">{item.question}</dt>
            <dd className="mt-2 text-muted">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
