import { motion } from "framer-motion";
import { skills } from "../data/skills";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        <SectionHeader
          index="04"
          eyebrow="STACK // OPERATIONAL SUBSYSTEMS"
          title="The tools and tech I deploy with."
          subtitle="Grouped by discipline — the practical surface of the systems above."
          meta="FILE 04 / 04 CLUSTERS"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((cluster, idx) => (
            <motion.div
              key={cluster.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative border border-white/10 bg-card/30 backdrop-blur-sm"
              data-testid={`skills-cluster-${idx}`}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="label-mono text-primary tabular-nums">
                    CL-{String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-sm text-white uppercase tracking-[0.15em]">
                    {cluster.category}
                  </span>
                </div>
                <span className="label-mono text-muted-foreground/60 tabular-nums">
                  {cluster.items.length}
                </span>
              </div>

              {/* Items */}
              <ul className="grid grid-cols-2 sm:grid-cols-3 divide-x divide-y divide-white/5">
                {cluster.items.map((skill, sIdx) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.08 + sIdx * 0.04 }}
                    className="px-4 py-3 text-sm text-white/90 font-mono hover:bg-white/5 hover:text-primary transition-colors"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
