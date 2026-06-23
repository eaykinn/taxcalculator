import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CalculatorSchema } from "@/components/seo/CalculatorSchema";
import { FaqSchema } from "@/components/seo/FaqSchema";
import { AdSenseScript } from "@/components/ads/AdSenseScript";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Freelancer Tax & Fee Calculator 2026 | US Net Income Estimator",
    template: "%s | Freelancer Tax Calculator",
  },
  description:
    "Free 2026 US freelancer tax calculator. Estimate net income after Upwork/Fiverr fees, federal tax, state tax (CA, NY, IL, TX, FL), and self-employment tax. Real-time results with charts.",
  keywords: [
    "freelancer tax calculator",
    "self employment tax calculator",
    "Upwork fee calculator",
    "Fiverr tax calculator",
    "freelance net income",
    "2026 tax brackets",
    "state income tax calculator",
  ],
  openGraph: {
    title: "Freelancer Tax & Fee Calculator 2026",
    description:
      "Calculate your freelance net income after platform fees and US taxes. Supports California, New York, Illinois, Texas, and Florida.",
    type: "website",
    locale: "en_US",
    siteName: "Freelancer Tax Calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelancer Tax & Fee Calculator 2026",
    description:
      "Estimate net freelance income after Upwork/Fiverr fees, federal & state taxes.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <CalculatorSchema />
        <FaqSchema />
        <AdSenseScript />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
