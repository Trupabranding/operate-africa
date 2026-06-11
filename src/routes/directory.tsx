import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader, SiteFooter } from "../components/site-chrome";
import {
  ORGANIZATIONS,
  ORG_TYPES,
  type OrgType,
  type Organization,
} from "../data/directory";

export const Route = createFileRoute("/directory")({
  head: () => ({
    meta: [
      {
        title:
          "Directory of African Organizations — Workspaces Africa",
      },
      {
        name: "description",
        content:
          "A curated directory of African SMEs, NGOs, agencies, startups, churches and cooperatives. Discover and connect with organizations across the continent.",
      },
      {
        property: "og:title",
        content: "Directory of African Organizations — Workspaces Africa",
      },
      {
        property: "og:description",
        content:
          "Curated directory of African SMEs, NGOs, agencies, startups, churches and cooperatives.",
      },
      { property: "og:url", content: "/directory" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/directory" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Directory of African Organizations",
          description:
            "A curated directory of African organizations across SME, NGO, agency, startup, church and cooperative categories.",
        }),
      },
    ],
  }),
  component: DirectoryPage,
});

function DirectoryPage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<OrgType | "All">("All");
  const [country, setCountry] = useState<string>("All");

  const countries = useMemo(
    () =>
      Array.from(new Set(ORGANIZATIONS.map((o) => o.country))).sort(),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ORGANIZATIONS.filter((o) => {
      if (type !== "All" && o.type !== type) return false;
      if (country !== "All" && o.country !== country) return false;
      if (!q) return true;
      return (
        o.name.toLowerCase().includes(q) ||
        o.industry.toLowerCase().includes(q) ||
        o.summary.toLowerCase().includes(q) ||
        o.country.toLowerCase().includes(q)
      );
    });
  }, [query, type, country]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Public directory
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-secondary md:text-5xl">
            Discover African organizations doing the work.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            A curated and growing index of SMEs, NGOs, agencies, startups,
            churches, cooperatives and schools across the continent. Built by
            Workspaces Africa.
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-[1fr_auto_auto]">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, industry, country…"
              className="rounded-full border border-border bg-background px-5 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <select
              value={type}
              onChange={(e) => setType(e.target.value as OrgType | "All")}
              className="rounded-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
            >
              <option value="All">All types</option>
              {ORG_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="rounded-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
            >
              <option value="All">All countries</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-secondary">
              {filtered.length}
            </span>{" "}
            organization{filtered.length === 1 ? "" : "s"}
          </p>
          <a
            href="mailto:hello@workspaces.africa?subject=Add%20my%20organization%20to%20the%20directory"
            className="text-sm font-medium text-primary hover:underline"
          >
            Add your organization →
          </a>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-border bg-surface p-12 text-center">
            <p className="font-display text-xl text-secondary">No matches yet.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different search or filter — or{" "}
              <a
                href="mailto:hello@workspaces.africa"
                className="text-primary hover:underline"
              >
                tell us who's missing
              </a>
              .
            </p>
          </div>
        ) : (
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((org) => (
              <OrgCard key={org.slug} org={org} />
            ))}
          </div>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}

function OrgCard({ org }: { org: Organization }) {
  const initial = org.name.charAt(0);
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft font-display text-xl font-semibold text-primary">
          {initial}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h2 className="font-display text-lg font-semibold leading-tight text-secondary">
              {org.name}
            </h2>
            {org.verified && (
              <span
                title="Verified"
                className="shrink-0 rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-secondary"
              >
                ✓ Verified
              </span>
            )}
          </div>
          <p className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">
            {org.type} · {org.city ? `${org.city}, ` : ""}{org.country}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {org.summary}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
        <span className="text-xs font-medium text-secondary">{org.industry}</span>
        {org.website && (
          <a
            href={org.website}
            target="_blank"
            rel="noreferrer noopener"
            className="text-xs font-semibold text-primary hover:underline"
          >
            Visit site →
          </a>
        )}
      </div>
    </article>
  );
}
