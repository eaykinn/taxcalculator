import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/layout/ContentPage";
import { SITE_URL, TAX_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why we built Freelancer Tax Calculator — a free tool for US independent contractors to estimate net income after Upwork, Fiverr, and tax deductions.",
};

export default function AboutPage() {
  return (
    <ContentPage
      title="About Freelancer Tax Calculator"
      description="A free, browser-based estimator built for US freelancers who want clarity on take-home pay before tax season arrives."
    >
      <section>
        <h2>Our mission</h2>
        <p>
          Freelancers on Upwork, Fiverr, and other platforms often see a gross
          payment in their dashboard but a much smaller deposit in their bank
          account. Between marketplace fees, federal income tax, state tax, and
          self-employment tax, it is easy to underestimate what you actually
          keep. We built {SITE_URL} to make that gap visible in seconds — no
          signup, no spreadsheets, no guesswork.
        </p>
      </section>

      <section>
        <h2>What the calculator does</h2>
        <p>
          Enter your estimated annual gross freelance income, choose your
          platform (Upwork, Fiverr, or none), select your US state, and
          optionally include self-employment tax. The calculator instantly
          shows:
        </p>
        <ul>
          <li>Platform fee deduction based on your marketplace selection</li>
          <li>Federal income tax using {TAX_YEAR} projected brackets</li>
          <li>
            State income tax for California, New York, Illinois, Texas, or
            Florida — including progressive, flat, and zero-tax models
          </li>
          <li>Self-employment tax (Social Security and Medicare) when enabled</li>
          <li>Estimated net take-home income with an interactive breakdown chart</li>
        </ul>
        <p>
          All calculations run locally in your browser. We never receive the
          numbers you type in.
        </p>
      </section>

      <section>
        <h2>Who this is for</h2>
        <p>
          This tool is designed for US-based independent contractors, sole
          proprietors, and side-gig workers who want a quick planning estimate.
          It is especially useful if you:
        </p>
        <ul>
          <li>Are setting freelance rates and need to know your true hourly floor</li>
          <li>Want to compare tax outcomes across different states before relocating</li>
          <li>Are deciding between platforms and want to see fee impact on net pay</li>
          <li>Need a rough figure for quarterly estimated tax payments</li>
        </ul>
      </section>

      <section>
        <h2>How we source tax data</h2>
        <p>
          Federal and state tax brackets, standard deductions, and self-employment
          tax parameters are based on {TAX_YEAR} projections derived from recent
          IRS inflation adjustments and published state rate schedules. Platform
          fee rates reflect commonly cited Upwork and Fiverr commission
          structures, simplified for planning purposes.
        </p>
        <p>
          Tax law changes frequently. We update the underlying data when new
          brackets or rates are finalized, but there may be a lag between
          official publication and our updates.
        </p>
      </section>

      <section>
        <h2>What this tool is not</h2>
        <p>
          Freelancer Tax Calculator is an educational estimator, not a
          substitute for professional tax preparation software or advice from a
          licensed CPA. It does not file returns, track expenses, generate
          1099 forms, or account for every deduction and credit available to
          your situation.
        </p>
        <p>
          If your taxes involve business entities (LLC, S-Corp), multiple
          revenue streams, or significant itemized deductions, please work with
          a qualified professional for filing-ready numbers.
        </p>
      </section>

      <section>
        <h2>Try the calculator</h2>
        <p>
          Ready to see your estimate? Head to the{" "}
          <Link href="/" className="text-accent hover:underline">
            homepage calculator
          </Link>{" "}
          and enter your numbers. Results update in real time as you adjust
          inputs.
        </p>
      </section>
    </ContentPage>
  );
}
