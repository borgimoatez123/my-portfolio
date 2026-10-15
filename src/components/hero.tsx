import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "@/components/reveal";
import { profile, techStrip } from "@/data/portfolio";

function SystemVisual() {
  return (
    <div className="glass relative overflow-hidden rounded-2xl p-5 sm:p-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
          connected systems
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
          <span className="node-pulse inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          data flow
        </span>
      </div>

      <svg
        viewBox="0 0 440 380"
        role="img"
        aria-label="Diagram of a microcontroller connected to sensors, actuators, the cloud and a mobile app over a message broker"
        className="mx-auto mt-2 h-auto w-full max-w-[420px] text-accent"
      >
        <g className="text-faint" stroke="currentColor" fill="none" strokeWidth="1">
          <circle cx="220" cy="192" r="118" strokeDasharray="2 8" opacity="0.4" />
          <circle cx="220" cy="192" r="152" strokeDasharray="2 8" opacity="0.22" />
        </g>

        <g stroke="currentColor" strokeWidth="1.4" className="text-accent/70" fill="none">
          <line className="flow-line" x1="180" y1="160" x2="122" y2="74" />
          <line className="flow-line" x1="260" y1="160" x2="318" y2="74" />
          <line className="flow-line" x1="180" y1="224" x2="122" y2="300" />
          <line className="flow-line" x1="260" y1="224" x2="318" y2="300" />
        </g>

        <g className="text-accent" fill="none" stroke="currentColor" strokeWidth="1.4">
          {[
            { x: 30, y: 40 },
            { x: 318, y: 40 },
            { x: 30, y: 300 },
            { x: 318, y: 300 },
          ].map((node) => (
            <rect
              key={`${node.x}-${node.y}`}
              x={node.x}
              y={node.y}
              width="92"
              height="34"
              rx="8"
              className="fill-surface-2"
            />
          ))}
        </g>

        <g className="fill-fg font-mono" fontSize="11" textAnchor="middle">
          <text x="76" y="61">Sensors</text>
          <text x="364" y="61">Cloud</text>
          <text x="76" y="321">Actuators</text>
          <text x="364" y="321">Mobile App</text>
        </g>

        <g className="text-accent" stroke="currentColor" strokeWidth="1.4" fill="none">
          <rect x="180" y="160" width="80" height="64" rx="10" className="fill-surface" />
          {[172, 184, 196, 208].map((y) => (
            <line key={`l-${y}`} x1="172" y1={y} x2="180" y2={y} />
          ))}
          {[172, 184, 196, 208].map((y) => (
            <line key={`r-${y}`} x1="260" y1={y} x2="268" y2={y} />
          ))}
        </g>
        <g className="fill-accent font-mono" textAnchor="middle">
          <text x="220" y="188" fontSize="13" fontWeight="600">MCU</text>
          <text x="220" y="204" fontSize="9" opacity="0.75">ESP32 · STM32</text>
        </g>
      </svg>

      <div className="relative mt-4 flex flex-wrap items-center gap-x-2 gap-y-1.5 border-t border-border pt-4">
        {["Sensor acquisition", "MQTT broker", "Backend API", "AI service"].map(
          (step, index) => (
            <span key={step} className="flex items-center gap-2">
              {index > 0 ? (
                <ArrowRight className="h-3 w-3 text-faint" aria-hidden="true" />
              ) : null}
              <span className="font-mono text-[11px] text-muted">{step}</span>
            </span>
          ),
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative pb-20 pt-28 sm:pb-28 sm:pt-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <p className="eyebrow">
              {profile.positioning.split(" · ")[0]}
            </p>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-4 max-w-xl text-lg text-muted">
              Embedded Systems &amp; IoT Engineer
              <span className="text-faint"> · </span>
              AI Enthusiast
              <span className="text-faint"> · </span>
              Software Engineer
            </p>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn btn-primary">
                Explore My Projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#contact" className="btn btn-ghost">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact Me
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 border-t border-border pt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                Working stack
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {techStrip.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <SystemVisual />
        </Reveal>
      </div>
    </section>
  );
}
