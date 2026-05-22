import { useState } from "react";
import { projects, type Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const additional = projects.filter((p) => !p.featured);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-24 md:py-32 relative">
        <div className="container relative z-10 px-6 mx-auto max-w-7xl">
          <SectionHeader
            index="02"
            eyebrow="MISSIONS // FEATURED DEPLOYMENTS"
            title="Headline missions — simulation, gameplay, and intelligence."
            subtitle="Three flagship deployments. Click any dossier to open the full mission file."
            meta="FILE 02 / 08 MISSIONS"
          />

          {/* Featured: SEA-GUARD takes the wide hero slot, others stack to the right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20">
            <div className="lg:col-span-2 lg:row-span-2">
              <ProjectCard
                project={featured[0]}
                index={0}
                variant="hero"
                onOpen={setActiveProject}
              />
            </div>
            {featured.slice(1).map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i + 1}
                variant="featured"
                onOpen={setActiveProject}
              />
            ))}
          </div>

          {/* Additional deployments — secondary header */}
          <div className="border-t border-white/10 pt-10 mb-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="label-mono text-primary/90 mb-2">// SUPPLEMENTARY</div>
                <h3 className="font-display text-2xl md:text-3xl text-white tracking-tight">
                  Additional Deployments
                </h3>
              </div>
              <span className="label-mono text-muted-foreground/70 hidden sm:inline tabular-nums">
                {additional.length} FILES
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {additional.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={featured.length + index}
                onOpen={setActiveProject}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
