import { motion } from "framer-motion";

interface GlowDividerProps {
  label?: string;
  code?: string;
}

/**
 * Subtle transmission-segment divider between major sections.
 * Replaces the previous glow with a hairline + small editorial label.
 */
export function GlowDivider({ label, code }: GlowDividerProps) {
  return (
    <div className="relative py-10 md:py-14 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-6xl flex items-center gap-4"
      >
        <span className="label-mono text-muted-foreground/60 tabular-nums hidden sm:inline">
          {code ?? "//"}
        </span>
        <div className="flex-1 h-px bg-white/10" />
        {label && (
          <span className="label-mono text-primary/80 whitespace-nowrap">
            {label}
          </span>
        )}
        <div className="flex-1 h-px bg-white/10" />
        <span className="label-mono text-muted-foreground/60 tabular-nums hidden sm:inline">
          END SEG
        </span>
      </motion.div>
    </div>
  );
}
