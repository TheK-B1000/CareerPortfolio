import { motion } from "framer-motion";
import { Cpu, Joystick, Glasses, Code2, Radar, ArrowUpRight, type LucideIcon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

interface Role {
  id: string;
  code: string;
  title: string;
  rationale: string;
  signals: string[];
  icon: LucideIcon;
}

const roles: Role[] = [
  {
    id: "ai-ml-engineer",
    code: "RL-01",
    title: "AI / ML Engineer",
    rationale:
      "Build production ML — agents, models, training infra. RL, multi-agent systems, and applied research are where I lean hardest.",
    signals: ["PPO · MARL", "Model deployment", "Training pipelines"],
    icon: Cpu,
  },
  {
    id: "gameplay-programmer",
    code: "RL-02",
    title: "Gameplay Programmer",
    rationale:
      "Ship gameplay systems — combat, progression, multiplayer, game feel. Unity / Unreal across both flat-screen and XR.",
    signals: ["Unity · Unreal", "C# · C++", "Systems design"],
    icon: Joystick,
  },
  {
    id: "xr-spatial-developer",
    code: "RL-03",
    title: "XR / Spatial Developer",
    rationale:
      "Build immersive software where physical and virtual environments meet. Spatial anchoring, interaction, full MR loops.",
    signals: ["Mixed reality", "Spatial UX", "Real-time pipelines"],
    icon: Glasses,
  },
  {
    id: "software-engineer",
    code: "RL-04",
    title: "Software Engineer",
    rationale:
      "Full-stack systems — backend services, APIs, scheduled jobs, and the glue that ships products. C# / Azure / SQL.",
    signals: ["Full-stack", "C# / .NET", "Azure · SQL"],
    icon: Code2,
  },
  {
    id: "autonomous-systems",
    code: "RL-05",
    title: "Autonomous Systems",
    rationale:
      "Robotics, control, and perception. Open to space-adjacent work — I'm actively growing into it through my MARL research.",
    signals: ["Autonomy R&D", "Simulation", "Open to space-adjacent"],
    icon: Radar,
  },
];

export function Roles() {
  const emailRole = (title: string) => {
    const subject = encodeURIComponent(`Role: ${title} — Recruitment Inquiry`);
    return `mailto:?subject=${subject}`;
  };

  return (
    <section id="roles" className="py-24 md:py-32 relative">
      <div className="container relative z-10 px-6 mx-auto max-w-6xl">
        <SectionHeader
          index="06"
          eyebrow="RECRUITMENT // OPEN MISSION PROFILES"
          title="Five role profiles I'm actively aligned to."
          subtitle="If your team is hiring against any of these, the channel is open."
          meta="FILE 05 / 05 PROFILES"
        />

        <div className="border border-white/10 divide-y divide-white/10">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.a
                key={role.id}
                href={emailRole(role.title)}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group block bg-card/30 hover:bg-card/60 transition-colors"
                data-testid={`card-role-${role.id}`}
              >
                <div className="grid grid-cols-12 gap-4 px-5 sm:px-8 py-6 items-center">
                  {/* Code + icon */}
                  <div className="col-span-12 sm:col-span-2 flex items-center gap-3">
                    <span className="text-muted-foreground/80 group-hover:text-primary transition-colors">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                    <span className="label-mono text-primary tabular-nums">{role.code}</span>
                  </div>

                  {/* Title + rationale */}
                  <div className="col-span-12 sm:col-span-7">
                    <h3 className="font-display text-xl md:text-2xl text-white tracking-tight leading-tight mb-2">
                      {role.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {role.rationale}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3 sm:hidden">
                      {role.signals.map((s) => (
                        <span key={s} className="text-[10px] font-mono uppercase tracking-[0.15em] px-2 py-0.5 border border-white/15 text-muted-foreground/80">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Signals (desktop) */}
                  <div className="hidden sm:flex col-span-2 flex-col gap-1 items-end">
                    {role.signals.map((s) => (
                      <span key={s} className="label-mono text-muted-foreground/80">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Status + arrow */}
                  <div className="col-span-12 sm:col-span-1 flex items-center justify-between sm:justify-end gap-3">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] px-2 py-0.5 border border-signal/50 text-signal">
                      <span className="w-1 h-1 rounded-full bg-signal soft-pulse" />
                      OPEN
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-muted-foreground/60 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
