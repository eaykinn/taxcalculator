import { SITE_URL, TAX_YEAR } from "@/lib/constants";

export function CalculatorSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Freelancer Tax & Fee Calculator",
    applicationCategory: "FinanceApplication",
    applicationSubCategory: "TaxCalculator",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: `Free ${TAX_YEAR} US freelancer tax calculator. Estimate net income after Upwork or Fiverr platform fees, federal income tax, state tax, and self-employment tax for California, New York, Illinois, Texas, and Florida.`,
    featureList: [
      "Real-time freelance net income calculation",
      "Upwork and Fiverr platform fee deduction",
      "Federal and state income tax estimation",
      "Self-employment tax calculation",
      "Interactive income breakdown chart",
    ],
    inLanguage: "en-US",
    isAccessibleForFree: true,
    potentialAction: {
      "@type": "SolveMathAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/`,
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
      "mathExpression-input": "grossIncome platform state",
      "mathExpression-output": "netIncome federalTax stateTax platformFee",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
