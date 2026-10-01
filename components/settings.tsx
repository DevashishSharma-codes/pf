"use client";
import { SPRING_CONFIG } from "@/lib/motion-config";
import { cn } from "@/lib/utils";
import { IconSettingsFilled } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { DottedSeparator } from "./separator";

type FontOption = "inter" | "schibsted" | "geist";
type ColorOption =
  | "regular"
  | "black"
  | "rose"
  | "emerald"
  | "blue"
  | "amber"
  | "violet";

const FONTS: { id: FontOption; label: string; variable: string }[] = [
  {
    id: "schibsted",
    label: "Schibsted",
    variable: "var(--font-schibsted-grotesk)",
  },
  { id: "inter", label: "Inter", variable: "var(--font-inter)" },
  { id: "geist", label: "Geist", variable: "var(--font-geist-sans)" },
];

const COLORS: {
  id: ColorOption;
  label: string;
  swatch: string;
  bg: string;
  primary: string;
  foreground: string;
  gradientFrom: string;
  gradientTo: string;
  ringOffset: string;
  activeRing: string;
}[] = [
  {
    id: "black",
    label: "Espresso",
    swatch: "bg-[#151413] border border-stone-600 shadow-xs",
    bg: "#151413",
    primary: "#fbf8f3",
    foreground: "#ece6db",
    gradientFrom: "from-stone-700",
    gradientTo: "to-stone-950",
    ringOffset: "ring-offset-stone-800",
    activeRing: "ring-stone-400",
  },
  {
    id: "regular",
    label: "White",
    swatch: "bg-white border border-neutral-300 shadow-xs",
    bg: "var(--color-white)",
    primary: "var(--color-neutral-700)",
    foreground: "var(--color-neutral-600)",
    gradientFrom: "from-neutral-700",
    gradientTo: "to-neutral-900",
    ringOffset: "ring-offset-neutral-800",
    activeRing: "ring-neutral-400",
  },
  {
    id: "rose",
    label: "Bloom",
    swatch: "bg-rose-500 shadow-xs",
    bg: "#1a1318",
    primary: "#fdf2f8",
    foreground: "#f5d0fe",
    gradientFrom: "from-rose-500",
    gradientTo: "to-fuchsia-900",
    ringOffset: "ring-offset-rose-700",
    activeRing: "ring-rose-400",
  },
  {
    id: "emerald",
    label: "Sage",
    swatch: "bg-emerald-500 shadow-xs",
    bg: "#121815",
    primary: "#ecfdf5",
    foreground: "#a7f3d0",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-900",
    ringOffset: "ring-offset-emerald-700",
    activeRing: "ring-emerald-400",
  },
  {
    id: "blue",
    label: "Midnight",
    swatch: "bg-indigo-500 shadow-xs",
    bg: "#12151c",
    primary: "#eff6ff",
    foreground: "#bfdbfe",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-blue-900",
    ringOffset: "ring-offset-indigo-700",
    activeRing: "ring-indigo-400",
  },
  {
    id: "amber",
    label: "Honey",
    swatch: "bg-amber-500 shadow-xs",
    bg: "#181512",
    primary: "#fffbeb",
    foreground: "#fde68a",
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-900",
    ringOffset: "ring-offset-amber-700",
    activeRing: "ring-amber-400",
  },
  {
    id: "violet",
    label: "Lilac",
    swatch: "bg-violet-500 shadow-xs",
    bg: "#16131c",
    primary: "#faf5ff",
    foreground: "#e9d5ff",
    gradientFrom: "from-violet-500",
    gradientTo: "to-purple-900",
    ringOffset: "ring-offset-violet-700",
    activeRing: "ring-violet-400",
  },
];

const STORAGE_KEY = "site-settings-v3";

function isColorOption(value: unknown): value is ColorOption {
  return typeof value === "string" && COLORS.some((c) => c.id === value);
}

