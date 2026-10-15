"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { profile } from "@/data/portfolio";

type CopyStatus = "idle" | "copied" | "error";

export default function Contact() {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function handleCopy() {
    if (!navigator.clipboard) {
      setStatus("error");
      return;
    }
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2500);
  }

  const announcement =
    status === "copied"
      ? "Email address copied to clipboard"
      : status === "error"
        ? "Copy failed, please copy the email address manually"
        : "";

  return (
    <section id="contact" className="border-t border-border py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="glass overflow-hidden rounded-3xl p-7 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <SectionHeading
                  eyebrow="Contact"
                  title="Let's build something connected"
                  description="Open to internships, collaborations and interesting problems in embedded systems, IoT and AI-driven applications."
                />
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={`mailto:${profile.email}`} className="btn btn-primary">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Send an email
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
              </div>

              <div className="flex flex-col justify-center gap-4">
                <div className="rounded-2xl border border-border bg-surface-2/60 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                    Email
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="min-w-0 flex-1 truncate font-mono text-sm text-fg">
                      {profile.email}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="btn btn-ghost h-9 shrink-0 px-3 text-sm"
                      aria-label="Copy email address to clipboard"
                    >
                      {status === "copied" ? (
                        <>
                          <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" aria-hidden="true" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  <p aria-live="polite" className="sr-only">
                    {announcement}
                  </p>
                  {status === "error" ? (
                    <p className="mt-2 text-xs text-muted" role="status">
                      Copy failed — please select the address manually.
                    </p>
                  ) : null}
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <p className="flex items-center gap-2 text-sm text-muted">
                    <MapPin className="h-4 w-4 shrink-0 text-faint" aria-hidden="true" />
                    {profile.location}
                  </p>
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-faint" aria-hidden="true" />
                    {profile.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
