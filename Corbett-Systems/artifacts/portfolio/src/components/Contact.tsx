import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const channels = [
  {
    id: "email",
    code: "TX-01",
    label: "Email · Primary Uplink",
    value: "kevinbrandoncorbett@gmail.com",
    href: "mailto:kevinbrandoncorbett@gmail.com?subject=Re:%20Kevin-Brandon%20Corbett%20Portfolio&body=Hi%20Kevin-Brandon,%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out.%20%5BYour%20message%20here%5D%0A%0ABest,%0A%5BYour%20Name%5D",
    icon: Mail,
    primary: true,
    testid: "contact-email",
  },
  {
    id: "github",
    code: "TX-02",
    label: "GitHub · Source Repositories",
    value: "github.com/TheKB1000",
    href: "https://github.com/TheKB1000",
    icon: Github,
    primary: false,
    testid: "contact-github",
  },
  {
    id: "linkedin",
    code: "TX-03",
    label: "LinkedIn · Professional Profile",
    value: "linkedin.com/in/kevinbrandoncorbett",
    href: "https://www.linkedin.com/in/kevinbrandoncorbett/",
    icon: Linkedin,
    primary: false,
    testid: "contact-linkedin",
  },
  {
    id: "resume",
    code: "TX-04",
    label: "Resume · Full Mission Log (PDF)",
    value: "Kevin-Brandon-Corbett-Resume.pdf",
    href: `${import.meta.env.BASE_URL}Kevin-Brandon-Corbett-Resume.pdf`,
    icon: FileText,
    primary: false,
    testid: "contact-resume",
    download: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container relative z-10 px-6 mx-auto max-w-6xl">
        <SectionHeader
          index="08"
          eyebrow="COMM // ESTABLISH UPLINK"
          title="Channels open. Ready when you are."
          subtitle="Best reached by email for collaboration, research, or roles."
          meta="FILE 07 / TRANSMIT"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left: brief */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="font-display text-2xl md:text-3xl text-white leading-snug text-balance mb-6">
              Open for collaboration on AI / ML, gameplay, XR, and anything pointed at autonomy or space.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I respond fastest to direct email. If your team is hiring against
              any of the role profiles above, attach a quick note about the
              mission and we'll find time.
            </p>

            {/* Status block */}
            <div className="mt-8 border border-white/10 bg-card/30 backdrop-blur-sm">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
                <span className="label-mono text-primary">SIGNAL STATUS</span>
                <span className="label-mono text-muted-foreground/70 tabular-nums">SIG-LIVE</span>
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="flex items-center gap-2 label-mono text-signal">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal soft-pulse" />
                  OPEN · RECRUITMENT ACTIVE
                </span>
                <span className="label-mono text-muted-foreground/70 hidden sm:inline">
                  TX READY
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: channel list */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <ul className="border border-white/10 divide-y divide-white/10">
              {channels.map((ch) => {
                const Icon = ch.icon;
                return (
                  <li key={ch.id}>
                    <a
                      href={ch.href}
                      {...(ch.download
                        ? {
                            download: ch.value,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : ch.id !== "email"
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      data-testid={ch.testid}
                      className={`group flex items-center gap-4 sm:gap-6 px-5 sm:px-6 py-5 transition-colors ${
                        ch.primary
                          ? "bg-primary/5 hover:bg-primary/10"
                          : "bg-card/20 hover:bg-card/50"
                      }`}
                    >
                      <span
                        className={`shrink-0 w-10 h-10 flex items-center justify-center border ${
                          ch.primary
                            ? "border-primary/50 text-primary"
                            : "border-white/15 text-muted-foreground group-hover:text-white group-hover:border-white/40 transition-colors"
                        }`}
                      >
                        <Icon size={18} strokeWidth={1.5} />
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="label-mono text-primary tabular-nums">{ch.code}</span>
                          <span className="label-mono text-muted-foreground/70 truncate">
                            {ch.label}
                          </span>
                        </div>
                        <div className="font-mono text-sm sm:text-base text-white truncate">
                          {ch.value}
                        </div>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className={`shrink-0 ${
                          ch.primary
                            ? "text-primary"
                            : "text-muted-foreground/60 group-hover:text-white"
                        } group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
