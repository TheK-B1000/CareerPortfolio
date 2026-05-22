import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MissionClock } from "./MissionClock";

interface Stat {
  value: string;
  numeric?: number;
  label: string;
  sublabel?: string;
  channel: string;
}

const stats: Stat[] = [
  { value: "8", numeric: 8, label: "Active Missions", sublabel: "Shipping & R&D", channel: "CH-01" },
  { value: "3", numeric: 3, label: "Domains Engineered", sublabel: "AI · Games · XR", channel: "CH-02" },
  { value: "2026", numeric: 2026, label: "MS Computer Science", sublabel: "Target completion", channel: "CH-03" },
  { value: "1", numeric: 1, label: "North Star", sublabel: "AI for space stations", channel: "CH-04" },
];

function CountUp({ to, durationMs = 1200 }: { to: number; durationMs?: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, durationMs]);
  return <>{n}</>;
}

export function MissionControl() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="mission-control" className="relative -mt-12 sm:-mt-20 z-20 px-6">
      <div ref={ref} className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative bg-card/60 backdrop-blur-xl border border-white/10"
          data-testid="mission-control-strip"
        >
          {/* Corner brackets */}
          <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-primary" />
          <span className="absolute -top-px -right-px w-3 h-3 border-t border-r border-primary" />
          <span className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-primary" />
          <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-primary" />

          {/* Header strip */}
          <div className="flex items-center justify-between px-5 py-2.5 border-b border-white/10">
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-1.5 h-1.5 rounded-full bg-primary soft-pulse" />
              <span className="label-mono text-primary truncate">
                Mission Control · Telemetry Feed
              </span>
            </div>
            <span className="label-mono text-muted-foreground/70 hidden sm:inline">
              <MissionClock /> · NOMINAL
            </span>
          </div>

          {/* Channels — single-source-of-truth divider via gap-px on a tinted parent */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="bg-card/60 px-5 py-6 sm:px-6 sm:py-8"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="label-mono text-primary/80 tabular-nums">{stat.channel}</span>
                  <span className="w-1 h-1 rounded-full bg-primary/60" />
                </div>

                <div className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-white tabular-nums leading-none mb-3">
                  {stat.numeric !== undefined && inView ? <CountUp to={stat.numeric} /> : stat.value}
                </div>

                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/90">
                  {stat.label}
                </div>
                {stat.sublabel && (
                  <div className="label-mono mt-1 text-muted-foreground/70">
                    {stat.sublabel}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
