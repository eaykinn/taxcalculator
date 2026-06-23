"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/calculations";
import { ADSENSE_CLIENT_ID } from "@/lib/constants";

type AdVariant = "leaderboard" | "rectangle" | "sidebar";

interface AdSlotProps {
  variant: AdVariant;
  /** Numeric AdSense ad unit ID from your dashboard, e.g. "1234567890" */
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

const variantFormats: Record<AdVariant, string> = {
  leaderboard: "horizontal",
  rectangle: "rectangle",
  sidebar: "vertical",
};

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

function isAdSenseSlotId(slotId: string) {
  return /^\d+$/.test(slotId);
}

export function AdSlot({ variant, slotId, className }: AdSlotProps) {
  const pushed = useRef(false);
  const isLive = isAdSenseSlotId(slotId);

  useEffect(() => {
    if (!isLive || pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      pushed.current = false;
    }
  }, [isLive, slotId]);

  if (!isLive) {
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

  return (
    <aside
      aria-label={`Advertisement ${slotId}`}
      className={cn("overflow-hidden", className)}
    >
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slotId}
        data-ad-format={variantFormats[variant]}
        data-full-width-responsive="true"
      />
    </aside>
  );
}
