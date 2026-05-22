import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const dossier: [string, string][] = [
  ["Origin", "B.S. Information Science · UNF · GPA 3.5"],
  ["Trajectory", "M.S. Computer Science · UNF · GPA 3.8 · Exp. Dec 2026"],
  ["Focus", "Python · PyTorch · MARL · Mixed Reality · Intelligent Systems"],
  ["Long-game", "AI & autonomy for orbital habitats"],
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        <SectionHeader
          index="01"
          eyebrow="MISSION BRIEF // ORIGIN & OBJECTIVE"
          title="The intersection of intelligence and immersion — pointed at the stars."
          meta="FILE 01 / DOSSIER"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Editorial blurb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="font-display text-2xl md:text-3xl leading-snug text-white text-balance">
              I forge the intersection where{" "}
              <span className="italic text-primary">gameplay</span>,{" "}
              <span className="italic text-primary">machine learning</span>, and{" "}
              <span className="italic text-primary">mixed reality</span> collide
              — with my eyes set on the stars.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              My work sits at the place where simulation, intelligence, and
              interaction stop being separate disciplines. I prototype gameplay
              loops, train autonomous agents, and ship multimodal AI — then look
              for what those systems could become if they ran somewhere harder
              than Earth.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              My long-term mission is to take everything I'm building today and
              apply it to the AI and autonomy that will power humanity's space
              stations, habitats, and the systems we build beyond Earth.
            </p>
          </motion.div>

          {/* Dossier panel */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative border border-white/10 bg-card/40 backdrop-blur-sm">
              <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-primary" />
              <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-primary" />

              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                <span className="label-mono text-primary">PERSONNEL DOSSIER</span>
                <span className="label-mono text-muted-foreground/70 tabular-nums">REF-01</span>
              </div>

              <dl className="divide-y divide-white/5">
                {dossier.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-3 gap-3 px-5 py-4">
                    <dt className="label-mono col-span-1">{k}</dt>
                    <dd className="col-span-2 text-sm md:text-[0.95rem] text-white/90 leading-snug">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="px-5 py-3 border-t border-white/10 flex items-center justify-between">
                <span className="label-mono text-muted-foreground/60">FILE STATUS</span>
                <span className="flex items-center gap-2 label-mono text-signal">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal soft-pulse" />
                  ACTIVE
                </span>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
