import Link from "next/link";

interface ContentPageProps {
  title: string;
  description?: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export function ContentPage({
  title,
  description,
  lastUpdated,
  children,
}: ContentPageProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <header className="border-b border-border pb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {description}
          </p>
        ) : null}
        {lastUpdated ? (
          <p className="mt-3 text-sm text-muted">Last updated: {lastUpdated}</p>
        ) : null}
      </header>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:text-lg [&_h3]:font-semibold [&_li]:text-muted [&_p]:text-muted [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>

      <footer className="mt-12 border-t border-border pt-8">
        <Link
          href="/"
          className="text-sm font-medium text-accent transition-colors hover:underline"
        >
          ← Back to calculator
        </Link>
      </footer>
    </article>
  );
}
