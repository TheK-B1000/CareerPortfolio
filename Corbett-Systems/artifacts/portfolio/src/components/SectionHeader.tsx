import { motion } from "framer-motion";

interface SectionHeaderProps {
  /** Section ordinal, e.g. "02" — displayed as a NASA-style file index */
  index?: string;
  /** Short uppercase channel label, e.g. "SYSTEMS // CAPABILITY MATRIX" */
  eyebrow?: string;
  /** Display title — serif editorial */
  title: string;
  /** Optional supporting line under the title */
  subtitle?: string;
  /** Right-aligned meta label, e.g. "CH-02" */
  meta?: string;
  id?: string;
}

export function SectionHeader({ index, eyebrow, title, subtitle, meta, id }: SectionHeaderProps) {
  return (
    <header className="mb-14 md:mb-20" id={id}>
      {/* Top channel rule */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between gap-4 border-t border-white/10 pt-3"
      >
        <div className="flex items-baseline gap-3 min-w-0">
          {index && (
            <span className="label-mono text-primary/90 tabular-nums">{index}</span>
          )}
          {eyebrow && (
            <span className="label-mono truncate">{eyebrow}</span>
          )}
        </div>
        {meta && (
          <span className="label-mono text-muted-foreground/60 shrink-0 hidden sm:inline">
            {meta}
          </span>
        )}
      </motion.div>

      {/* Display title */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-display text-balance mt-5 text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-white"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </header>
  );
}
