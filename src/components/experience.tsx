import { Building2, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { education, experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Internships and end-of-studies work, ordered most recent first."
        />

        <ol className="mt-12 space-y-8 border-l border-border pl-6 sm:pl-8">
          {experience.map((item, index) => (
            <li key={`${item.company}-${item.period}`} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[31px] top-6 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg sm:-left-[39px]"
              />
              <Reveal delay={index * 70}>
                <div className="panel rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-fg">
                        {item.role}
                      </h3>
                      <p className="mt-1 flex items-center gap-2 text-sm text-accent">
                        <Building2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                        {item.company}
                        <span className="text-faint">· {item.location}</span>
                      </p>
                    </div>
                    <span className="chip">{item.period}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.split(", ").map((tech) => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-20">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
            <span className="eyebrow">Education</span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-fg">
            Academic background
          </h3>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {education.map((item, index) => (
              <Reveal key={item.degree} delay={index * 70}>
                <div className="panel h-full rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-surface-2 text-accent">
                      <GraduationCap className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="chip">{item.period}</span>
                  </div>
                  <h4 className="mt-4 text-base font-semibold text-fg">
                    {item.degree}
                  </h4>
                  <p className="mt-1.5 text-sm text-muted">{item.school}</p>
                  <p className="mt-1 text-sm text-faint">{item.location}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
