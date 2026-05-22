import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MissionClock } from "./MissionClock";

const navLinks = [
  { id: "projects", label: "Missions", code: "02" },
  { id: "systems", label: "Systems", code: "03" },
  { id: "skills", label: "Stack", code: "04" },
  { id: "research", label: "Archive", code: "05" },
  { id: "roles", label: "Roles", code: "06" },
  { id: "timeline", label: "Logs", code: "07" },
  { id: "contact", label: "Comm", code: "08" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "projects", "systems", "skills", "research", "roles", "timeline", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string, fromMobile = false) => {
    if (fromMobile) {
      setMobileOpen(false);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-6">
        {/* Brand */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3 text-white group"
          data-testid="link-home"
        >
          <span className="relative w-7 h-7 flex items-center justify-center border border-primary/40 group-hover:border-primary transition-colors">
            <span className="w-1.5 h-1.5 bg-primary soft-pulse" />
            <span className="absolute -top-px -left-px w-1.5 h-1.5 border-t border-l border-primary" />
            <span className="absolute -bottom-px -right-px w-1.5 h-1.5 border-b border-r border-primary" />
          </span>
          <div className="flex flex-col leading-none text-left">
            <span className="font-mono font-bold tracking-[0.2em] text-[13px]">K-B</span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-muted-foreground uppercase mt-0.5 hidden sm:inline">
              Mission Archive
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="relative group px-3 py-2"
              data-testid={`link-nav-${link.id}`}
            >
              <span className="flex items-baseline gap-1.5 text-[11px] font-mono uppercase tracking-[0.18em]">
                <span className="text-muted-foreground/50 tabular-nums">{link.code}</span>
                <span
                  className={`transition-colors ${
                    activeSection === link.id ? "text-white" : "text-muted-foreground group-hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
              </span>
              {activeSection === link.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-px left-2 right-2 h-px bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Right meta: live clock (desktop) + mobile button */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 label-mono text-muted-foreground/70">
            <span className="w-1.5 h-1.5 rounded-full bg-primary soft-pulse" />
            <MissionClock className="tabular-nums" />
          </div>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden p-2 text-white hover:text-primary transition-colors"
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-background/95 backdrop-blur-xl"
          >
            <div className="px-6 py-3 flex flex-col divide-y divide-white/5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id, true)}
                  className={`flex items-center justify-between text-left py-3 transition-colors ${
                    activeSection === link.id ? "text-white" : "text-muted-foreground"
                  }`}
                  data-testid={`link-mobile-${link.id}`}
                >
                  <span className="flex items-baseline gap-3 font-mono uppercase tracking-[0.2em] text-sm">
                    <span className="text-muted-foreground/50 tabular-nums text-xs">{link.code}</span>
                    {link.label}
                  </span>
                  {activeSection === link.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  )}
                </button>
              ))}
              <div className="pt-3 mt-1 label-mono text-muted-foreground/70 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary soft-pulse" />
                <MissionClock className="tabular-nums" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
