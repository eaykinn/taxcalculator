import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";
import { SITE_EMAIL, SITE_URL, TAX_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of the Freelancer Tax Calculator. Educational estimates only — not professional tax, legal, or financial advice.",
};

export default function TermsPage() {
  return (
    <ContentPage
      title="Terms of Service"
      description="Please read these terms before using Freelancer Tax Calculator. By accessing the site, you agree to the conditions below."
      lastUpdated="June 24, 2026"
    >
      <section>
        <h2>1. Acceptance of terms</h2>
        <p>
          By visiting or using {SITE_URL} (&quot;the Site&quot;), you agree to
          these Terms of Service. If you do not agree, please do not use the
          Site.
        </p>
      </section>

      <section>
        <h2>2. Description of service</h2>
        <p>
          Freelancer Tax Calculator is a free web-based tool that estimates US
          freelance net income after marketplace platform fees, federal income
          tax, state income tax, and optional self-employment tax. The Site
          uses projected {TAX_YEAR} tax bracket data for educational and
          planning purposes.
        </p>
      </section>

      <section>
        <h2>3. Not professional advice</h2>
        <p>
          The Site does not provide tax, legal, accounting, or financial advice.
          Results are general estimates based on simplified assumptions and
          publicly available tax rate information. Your actual tax liability
          depends on many factors this calculator cannot account for, including
          but not limited to:
        </p>
        <ul>
          <li>Itemized deductions, credits, and adjustments</li>
          <li>Multiple income sources, W-2 wages, and business expenses</li>
          <li>Quarterly estimated payment history and safe-harbor rules</li>
          <li>Local, city, or county taxes</li>
          <li>Changes in tax law after our data was last updated</li>
          <li>Your specific Upwork or Fiverr fee tier and contract terms</li>
        </ul>
        <p>
          Always consult a licensed CPA, enrolled agent, or qualified tax
          professional before making filing decisions.
        </p>
      </section>

      <section>
        <h2>4. Accuracy and limitations</h2>
        <p>
          We strive to keep tax data current, but we make no warranty that
          calculations are accurate, complete, or suitable for your situation.
          Platform fee rates shown are simplified averages or common rates — your
          actual marketplace fees may differ. State tax models cover a limited
          set of states and may not reflect every exemption or surcharge.
        </p>
        <p>
          You use the calculator and any results at your own risk. We are not
          responsible for decisions you make based on Site output.
        </p>
      </section>

      <section>
        <h2>5. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>
            Use the Site in any way that violates applicable laws or regulations
          </li>
          <li>
            Attempt to gain unauthorized access to our systems or interfere with
            Site operation
          </li>
          <li>
            Scrape, copy, or redistribute substantial portions of the Site
            without permission
          </li>
          <li>
            Misrepresent Site results as official IRS or state tax guidance
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Intellectual property</h2>
        <p>
          The Site&apos;s design, text, code, charts, and branding are owned by
          Freelancer Tax Calculator or its licensors. You may link to the Site
          and share results for personal, non-commercial use. You may not
          reproduce or create derivative works from the Site for commercial
          purposes without written consent.
        </p>
      </section>

      <section>
        <h2>7. Third-party links and ads</h2>
        <p>
          The Site may contain links to third-party websites or display
          third-party advertisements. We do not control and are not responsible
          for the content, privacy practices, or policies of those third parties.
          Any dealings with advertisers or external sites are solely between you
          and the third party.
        </p>
      </section>

      <section>
        <h2>8. Disclaimer of warranties</h2>
        <p>
          THE SITE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
          WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING
          IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE, AND NON-INFRINGEMENT.
        </p>
      </section>

      <section>
        <h2>9. Limitation of liability</h2>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, FREELANCER TAX CALCULATOR AND
          ITS OPERATORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
          SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS,
          DATA, OR GOODWILL, ARISING FROM YOUR USE OF OR INABILITY TO USE THE
          SITE — EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
          DAMAGES.
        </p>
      </section>

      <section>
        <h2>10. Changes to the service and terms</h2>
        <p>
          We may modify, suspend, or discontinue any part of the Site at any
          time. We may also update these Terms. Material changes will be
          reflected by updating the &quot;Last updated&quot; date. Your
          continued use after changes constitutes acceptance of the revised
          Terms.
        </p>
      </section>

      <section>
        <h2>11. Governing law</h2>
        <p>
          These Terms are governed by the laws of the United States and the
          state in which the Site operator is established, without regard to
          conflict-of-law principles. Any disputes shall be resolved in the
          courts of that jurisdiction, except where prohibited by law.
        </p>
      </section>

      <section>
        <h2>12. Contact</h2>
        <p>
          For questions about these Terms, contact{" "}
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="text-accent hover:underline"
          >
            {SITE_EMAIL}
          </a>
          .
        </p>
      </section>
    </ContentPage>
  );
}
