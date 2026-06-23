import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";
import { SITE_EMAIL, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Freelancer Tax Calculator for feedback, bug reports, data corrections, or partnership inquiries.",
};

const contactReasons = [
  {
    title: "Feedback & feature requests",
    description:
      "Tell us what would make the calculator more useful — new states, additional platforms, expense tracking, or export options.",
  },
  {
    title: "Bug reports",
    description:
      "Found incorrect math, a broken chart, or a display issue on mobile? Include your browser, device, and steps to reproduce if possible.",
  },
  {
    title: "Tax data corrections",
    description:
      "If you believe a bracket, rate, or fee assumption is outdated, let us know with a link to the official source. We review all data correction requests.",
  },
  {
    title: "Partnerships & press",
    description:
      "Bloggers, educators, and tool directories interested in linking to or featuring the calculator are welcome to reach out.",
  },
];

export default function ContactPage() {
  return (
    <ContentPage
      title="Contact Us"
      description="We read every message. Whether you spotted an error, have an idea, or just want to say thanks — we'd love to hear from you."
    >
      <section>
        <h2>Email</h2>
        <p>
          The fastest way to reach us is by email at{" "}
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="font-medium text-accent hover:underline"
          >
            {SITE_EMAIL}
          </a>
          . We typically respond within two to three business days.
        </p>
      </section>

      <section>
        <h2>What you can contact us about</h2>
        <div className="not-prose space-y-6">
          {contactReasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-lg border border-border bg-card p-5"
            >
              <h3 className="font-semibold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Before you write</h2>
        <p>
          Please note that we cannot provide personalized tax advice by email.
          For questions about your specific filing situation, deductions, or
          entity structure, consult a licensed CPA or enrolled agent in your
          state.
        </p>
        <p>
          We also cannot access the numbers you enter on the calculator — all
          inputs stay on your device. If you need help reproducing a result,
          include the values you used (gross income, platform, state, filing
          status) in your message.
        </p>
      </section>

      <section>
        <h2>Site information</h2>
        <p>
          Website:{" "}
          <a href={SITE_URL} className="text-accent hover:underline">
            {SITE_URL}
          </a>
        </p>
      </section>
    </ContentPage>
  );
}
