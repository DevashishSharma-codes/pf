"use client";

import { cn } from "@/lib/utils";
import { DottedUnderline, type DottedUnderlineProps } from "./dotted-underline";

export type DottedSeparatorProps = Omit<DottedUnderlineProps, "className"> & {
  /** Classes on the full-width wrapper (margins, spacing, etc.). */
  className?: string;
  /** Optional classes merged onto the dotted SVG strip. */
  svgClassName?: string;
};

/**
 * Three colored dots separator matching designerdada.com style.
 */
export function ThreeDotsSeparator({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "my-8 flex items-center justify-center gap-2 select-none",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-primary shadow-xs" />
      <span className="size-1.5 rounded-full bg-foreground/60 shadow-xs" />
      <span className="size-1.5 rounded-full bg-foreground/25 shadow-xs" />
    </div>
  );
}

/**
 * Full-width dotted line matching {@link DottedUnderline}; use between sections.
 */
export function DottedSeparator({
  className,
  svgClassName,
  ...dottedProps
}: DottedSeparatorProps) {
  return (
    <div aria-hidden className={cn("w-full shrink-0", className)}>
      <DottedUnderline
        {...dottedProps}
        className={cn(
          "relative right-auto bottom-auto left-auto block w-full opacity-40",
          svgClassName,
        )}
      />
    </div>
  );
}
