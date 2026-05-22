import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MissionControl } from "@/components/MissionControl";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Systems } from "@/components/Systems";
import { Skills } from "@/components/Skills";
import { Research } from "@/components/Research";
import { Roles } from "@/components/Roles";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";
import { GlowDivider } from "@/components/GlowDivider";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Global engineering grid — single subtle layer, fades out at edges */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 85%)",
        }}
        aria-hidden
      />
      {/* Subtle directional ambient glow — bottom-right corner only */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 800px 600px at 90% 110%, hsl(184 100% 50% / 0.06), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <MissionControl />
          <About />
          <Projects />
          <GlowDivider label="Capability Matrix" code="// SEG 03" />
          <Systems />
          <Skills />
          <Research />
          <GlowDivider label="Recruitment Channel" code="// SEG 06" />
          <Roles />
          <Timeline />
          <Contact />
        </main>
        <footer className="relative z-10 border-t border-white/10 bg-background/80">
          <div className="container mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="label-mono text-muted-foreground/70">
              © {new Date().getFullYear()} Kevin-Brandon J. Corbett
            </p>
            <p className="label-mono text-muted-foreground/70 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary soft-pulse" />
              All systems nominal · v1.0
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
