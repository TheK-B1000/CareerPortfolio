import { Fragment } from "react";
import { ChevronRight } from "lucide-react";

interface PipelineDiagramProps {
  stages: string[];
  label?: string;
}

export function PipelineDiagram({ stages, label = "DATA FLOW" }: PipelineDiagramProps) {
  return (
    <div
      className="relative border border-white/10 bg-card/40 backdrop-blur-sm"
      data-testid="pipeline-diagram"
    >
      <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-primary" />
      <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-primary" />

      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
        <span className="label-mono text-primary">{label}</span>
        <span className="label-mono text-muted-foreground/60 tabular-nums">
          {stages.length} STAGES
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <ol className="flex flex-wrap items-stretch gap-y-3">
          {stages.map((stage, i) => (
            <Fragment key={`${stage}-${i}`}>
              <li className="flex items-stretch">
                <div className="relative flex flex-col justify-center min-w-[7.5rem] px-3 py-2.5 border border-white/15 bg-background/60 group hover:border-primary/60 hover:bg-primary/5 transition-colors">
                  <span className="label-mono text-primary/80 tabular-nums leading-none mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[12px] text-white/90 leading-tight uppercase tracking-[0.06em]">
                    {stage}
                  </span>
                </div>
              </li>
              {i < stages.length - 1 && (
                <li
                  className="flex items-center justify-center text-primary/60 px-1 shrink-0"
                  aria-hidden
                >
                  <ChevronRight size={16} strokeWidth={2.5} />
                </li>
              )}
            </Fragment>
          ))}
        </ol>
      </div>
    </div>
  );
}
