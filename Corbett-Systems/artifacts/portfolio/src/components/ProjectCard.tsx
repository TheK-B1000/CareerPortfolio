import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project, ProjectStatus } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  /** "hero" = large left-side dossier (SEA-GUARD); "featured" = stacked column card; "default" = grid card */
  variant?: "hero" | "featured" | "default";
  onOpen: (project: Project) => void;
}

const statusStyles: Record<ProjectStatus, string> = {
  ACTIVE: "text-signal border-signal/50",
  DEPLOYED: "text-primary border-primary/50",
  "R&D": "text-accent border-accent/50",
};

export function ProjectCard({ project, index, variant = "default", onOpen }: ProjectCardProps) {
  const missionId = String(index + 1).padStart(3, "0");
  const isHero = variant === "hero";

  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHero) return; // only tilt the hero card — restraint
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -3, y: dx * 3 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovering(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(project);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative h-full"
      data-testid={`card-project-${project.id}`}
      ref={cardRef}
      style={isHero ? { perspective: "1200px" } : undefined}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={isHero ? { rotateX: tilt.x, rotateY: tilt.y } : undefined}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="relative h-full"
        style={isHero ? { transformStyle: "preserve-3d" } : undefined}
      >
        <div
          role="button"
          tabIndex={0}
          aria-label={`Open dossier for ${project.title}`}
          onClick={() => onOpen(project)}
          onKeyDown={handleKeyDown}
          className="relative flex flex-col h-full bg-card/40 backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-300 hover:border-primary/60 hover:bg-card/70 outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        >
          {/* Corner brackets — single signature accent */}
          <span className="pointer-events-none absolute -top-px -left-px w-2.5 h-2.5 border-t border-l border-primary/0 group-hover:border-primary transition-colors" />
          <span className="pointer-events-none absolute -top-px -right-px w-2.5 h-2.5 border-t border-r border-primary/0 group-hover:border-primary transition-colors" />
          <span className="pointer-events-none absolute -bottom-px -left-px w-2.5 h-2.5 border-b border-l border-primary/0 group-hover:border-primary transition-colors" />
          <span className="pointer-events-none absolute -bottom-px -right-px w-2.5 h-2.5 border-b border-r border-primary/0 group-hover:border-primary transition-colors" />

          {/* Mission ID strip — top */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-background/30">
            <span className="label-mono text-primary/80 tabular-nums">MSN-{missionId}</span>
            <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] px-2 py-0.5 border ${statusStyles[project.status]}`}>
              <span className="w-1 h-1 rounded-full bg-current" />
              {project.status}
            </span>
          </div>

          {/* Image */}
          <div className={`relative w-full overflow-hidden bg-background ${isHero ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-700 ${hovering ? "scale-[1.03]" : "scale-100"}`}
            />
            {/* Editorial duotone gradient overlay — replaces glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
          </div>

          {/* Body */}
          <div className="flex flex-col flex-1 p-5 md:p-6">
            <div className="label-mono text-muted-foreground/70 mb-2">
              ROLE · {project.role}
            </div>

            <h3 className={`font-display text-balance text-white leading-tight tracking-tight mb-3 ${isHero ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>
              {project.title}
            </h3>

            <p className={`text-muted-foreground leading-relaxed flex-1 ${isHero ? "text-base md:text-lg mb-6" : "text-sm mb-5"}`}>
              {project.description}
            </p>

            {/* Tech chips — hairline only, no glow */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.slice(0, isHero ? 6 : 4).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono uppercase tracking-[0.15em] px-2 py-1 border border-white/15 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-primary">
                Open Dossier
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="label-mono text-muted-foreground/50 hidden sm:inline">FILE {missionId}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
