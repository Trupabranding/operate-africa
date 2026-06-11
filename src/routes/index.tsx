import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "../components/site-chrome";
import { ORGANIZATIONS } from "../data/directory";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Workspaces Africa — The Operating System for African Organizations",
      },
      {
        name: "description",
        content:
          "One platform for projects, CRM, documents, teams and public org profiles — built for African SMEs, NGOs, agencies, churches and startups.",
      },
      {
        property: "og:title",
        content:
          "Workspaces Africa — The Operating System for African Organizations",
      },
      {
        property: "og:description",
        content:
          "One platform for projects, CRM, documents, teams and public org profiles — built for African SMEs, NGOs, agencies, churches and startups.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

const FEATURES = [
  {
    title: "AI Workspace Generator",
    body: "Tell us your org type, country and team size. We generate departments, projects, task lists and KPIs in seconds.",
    tag: "Unique",
  },
  {
    title: "Projects",
    body: "Lightweight projects, milestones, tasks and activity feeds — without the Gantt-chart bloat.",
  },
  {
    title: "CRM",
    body: "Leads, contacts, organizations and a simple deal pipeline that African SMEs actually use.",
  },
  {
    title: "Documents",
    body: "Contracts, proposals, invoices, reports and policies organized by org, branch and team.",
  },
  {
    title: "Teams & Roles",
    body: "Organizations, branches, departments, teams, members and roles — modelled the way African orgs operate.",
  },
  {
    title: "Public Org Profile",
    body: "Every workspace gets a public profile. Listed in directory.workspaces.africa for discovery, partnerships and trust.",
    tag: "Free",
  },
];

const AUDIENCES = [
  "SMEs",
  "NGOs",
  "Agencies",
  "Churches",
  "Startups",
  "Cooperatives",
  "Consultants",
  "Schools",
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Features />
        <DirectoryTeaser />
        <EarlyAccess />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-secondary) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-soft px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Coming soon · Early access open
          </span>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-secondary md:text-7xl">
            The operating system for{" "}
            <span className="text-primary">African organizations.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Most African organizations run on WhatsApp, Excel, Google Drive and
            email. Workspaces brings projects, CRM, documents, teams and your
            public profile into one place — built for how we actually work.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#early-access"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:translate-y-[-1px] hover:bg-primary/90"
            >
              Request early access
            </a>
            <Link
              to="/directory"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-secondary transition-colors hover:bg-surface"
            >
              Browse the directory →
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-wider text-muted-foreground">
            <span className="font-medium text-secondary">Built for</span>
            {AUDIENCES.map((a) => (
              <span key={a}>{a}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="bg-surface border-b border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            The problem
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-secondary md:text-4xl">
            Your organization is scattered across five different apps.
          </h2>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Tasks live in WhatsApp. Clients live in Excel. Files live in Google
            Drive. Approvals live in email. Nothing is connected, nothing is
            searchable, and onboarding a new team member takes weeks.
          </p>
          <p className="text-secondary font-medium">
            Workspaces is the single source of truth for your organization —
            projects, people, documents, customers and profile, in one place.
          </p>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            What's inside
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-secondary md:text-4xl">
            One platform. Everything your organization runs on.
          </h2>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group relative flex flex-col gap-3 bg-card p-7 transition-colors hover:bg-surface"
            >
              {f.tag && (
                <span className="absolute right-5 top-5 rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
                  {f.tag}
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-secondary">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DirectoryTeaser() {
  const featured = ORGANIZATIONS.slice(0, 6);
  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Directory
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              Discover African organizations doing real work.
            </h2>
            <p className="mt-4 text-base text-secondary-foreground/70">
              A growing, curated index of SMEs, NGOs, agencies, startups,
              churches and cooperatives across the continent.
            </p>
          </div>
          <Link
            to="/directory"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-secondary transition-colors hover:bg-accent/90"
          >
            Browse the full directory →
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((org) => (
            <div
              key={org.slug}
              className="rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.08]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold">{org.name}</h3>
                {org.verified && (
                  <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                    Verified
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs uppercase tracking-wider text-secondary-foreground/60">
                {org.type} · {org.country}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/75">
                {org.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EarlyAccess() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    organization: "",
    country: "",
    industry: "",
    email: "",
  });

  // Email forwarding via mailto — opens user's mail client with prefilled
  // signup details. Replace the address below with the inbox you want.
  const INBOX = "hello@workspaces.africa";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Early access · ${form.organization || form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Organization: ${form.organization}`,
      `Country: ${form.country}`,
      `Industry: ${form.industry}`,
      `Email: ${form.email}`,
    ].join("\n");
    window.location.href = `mailto:${INBOX}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="early-access" className="border-b border-border/60 bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Early access
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-secondary md:text-4xl">
            Be among the first African organizations on Workspaces.
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            We're onboarding a small group of teams ahead of public launch. Tell
            us about your organization and we'll be in touch.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-xl border border-primary/30 bg-primary-soft p-6 text-secondary">
              <p className="font-display text-lg font-semibold text-primary">
                Thanks — your email client should have opened.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Just hit send to complete your request. We'll reply within a few
                days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-8 grid gap-4 md:grid-cols-2"
            >
              <Field
                label="Your name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                label="Organization"
                value={form.organization}
                onChange={(v) => setForm({ ...form, organization: v })}
                required
              />
              <Field
                label="Country"
                value={form.country}
                onChange={(v) => setForm({ ...form, country: v })}
                required
              />
              <Field
                label="Industry"
                value={form.industry}
                onChange={(v) => setForm({ ...form, industry: v })}
              />
              <div className="md:col-span-2">
                <Field
                  label="Work email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 md:w-auto"
                >
                  Request early access
                </button>
                <p className="mt-3 text-xs text-muted-foreground">
                  Submitting opens your email app prefilled to{" "}
                  <span className="font-medium text-secondary">{INBOX}</span>.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 block w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}
