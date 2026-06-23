import { SITE_EMAIL } from "@/lib/constants";

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 text-muted">
        Reach us at{" "}
        <a href={`mailto:${SITE_EMAIL}`} className="text-accent hover:underline">
          {SITE_EMAIL}
        </a>{" "}
        for feedback or partnership inquiries.
      </p>
    </article>
  );
}
