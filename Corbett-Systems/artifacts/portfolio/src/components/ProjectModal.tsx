import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ArrowRight } from "lucide-react";
import { PipelineDiagram } from "./PipelineDiagram";
import type { Project, ProjectStatus } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const statusStyles: Record<ProjectStatus, string> = {
  ACTIVE: "text-signal border-signal/50",
  DEPLOYED: "text-primary border-primary/50",
  "R&D": "text-accent border-accent/50",
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const getFocusable = () => {
      const root = panelRef.current;
      if (!root) return [];
      return Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null);
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Focus trap: cycle Tab/Shift+Tab within the modal
      if (e.key === "Tab") {
        const focusable = getFocusable();
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    // Move focus to close button for keyboard users
    requestAnimationFrame(() => closeRef.current?.focus());

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      // Restore focus to the element that opened the modal
      previouslyFocused?.focus?.();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-6 md:p-10 pointer-events-none overflow-y-auto"
            aria-modal="true"
            role="dialog"
            aria-label={`Mission dossier: ${project.title}`}
          >
            <div
              ref={panelRef}
              className="relative w-full max-w-6xl my-auto pointer-events-auto bg-card border border-white/15 shadow-2xl"
            >
              {/* Corner brackets */}
              <span className="absolute -top-px -left-px w-3.5 h-3.5 border-t border-l border-primary" />
              <span className="absolute -top-px -right-px w-3.5 h-3.5 border-t border-r border-primary" />
              <span className="absolute -bottom-px -left-px w-3.5 h-3.5 border-b border-l border-primary" />
              <span className="absolute -bottom-px -right-px w-3.5 h-3.5 border-b border-r border-primary" />

              {/* Top status bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary soft-pulse" />
                  <span className="label-mono text-primary">MISSION FILE OPEN</span>
                  <span className="label-mono text-muted-foreground/70 hidden sm:inline truncate">
                    · {project.id.toUpperCase()}
                  </span>
                </div>
                <button
                  ref={closeRef}
                  onClick={onClose}
                  className="p-1.5 text-muted-foreground hover:text-white border border-white/15 hover:border-white/40 transition-colors"
                  aria-label="Close dossier"
                  data-testid="button-modal-close"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin">
                {/* LEFT identity panel */}
                <aside className="lg:col-span-4 lg:border-r border-white/10 border-b lg:border-b-0">
                  {/* Hero image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-background">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>

                  {/* Identity facts */}
                  <div className="p-5 sm:p-6 space-y-5">
                    <div>
                      <div className="label-mono text-muted-foreground/70 mb-1">DESIGNATION</div>
                      <h2 className="font-display text-2xl md:text-3xl text-white leading-tight tracking-tight">
                        {project.title}
                      </h2>
                    </div>

                    <dl className="divide-y divide-white/5 border-t border-white/10">
                      {[
                        ["Role", project.role],
                        ["Status", project.status],
                        ["Mission ID", project.id.toUpperCase()],
                      ].map(([k, v]) => (
                        <div key={k} className="grid grid-cols-3 gap-2 py-3">
                          <dt className="label-mono col-span-1">{k}</dt>
                          <dd className="col-span-2 text-sm font-mono text-white/90">
                            {k === "Status" ? (
                              <span className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] px-2 py-0.5 border ${statusStyles[project.status]}`}>
                                <span className="w-1 h-1 rounded-full bg-current" />
                                {v}
                              </span>
                            ) : (
                              v
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    {/* Tech stack */}
                    <div>
                      <div className="label-mono text-muted-foreground/70 mb-2">TECH STACK</div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono uppercase tracking-[0.15em] px-2 py-1 border border-white/15 text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* External links */}
                    {(project.details.github || project.details.demo) && (
                      <div className="flex flex-col gap-2 pt-2">
                        {project.details.github && (
                          <a
                            href={project.details.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-between gap-2 px-3 py-2.5 border border-white/15 hover:border-white/40 hover:bg-white/5 text-sm font-mono uppercase tracking-[0.18em] transition-colors"
                            data-testid={`link-github-${project.id}`}
                          >
                            <span className="flex items-center gap-2 text-xs">
                              <Github size={14} /> Source
                            </span>
                            <ArrowRight size={14} className="text-muted-foreground" />
                          </a>
                        )}
                        {project.details.demo && (
                          <a
                            href={project.details.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-between gap-2 px-3 py-2.5 border border-primary/40 hover:bg-primary/10 text-primary text-sm font-mono uppercase tracking-[0.18em] transition-colors"
                            data-testid={`link-demo-${project.id}`}
                          >
                            <span className="flex items-center gap-2 text-xs">
                              <ExternalLink size={14} /> Live Demo
                            </span>
                            <ArrowRight size={14} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </aside>

                {/* RIGHT content */}
                <div className="lg:col-span-8 p-6 sm:p-8 md:p-10 space-y-10">
                  <section>
                    <DossierLabel index="01" label="Overview" />
                    <p className="font-display text-xl md:text-2xl leading-snug text-white/90 text-balance">
                      {project.details.overview}
                    </p>
                  </section>

                  {project.details.pipeline && (
                    <section>
                      <DossierLabel index="02" label="Architecture" />
                      <PipelineDiagram
                        stages={project.details.pipeline.stages}
                        label={project.details.pipeline.label}
                      />
                    </section>
                  )}

                  <section>
                    <DossierLabel
                      index={project.details.pipeline ? "03" : "02"}
                      label="What I Built"
                    />
                    <ul className="space-y-3">
                      {project.details.whatIBuilt.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 group">
                          <span className="label-mono text-primary/80 tabular-nums mt-1 shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-muted-foreground text-base leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <DossierLabel
                      index={project.details.pipeline ? "04" : "03"}
                      label="Impact"
                    />
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                      {project.details.impact}
                    </p>
                  </section>

                  <div className="pt-6 border-t border-white/10">
                    <button
                      onClick={onClose}
                      className="inline-flex items-center gap-2 label-mono text-muted-foreground hover:text-white transition-colors"
                      data-testid="button-modal-back"
                    >
                      ← Back to Missions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function DossierLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="label-mono text-primary tabular-nums">{index}</span>
      <span className="label-mono text-white/80">{label}</span>
      <span className="flex-1 h-px bg-white/10" />
    </div>
  );
}
