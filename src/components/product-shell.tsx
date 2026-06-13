import { Link, useRouterState } from "@tanstack/react-router";
import {
  Blocks, BriefcaseBusiness, ChevronDown, CircleUserRound, Home,
  LayoutDashboard, Menu, Plus, Search, Settings, Users, X,
} from "lucide-react";
import { useState, type ReactNode } from "react";

const primary = [
  { label: "My Office", mobileLabel: "Home", to: "/home", icon: Home },
  { label: "My Offices", mobileLabel: "Offices", to: "/workspaces", icon: Blocks },
  { label: "Marketplace", mobileLabel: "Market", to: "/marketplace", icon: BriefcaseBusiness },
  { label: "Talent Network", mobileLabel: "Talent", to: "/directory", icon: Users },
  { label: "Settings", mobileLabel: "Settings", to: "/settings", icon: Settings },
] as const;

const workspace = [
  { label: "Overview", to: "/workspace", icon: LayoutDashboard },
  { label: "Activities", to: "/boards", icon: Blocks },
  { label: "Opportunities", to: "/workspace-opportunities", icon: BriefcaseBusiness },
  { label: "Team", to: "/members", icon: Users },
] as const;

export function Mark({ compact = false }: { compact?: boolean }) {
  return <div className="flex min-w-0 items-center gap-2.5"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary font-semibold text-primary-foreground">W</span>{!compact && <span className="truncate text-sm font-semibold tracking-tight text-secondary">Workspaces</span>}</div>;
}

function NavLink({ item }: { item: (typeof primary)[number] | (typeof workspace)[number] }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const active = path === item.to;
  return <Link to={item.to} className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${active ? "bg-primary-soft text-primary" : "text-muted-foreground hover:bg-muted hover:text-secondary"}`}><item.icon className="h-4 w-4" />{item.label}</Link>;
}

function SidebarContent() {
  return <><div className="flex h-16 items-center px-5"><Mark /></div><div className="px-3"><button className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center rounded-xl border border-border bg-card p-2.5 text-left shadow-sm"><span className="flex min-w-0 items-center gap-2.5"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-secondary text-xs font-semibold text-secondary-foreground">AS</span><span className="min-w-0"><span className="block truncate text-sm font-semibold text-secondary">Acacia Studio</span><span className="block truncate text-xs text-muted-foreground">Digital office</span></span></span><ChevronDown className="h-4 w-4 text-muted-foreground" /></button></div><nav className="mt-5 space-y-1 px-3">{primary.map((item) => <NavLink key={item.to} item={item} />)}</nav><div className="mx-5 my-5 border-t border-border" /><div className="px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">This workspace</div><nav className="mt-2 space-y-1 px-3">{workspace.map((item) => <NavLink key={item.to} item={item} />)}</nav><div className="mt-auto p-3"><div className="rounded-xl bg-surface p-3"><p className="text-xs font-semibold text-secondary">Invite your team</p><p className="mt-1 text-xs leading-relaxed text-muted-foreground">Bring execution into one visible place.</p><button className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-primary"><Plus className="h-3.5 w-3.5" /> Invite members</button></div></div></>;
}

export function ProductShell({ children, title, eyebrow, action }: { children: ReactNode; title: string; eyebrow?: string; action?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const mobileItems = primary.slice(0, 4);
  return <div className="min-h-screen bg-background text-foreground"><aside className="fixed inset-y-0 left-0 z-40 hidden w-60 flex-col border-r border-border bg-card lg:flex"><SidebarContent /></aside>{open && <div className="fixed inset-0 z-50 lg:hidden"><button aria-label="Close menu" onClick={() => setOpen(false)} className="absolute inset-0 bg-secondary/30 backdrop-blur-sm" /><aside className="relative flex h-full w-72 flex-col bg-card shadow-2xl"><button aria-label="Close menu" onClick={() => setOpen(false)} className="absolute right-3 top-4 rounded-lg p-2 text-muted-foreground hover:bg-muted"><X className="h-5 w-5" /></button><SidebarContent /></aside></div>}<div className="lg:pl-60"><header className="sticky top-0 z-30 border-b border-border/80 bg-background/90 backdrop-blur-xl"><div className="mx-auto grid h-16 max-w-[1280px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6"><button aria-label="Open menu" onClick={() => setOpen(true)} className="rounded-lg p-2 text-secondary hover:bg-muted lg:hidden"><Menu className="h-5 w-5" /></button><div className="min-w-0"><p className="truncate text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">{eyebrow ?? "Acacia Studio"}</p><h1 className="truncate text-base font-semibold tracking-tight text-secondary">{title}</h1></div><div className="flex shrink-0 items-center gap-2"><button aria-label="Search" className="rounded-lg border border-border p-2 text-muted-foreground hover:bg-muted"><Search className="h-4 w-4" /></button>{action}</div></div></header><main className="mx-auto max-w-[1280px] px-4 py-6 pb-24 sm:px-6 sm:py-8 lg:pb-8">{children}</main></div><nav aria-label="Primary navigation" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-border bg-card/95 px-2 py-2 backdrop-blur-xl lg:hidden">{mobileItems.map((item) => { const active = path === item.to; return <Link key={item.to} to={item.to} aria-current={active ? "page" : undefined} className={`flex flex-col items-center gap-1 py-1 text-[10px] font-medium ${active ? "text-primary" : "text-muted-foreground"}`}><item.icon className="h-5 w-5" />{item.mobileLabel}</Link>; })}</nav></div>;
}

export function PrimaryAction({ children, to }: { children: ReactNode; to?: "/boards" | "/workspace/create" }) {
  const cls = "inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90";
  return to ? <Link to={to} className={cls}><Plus className="h-4 w-4" />{children}</Link> : <button className={cls}><Plus className="h-4 w-4" />{children}</button>;
}