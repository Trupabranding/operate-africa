import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-display text-lg font-semibold">
            W
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-secondary">
            Workspaces<span className="text-primary">.africa</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <Link to="/" className="hover:text-secondary transition-colors">
            Platform
          </Link>
          <Link to="/directory" className="hover:text-secondary transition-colors">
            Directory
          </Link>
          <a href="#early-access" className="hover:text-secondary transition-colors">
            Early access
          </a>
        </nav>
        <a
          href="#early-access"
          className="inline-flex items-center justify-center rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90"
        >
          Get early access
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground font-display text-sm font-semibold">
            W
          </span>
          <span className="font-display text-base font-semibold text-secondary">
            Workspaces.africa
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          Building the operating system for African organizations.
        </p>
        <div className="flex gap-5 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-secondary">Home</Link>
          <Link to="/directory" className="hover:text-secondary">Directory</Link>
          <a href="#early-access" className="hover:text-secondary">Early access</a>
        </div>
      </div>
    </footer>
  );
}
