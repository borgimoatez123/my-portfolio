import Image from "next/image";
import { MapPin, Languages } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { focusGroups, languages, profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="border-t border-border py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title="Where hardware meets software"
          description="I like problems that span the physical and the digital — making a device sense the world, then making the data useful."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="glass h-full rounded-2xl p-6 sm:p-8">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full border border-border-strong sm:h-44 sm:w-44">
                  <Image
                    src="/assest/profile.png"
                    alt={`Portrait of ${profile.name}`}
                    fill
                    sizes="176px"
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="mt-5 text-lg font-semibold text-fg">{profile.name}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                  Embedded · IoT · AI
                </p>
                <div className="mt-5 w-full space-y-3 border-t border-border pt-5">
                  <p className="flex items-center gap-2 text-sm text-muted">
                    <MapPin className="h-4 w-4 shrink-0 text-faint" aria-hidden="true" />
                    {profile.location}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-muted">
                    <Languages className="h-4 w-4 shrink-0 text-faint" aria-hidden="true" />
                    {languages.join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex h-full flex-col justify-center gap-5">
              <p className="text-base leading-relaxed text-muted">
                I am an engineering student focused on embedded systems and the
                Internet of Things, with practical experience that runs from
                firmware and sensor acquisition all the way up to backend
                services and AI-powered features.
              </p>
              <p className="text-base leading-relaxed text-muted">
                My work usually starts close to the hardware — bringing up
                microcontrollers, wiring sensors and actuators, and getting
                devices to communicate reliably. From there I build the software
                layer around them: MQTT messaging, REST APIs, storage, and the
                applications that make the data meaningful.
              </p>
              <p className="text-base leading-relaxed text-muted">
                I am especially interested in the intersection of hardware and
                software, where connected devices meet cloud services and
                applied AI — and where careful engineering makes the whole
                system dependable.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
            <span className="eyebrow">Engineering Focus</span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-fg">
            The areas I work in
          </h3>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {focusGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <Reveal key={group.title} delay={index * 60}>
                  <div className="panel h-full rounded-2xl p-6">
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface-2 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h4 className="mt-4 text-base font-semibold text-fg">
                      {group.title}
                    </h4>
                    <p className="mt-1.5 text-sm text-faint">{group.blurb}</p>
                    <ul className="mt-4 space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-sm text-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="h-1 w-1 shrink-0 rounded-full bg-accent/70"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