function loadSettings(): { font: FontOption; color: ColorOption } {
  if (typeof window === "undefined")
    return { font: "schibsted", color: "black" };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as {
        font?: FontOption;
        color?: unknown;
      };
      const color = isColorOption(parsed.color) ? parsed.color : "black";
      const font =
        parsed.font && FONTS.some((f) => f.id === parsed.font)
          ? parsed.font
          : "schibsted";
      return { font, color };
    }
  } catch {}
  return { font: "schibsted", color: "black" };
}

function saveSettings(font: FontOption, color: ColorOption) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ font, color }));
}

function applySettings(font: FontOption, color: ColorOption) {
  const root = document.documentElement;
  const fontConfig = FONTS.find((f) => f.id === font)!;
  const colorConfig = COLORS.find((c) => c.id === color)!;

  root.style.setProperty("--primary-font", fontConfig.variable);
  root.style.setProperty("--theme-bg", colorConfig.bg);
  root.style.setProperty("--primary", colorConfig.primary);
  root.style.setProperty("--foreground", colorConfig.foreground);
}

export const Settings = () => {
  const [open, setOpen] = useState(false);
  const [font, setFont] = useState<FontOption>("schibsted");
  const [color, setColor] = useState<ColorOption>("black");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = loadSettings();
    setFont(saved.font);
    setColor(saved.color);
    applySettings(saved.font, saved.color);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const handleFont = (f: FontOption) => {
    setFont(f);
    applySettings(f, color);
    saveSettings(f, color);
  };

  const handleColor = (c: ColorOption) => {
    setColor(c);
    applySettings(font, c);
    saveSettings(font, c);
  };

  const colorConfig = COLORS.find((c) => c.id === color)!;

  return (
    <div
      ref={containerRef}
      className="fixed top-4 right-4 z-50 flex flex-col items-end"
    >
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.button
            key="trigger"
            layoutId="settings-container"
            onClick={() => setOpen(true)}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={cn(
              "fixed top-5 right-5 flex aspect-square size-8 items-center justify-center rounded-lg bg-linear-to-b align-middle ring-1 ring-white/20 ring-offset-2 ring-inset cursor-pointer",
              colorConfig.gradientFrom,
              colorConfig.gradientTo,
              colorConfig.ringOffset,
            )}
            title="Theme & Font Settings"
            aria-label="Theme settings"
          >
            <IconSettingsFilled className="size-4 shrink-0 text-white drop-shadow-xl drop-shadow-black/40" />
          </motion.button>
        ) : (
          <motion.div
            key="panel"
            layoutId="settings-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={cn(
              "fixed top-4 right-4 w-56 rounded-xl border border-neutral-200 bg-linear-to-b p-4 shadow-sm ring-1 ring-white/20 ring-offset-2 ring-inset dark:border-neutral-700",
              colorConfig.gradientFrom,
              colorConfig.gradientTo,
              colorConfig.ringOffset,
            )}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.15 }}
            >
              <div className="mb-3">
                <div className="flex items-start gap-1.5">
                  {FONTS.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => handleFont(f.id)}
                      style={{ fontFamily: f.variable }}
                      className={cn(
                        `rounded-md bg-linear-to-b px-2 py-1 text-xs font-light text-white shadow-sm ring-1 shadow-black/10 ring-black/10 transition-all duration-200 cursor-pointer`,
                        font === f.id && colorConfig.gradientFrom,
                        font === f.id && colorConfig.gradientTo,
                        font === f.id && colorConfig.ringOffset,
                        font === f.id && "shadow-black/60",
                      )}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
              <DottedSeparator />
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {COLORS.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => handleColor(c.id)}
                      title={c.label}
                      className="group flex flex-col items-center gap-1 cursor-pointer"
                    >
                      <div
                        className={cn(
                          `size-4 rounded-full transition-all`,
                          c.swatch,
                          color === c.id
                            ? `ring-2 ring-offset-2 ${c.activeRing}`
                            : "ring-1 ring-neutral-200 group-hover:ring-neutral-400",
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
