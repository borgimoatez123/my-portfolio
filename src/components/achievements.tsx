import Image from "next/image";
import { Trophy, Users } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { achievements } from "@/data/portfolio";

const icons = [Trophy, Users];

export default function Achievements() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Achievements & Activities"
          title="Beyond the code"
          description="Competitions, community work and the teams behind them."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {achievements.map((item, index) => {
            const Icon = icons[index] ?? Trophy;
            return (
              <Reveal key={item.title} delay={index * 80}>
                <div className="panel flex h-full flex-col overflow-hidden rounded-2xl">
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-surface-2 text-accent">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      {item.period ? <span className="chip">{item.period}</span> : null}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-fg">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                      {item.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-px border-t border-border bg-border">
                    {item.images.map((image) => (
                      <div
                        key={image.src}
                        className="relative aspect-[4/3] overflow-hidden bg-surface-2"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(min-width: 768px) 24vw, 45vw"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
