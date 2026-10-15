import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Across hardware and software"
          description="Selected work spanning embedded devices, connected platforms and software integration. Details reflect what was actually built."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Reveal key={project.id} delay={index * 80}>
                <article className="panel group flex h-full flex-col overflow-hidden rounded-2xl transition-colors duration-300 hover:border-accent/50">
                  <div
                    className="relative h-36 shrink-0 overflow-hidden border-b border-border bg-surface-2"
                    style={{
                      backgroundImage:
                        "linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  >
                    <Icon
                      className="absolute -bottom-4 -right-3 h-28 w-28 text-accent/15 transition-transform duration-500 group-hover:scale-105"
                      aria-hidden="true"
                    />
                    <span className="absolute left-5 top-5 grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {project.status ? (
                      <span className="absolute right-4 top-5 rounded-full border border-border bg-surface/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                        {project.status}
                      </span>
                    ) : null}
                    <p className="absolute bottom-4 left-5 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <h3 className="text-xl font-semibold tracking-tight text-fg">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <li key={tag} className="chip">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
