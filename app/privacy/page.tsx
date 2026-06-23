import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";
import { SITE_EMAIL, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Freelancer Tax Calculator handles your data. All calculations run locally in your browser — we do not store income information on our servers.",
};

export default function PrivacyPage() {
  return (
    <ContentPage
      title="Privacy Policy"
      description="We built this calculator to run in your browser without collecting your financial inputs. This policy explains what limited data we may process when you visit the site."
      lastUpdated="June 24, 2026"
    >
      <section>
        <h2>Overview</h2>
        <p>
          Freelancer Tax Calculator ({SITE_URL}) is a free educational tool that
          helps US freelancers estimate net income after platform fees and
          taxes. Your privacy matters to us. The calculator itself does not
          send your income figures, state selection, or other form inputs to
          our servers. Calculations happen entirely on your device.
        </p>
      </section>

      <section>
        <h2>Information we do not collect</h2>
        <p>
          We do not ask you to create an account, and we do not store the
          numbers you enter into the tax calculator. Your gross income, filing
          status, platform choice, and state selection remain on your device
          unless you choose to share them elsewhere (for example, by emailing us
          or taking a screenshot).
        </p>
      </section>

      <section>
        <h2>Information we may collect automatically</h2>
        <p>
          Like most websites, we may receive limited technical information when
          you visit, such as:
        </p>
        <ul>
          <li>Browser type, device type, and operating system</li>
          <li>Approximate location derived from IP address (city or region level)</li>
          <li>Pages viewed, referral source, and general usage patterns</li>
          <li>Date and time of your visit</li>
        </ul>
        <p>
          This information helps us understand traffic, fix errors, and improve
          the site. It is typically collected through standard web server logs
          and analytics or advertising tools described below.
        </p>
      </section>

      <section>
        <h2>Cookies and advertising</h2>
        <p>
          We may display advertisements through third-party partners such as
          Google AdSense. These partners may use cookies, web beacons, or
          similar technologies to serve ads based on your prior visits to this
          site or other sites on the Internet.
        </p>
        <p>
          You can learn more about how Google uses data from partner sites at{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s partner sites policy
          </a>
          . You may opt out of personalized advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>{" "}
          or{" "}
          <a
            href="https://optout.aboutads.info/"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            aboutads.info
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Theme preference</h2>
        <p>
          If you switch between light and dark mode, your preference may be
          saved in your browser&apos;s local storage so the site remembers your
          choice on return visits. This data never leaves your device.
        </p>
      </section>

      <section>
        <h2>Third-party services</h2>
        <p>
          We rely on hosting and infrastructure providers to deliver the site.
          These providers may process technical log data necessary to operate
          the service securely. We do not sell your personal information to
          third parties.
        </p>
      </section>

      <section>
        <h2>Data retention</h2>
        <p>
          Server logs and analytics data are retained only as long as needed for
          security, troubleshooting, and aggregate reporting, then deleted or
          anonymized according to our providers&apos; policies.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          Depending on where you live, you may have rights to access, correct,
          or delete personal information we hold about you. Because we do not
          collect calculator inputs, most requests will relate to server logs or
          communications you send us directly. Contact us at{" "}
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="text-accent hover:underline"
          >
            {SITE_EMAIL}
          </a>{" "}
          to submit a privacy-related request.
        </p>
      </section>

      <section>
        <h2>Children&apos;s privacy</h2>
        <p>
          This site is intended for adults managing freelance income and tax
          planning. We do not knowingly collect personal information from anyone
          under 13 years of age.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will revise the &quot;Last updated&quot; date at the top of this
          page. Continued use of the site after changes are posted constitutes
          acceptance of the updated policy.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about this Privacy Policy? Email{" "}
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
