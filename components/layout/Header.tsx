import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex flex-col">
          <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-accent">
            Freelancer Tax Calculator
          </span>
          <span className="text-xs text-muted">
            US Federal &amp; State Estimates · 2026
          </span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
