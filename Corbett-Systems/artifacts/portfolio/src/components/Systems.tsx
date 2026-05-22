import { motion } from "framer-motion";
import { Bot, Gamepad2, BrainCircuit, Satellite, type LucideIcon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

interface SystemModule {
  id: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  icon: LucideIcon;
}

const systems: SystemModule[] = [
  {
    id: "ai-ml",
    code: "MOD-01",
    title: "AI & Machine Learning",
    tagline: "Agents that learn, reason, and act.",
    description:
      "Production ML systems built end-to-end: training pipelines, multi-agent reinforcement learning, model evaluation, and deployment loops.",
    capabilities: ["Python · PyTorch · TensorFlow", "PPO · DQN · MARL", "Curriculum & league self-play", "CNNs · NumPy · pandas · ML evaluation"],
    icon: Bot,
  },
  {
    id: "game-xr",
    code: "MOD-02",
    title: "Game Development & XR",
    tagline: "Worlds you can step into.",
    description:
      "Unity gameplay systems for flat-screen and mixed reality. Combat loops, multiplayer networking, and spatial interaction.",
    capabilities: ["Unity · C#", "Mixed reality + spatial anchoring", "Multiplayer architecture", "Game-feel & systems design"],
    icon: Gamepad2,
  },
  {
    id: "intel-software",
    code: "MOD-03",
    title: "Intelligent Software Systems",
    tagline: "LLMs, vision, and voice — wired together.",
    description:
      "Multimodal assistants combining speech, vision, and LLM reasoning. Real-time pipelines, full-stack apps, and Azure-deployed services.",
    capabilities: ["Python · OpenAI API · LLM · NLP", "Voice + gesture interfaces", "Full-stack C# · .NET · SQL · Azure", "Quartz.NET scheduled services"],
    icon: BrainCircuit,
  },
  {
    id: "future-space",
    code: "MOD-04",
    title: "Future Focus: Space Systems",
    tagline: "Where this is all pointed.",
    description:
      "The direction I'm growing into: applying autonomy and AI to the habitats, stations, and operations humanity will build beyond Earth.",
    capabilities: ["Autonomous systems research", "Simulation environments", "AI-driven habitats", "Space manufacturing interest"],
    icon: Satellite,
  },
];

export function Systems() {
  return (
    <section id="systems" className="py-24 md:py-32 relative">
      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        <SectionHeader
          index="03"
          eyebrow="SYSTEMS // CAPABILITY MATRIX"
          title="Four operational modules — end-to-end engineering."
          subtitle="The disciplines I ship in today, and the one I'm pointing them at."
          meta="FILE 03 / 04 MODULES"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {systems.map((system, i) => {
            const Icon = system.icon;
            return (
              <motion.article
                key={system.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-background hover:bg-card/60 transition-colors p-7 md:p-10"
                data-testid={`card-system-${system.id}`}
              >
                {/* Module header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="label-mono text-primary tabular-nums">{system.code}</span>
                    <span className="w-1 h-1 rounded-full bg-primary/60" />
                    <span className="label-mono text-muted-foreground/70">ACTIVE</span>
                  </div>
                  <div className="text-muted-foreground/60 group-hover:text-primary transition-colors">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title + tagline */}
                <h3 className="font-display text-2xl md:text-3xl text-white leading-tight tracking-tight mb-2">
                  {system.title}
                </h3>
                <p className="text-primary/90 font-mono text-sm tracking-wide italic mb-5">
                  {system.tagline}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-6">
                  {system.description}
                </p>

                {/* Capabilities */}
                <ul className="border-t border-white/10 pt-4 space-y-2">
                  {system.capabilities.map((cap, k) => (
                    <li key={cap} className="flex items-start gap-3 text-sm text-muted-foreground/90">
                      <span className="label-mono text-primary/60 tabular-nums mt-1 shrink-0">
                        {String(k + 1).padStart(2, "0")}
                      </span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
