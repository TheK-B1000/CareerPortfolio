import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

type LogStatus = "active" | "in-progress" | "objective" | "completed";

interface LogEntry {
  timestamp: string;
  code: string;
  title: string;
  description: string;
  status: LogStatus;
}

const log: LogEntry[] = [
  {
    timestamp: "T+ ONGOING",
    code: "LOG-001",
    title: "Long-term Mission · AI-driven Space Systems",
    description:
      "Apply autonomy, MARL, and intelligent software to the habitats, stations, and operations humanity will build beyond Earth.",
    status: "objective",
  },
  {
    timestamp: "T+ DEC 2026 (EXPECTED)",
    code: "LOG-002",
    title: "M.S. Computer Science · UNF · GPA 3.8",
    description:
      "Coursework: Intro to AI, Advanced AI, Machine Learning, AI & ML in Fintech — the formal foundation for the long-term mission.",
    status: "in-progress",
  },
  {
    timestamp: "T+ CURRENT",
    code: "LOG-003",
    title: "Research Focus · Multi-Agent RL",
    description:
      "Active R&D in multi-agent reinforcement learning and autonomous systems through the SEA-GUARD platform.",
    status: "active",
  },
  {
    timestamp: "T− PRIOR",
    code: "LOG-004",
    title: "Software Engineer · XR / Mixed Reality",
    description:
      "Built software bridging physical and digital environments — laid the groundwork for the gameplay + XR + AI intersection.",
    status: "completed",
  },
  {
    timestamp: "T− PRIOR",
    code: "LOG-005",
    title: "B.S. Information Science · UNF · GPA 3.5",
    description:
      "Foundational training in information architecture, systems thinking, and technology — the origin file.",
    status: "completed",
  },
];

const statusMap: Record<LogStatus, { label: string; cls: string }> = {
  active: { label: "ACTIVE", cls: "text-signal border-signal/50" },
  "in-progress": { label: "IN-PROGRESS", cls: "text-primary border-primary/50" },
  objective: { label: "OBJECTIVE", cls: "text-accent border-accent/50" },
  completed: { label: "COMPLETED", cls: "text-muted-foreground border-white/20" },
};

export function Timeline() {
  return (
    <section id="timeline" className="py-24 md:py-32 relative">
      <div className="container relative z-10 px-6 mx-auto max-w-5xl">
        <SectionHeader
          index="07"
          eyebrow="LOGS // MISSION TIMELINE"
          title="A reverse-chronological flight log."
          subtitle="Origin file at the bottom, the long-term mission at the top."
          meta="FILE 06 / 05 ENTRIES"
        />

        <ol className="relative border-l border-white/10 ml-3 sm:ml-4">
          {log.map((entry, i) => {
            const s = statusMap[entry.status];
            return (
              <motion.li
                key={entry.code}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-6 sm:pl-10 pb-10 last:pb-0"
                data-testid={`log-entry-${entry.code}`}
              >
                {/* Node */}
                <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-background border border-primary" />
                {entry.status === "active" && (
                  <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-primary soft-pulse pointer-events-none" />
                )}

                {/* Meta line */}
                <div className="flex items-center flex-wrap gap-x-4 gap-y-1 mb-3">
                  <span className="label-mono text-primary tabular-nums">{entry.code}</span>
                  <span className="label-mono text-muted-foreground/80 tabular-nums">
                    {entry.timestamp}
                  </span>
                  <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] px-2 py-0.5 border ${s.cls}`}>
                    <span className="w-1 h-1 rounded-full bg-current" />
                    {s.label}
                  </span>
                </div>

                <h3 className="font-display text-xl md:text-2xl text-white tracking-tight leading-tight mb-2">
                  {entry.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl">
                  {entry.description}
                </p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
