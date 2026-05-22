import { motion } from "framer-motion";
import { FileText, ArrowUpRight, GraduationCap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

interface Paper {
  code: string;
  title: string;
  venue: string;
  summary: string;
  tags: string[];
  href: string;
}

const papers: Paper[] = [
  {
    code: "PUB-01",
    title: "Snap2Cal: A Food Calorie Tracker Application",
    venue: "Research Paper · MobileNetV2 · Food-101 · USDA FoodData Central",
    summary:
      "Deep learning food classification system built on MobileNetV2 and the Food-101 dataset, integrated with USDA nutritional data via a Flask API for real-time dietary tracking.",
    tags: ["Computer Vision", "CNN", "MobileNetV2", "Flask", "TensorFlow"],
    href: `${import.meta.env.BASE_URL}papers/Snap2Cal-Corbett.pdf`,
  },
  {
    code: "PUB-02",
    title: "Parallel Inference Strategies for Real-Time Neural Upscaling",
    venue: "Survey Paper · CPUs · GPUs · NPUs · Distributed ML",
    summary:
      "Survey of how data, model, and pipeline parallelism can be composed across heterogeneous hardware to meet sub-33ms latency targets for neural upscaling on next-generation console architectures.",
    tags: ["Distributed ML", "Model Parallelism", "Real-Time Inference", "Super-Resolution"],
    href: `${import.meta.env.BASE_URL}papers/Parallel-Inference-Neural-Upscaling-Corbett.pdf`,
  },
  {
    code: "PUB-03",
    title:
      "Reinforcing Democratic Integrity in the Digital Age: The Dual Role of Generative AI",
    venue: "Research Paper · Generative AI · Deepfake Detection · Ethics",
    summary:
      "Framework proposal for using generative AI to combat misinformation and deepfake disinformation while protecting democratic discourse — balancing innovation with ethical governance.",
    tags: ["Generative AI", "LLM", "Ethics", "Deepfake Detection"],
    href: `${import.meta.env.BASE_URL}papers/Generative-AI-Democracy-Corbett.pdf`,
  },
];

interface Credential {
  code: string;
  degree: string;
  institution: string;
  status: string;
  gpa: string;
  detail: string;
}

const credentials: Credential[] = [
  {
    code: "EDU-01",
    degree: "M.S. Computer Science",
    institution: "University of North Florida",
    status: "Expected Dec 2026",
    gpa: "GPA 3.8",
    detail:
      "Coursework: Intro to AI · Advanced AI · Machine Learning · AI & ML in Fintech",
  },
  {
    code: "EDU-02",
    degree: "B.S. Information Science",
    institution: "University of North Florida",
    status: "Graduated",
    gpa: "GPA 3.5",
    detail:
      "Foundational training in information architecture, systems thinking, and technology.",
  },
];

export function Research() {
  return (
    <section id="research" className="py-24 md:py-32 relative">
      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        <SectionHeader
          index="05"
          eyebrow="ARCHIVE // RESEARCH & EDUCATION"
          title="Papers I've written and the credentials behind them."
          subtitle="Technical writing samples and formal academic training."
          meta="FILE 05 / 03 PUBLICATIONS · 02 CREDENTIALS"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Publications */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <FileText size={14} className="text-primary" />
              <span className="label-mono text-primary">PUBLICATIONS</span>
              <span className="flex-1 h-px bg-white/10" />
              <span className="label-mono text-muted-foreground/60 tabular-nums">
                {papers.length}
              </span>
            </div>

            {papers.map((paper, idx) => (
              <motion.a
                key={paper.code}
                href={paper.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group block relative border border-white/10 hover:border-primary/50 bg-card/30 hover:bg-card/50 backdrop-blur-sm transition-colors"
                data-testid={`paper-${paper.code}`}
              >
                <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="label-mono text-primary tabular-nums">
                      {paper.code}
                    </span>
                    <span className="label-mono text-muted-foreground/70">
                      {paper.venue}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-display text-xl md:text-2xl text-white leading-tight tracking-tight group-hover:text-primary transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-[15px] leading-relaxed">
                    {paper.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="label-mono px-2 py-1 border border-white/10 text-muted-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Education */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap size={14} className="text-signal" />
              <span className="label-mono text-signal">EDUCATION</span>
              <span className="flex-1 h-px bg-white/10" />
              <span className="label-mono text-muted-foreground/60 tabular-nums">
                {credentials.length}
              </span>
            </div>

            {credentials.map((cred, idx) => (
              <motion.div
                key={cred.code}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative border border-white/10 bg-card/30 backdrop-blur-sm"
                data-testid={`credential-${cred.code}`}
              >
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                  <span className="label-mono text-signal tabular-nums">
                    {cred.code}
                  </span>
                  <span className="label-mono text-muted-foreground/70 tabular-nums">
                    {cred.gpa}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-display text-lg text-white leading-tight tracking-tight">
                    {cred.degree}
                  </h3>
                  <p className="text-sm text-white/80">{cred.institution}</p>
                  <p className="label-mono text-muted-foreground/80">
                    {cred.status}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-white/5">
                    {cred.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
