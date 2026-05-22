import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Rocket, Download, Mail } from "lucide-react";
import { MissionClock } from "./MissionClock";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Cinematic starfield — toned down: fewer stars, slower, white instead of cyan
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: { x: number; y: number; z: number; size: number }[] = [];
    const numStars = 120;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * canvas.width,
        size: Math.random() * 1.2,
      });
    }

    let animationFrameId: number;

    const render = () => {
      ctx.fillStyle = "rgba(7, 11, 20, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      stars.forEach((star) => {
        star.z -= 0.9;
        if (star.z <= 0) {
          star.x = Math.random() * canvas.width - cx;
          star.y = Math.random() * canvas.height - cy;
          star.z = canvas.width;
        }

        const x = cx + (star.x / star.z) * canvas.width;
        const y = cy + (star.y / star.z) * canvas.width;
        const s = Math.max(0.1, (1 - star.z / canvas.width) * star.size * 2.4);
        const a = (1 - star.z / canvas.width) * 0.7;

        ctx.fillStyle = `rgba(220, 235, 255, ${a})`;
        ctx.beginPath();
        ctx.arc(x, y, s, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
    >
      {/* Starfield */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Bottom fade into Mission Control */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background z-[1] pointer-events-none" />

      {/* Orbital arcs — one signature decorative element, very subtle */}
      <svg
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.18]"
        aria-hidden
        preserveAspectRatio="none"
        viewBox="0 0 1000 1000"
      >
        <circle cx="500" cy="500" r="420" fill="none" stroke="hsl(184 100% 50%)" strokeWidth="0.5" strokeDasharray="2 6" />
        <circle cx="500" cy="500" r="320" fill="none" stroke="hsl(184 100% 50%)" strokeWidth="0.5" strokeDasharray="1 8" />
        <circle cx="500" cy="500" r="220" fill="none" stroke="hsl(184 100% 50%)" strokeWidth="0.5" />
      </svg>

      {/* Top telemetry strip */}
      <div className="relative z-10 border-b border-white/5">
        <div className="container mx-auto max-w-7xl px-6 h-10 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.28em] text-muted-foreground/70">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary soft-pulse" />
            <span className="text-primary/90">LIVE</span>
            <span className="hidden sm:inline">// Mission Archive OS</span>
          </span>
          <span className="hidden md:inline">Sector 7-G · Personnel File K-B</span>
          <MissionClock className="tabular-nums" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto max-w-7xl px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: identity + name + tagline + CTAs */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="label-mono text-primary/90 mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-primary/60" />
              Operator File · 001 / Active
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-balance text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-white"
            >
              Kevin-Brandon J.
              <br />
              <span className="text-white/90">Corbett</span>
              <span className="text-primary">.</span>
            </motion.h1>

            {/* Channel tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <span className="text-primary tabular-nums">CH-01</span>
                <span className="text-white/90">Game Developer</span>
              </span>
              <span className="text-muted-foreground/40">/</span>
              <span className="flex items-center gap-2">
                <span className="text-primary tabular-nums">CH-02</span>
                <span className="text-white/90">AI Engineer</span>
              </span>
              <span className="text-muted-foreground/40">/</span>
              <span className="flex items-center gap-2">
                <span className="text-primary tabular-nums">CH-03</span>
                <span className="text-white/90">Space Enthusiast</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              I build intelligent, interactive systems across gameplay, machine
              learning, and mixed reality — driven by a long-term mission to one
              day help build the AI that runs tomorrow's space stations.
            </motion.p>

            {/* CTAs — strong primary, restrained secondary/tertiary */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="group relative inline-flex items-center justify-center gap-2.5 h-12 px-7 bg-primary text-primary-foreground font-mono uppercase tracking-[0.18em] text-xs hover:bg-primary/90 transition-colors"
                data-testid="button-view-missions"
              >
                <span className="absolute -top-px -left-px w-2 h-2 border-t border-l border-primary-foreground/60" />
                <span className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-primary-foreground/60" />
                <Rocket size={14} />
                View Featured Missions
              </button>

              <a
                href={`${import.meta.env.BASE_URL}Kevin-Brandon-Corbett-Resume.pdf`}
                download="Kevin-Brandon-Corbett-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-7 border border-white/20 text-white font-mono uppercase tracking-[0.18em] text-xs hover:border-white/50 hover:bg-white/5 transition-colors"
                data-testid="button-download-resume"
              >
                <Download size={14} />
                Download Resume
              </a>

              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 h-12 sm:px-3 text-muted-foreground hover:text-white font-mono uppercase tracking-[0.18em] text-xs transition-colors"
                data-testid="button-contact-me"
              >
                <Mail size={14} />
                Contact
              </button>
            </motion.div>
          </div>

          {/* Right: Operator dossier console */}
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-5 relative"
            aria-label="Operator dossier"
          >
            <div className="relative bg-card/40 backdrop-blur-md border border-white/10">
              {/* Corner brackets */}
              <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-primary" />
              <span className="absolute -top-px -right-px w-3 h-3 border-t border-r border-primary" />
              <span className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-primary" />
              <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-primary" />

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                <span className="label-mono text-primary">OPERATOR FILE</span>
                <span className="label-mono text-muted-foreground/70 tabular-nums">K-B-001</span>
              </div>

              {/* Rows */}
              <dl className="divide-y divide-white/5">
                {[
                  ["Designation", "K-B"],
                  ["Status", "Online · Open to Roles"],
                  ["Domain", "AI · Games · XR"],
                  ["Stack", "Python · PyTorch · Unity · C# · Azure"],
                  ["Trajectory", "MS Computer Science · 2026"],
                  ["North Star", "AI for orbital habitats"],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-3 gap-3 px-5 py-3">
                    <dt className="label-mono col-span-1">{k}</dt>
                    <dd className="col-span-2 text-sm text-white/90 font-mono">{v}</dd>
                  </div>
                ))}
              </dl>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-white/10 flex items-center justify-between">
                <span className="label-mono text-muted-foreground/60">CLEARANCE</span>
                <span className="flex items-center gap-2 label-mono text-signal">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal soft-pulse" />
                  STANDBY · RECRUITMENT OPEN
                </span>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        onClick={() => scrollTo("mission-control")}
        className="relative z-10 mx-auto mb-6 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group"
        aria-label="Scroll to telemetry"
      >
        <span className="label-mono">Telemetry</span>
        <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
      </motion.button>
    </section>
  );
}
