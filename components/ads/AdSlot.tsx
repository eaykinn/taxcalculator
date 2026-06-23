import { cn } from "@/lib/calculations";

type AdVariant = "leaderboard" | "rectangle" | "sidebar";

interface AdSlotProps {
  variant: AdVariant;
  slotId: string;
  className?: string;
}

const variantClasses: Record<AdVariant, string> = {
  leaderboard: "ad-slot-leaderboard",
  rectangle: "ad-slot-rectangle",
  sidebar: "ad-slot-sidebar",
};

const variantLabels: Record<AdVariant, string> = {
  leaderboard: "728×90 Leaderboard Ad",
  rectangle: "300×250 Medium Rectangle Ad",
  sidebar: "160×600 Wide Skyscraper Ad",
};

export function AdSlot({ variant, slotId, className }: AdSlotProps) {
  return (
    <aside
      aria-label={`Advertisement ${slotId}`}
      data-ad-slot={slotId}
      className={cn(variantClasses[variant], className)}
    >
      <span className="sr-only">Advertisement placeholder</span>
      <span aria-hidden="true">{variantLabels[variant]}</span>
    </aside>
  );
}
