export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-background/90 px-5 py-4 backdrop-blur">
      <a href="#" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
        <span aria-hidden="true" className="size-3 rounded-full bg-accent" />
        Nelson Adipra
      </a>
      <nav aria-label="Main">
        <ul className="flex items-center gap-5 text-sm text-muted">
          <li>
            <a href="#work" className="hover:text-foreground">Work</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
