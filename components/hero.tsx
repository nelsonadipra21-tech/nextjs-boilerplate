export function Hero() {
  return (
    <section className="px-5 pt-10 pb-12">
      <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-green-600" />
        Available for new projects
      </p>
      <h1 className="font-serif text-5xl leading-[1.02] tracking-tight text-balance">
        Logos that people <em className="text-accent">remember.</em>
      </h1>
      <p className="mt-5 text-base leading-relaxed text-muted text-pretty">
        {"I'm a logo designer helping cafes, startups, and independent brands find a mark that feels simple, honest, and theirs."}
      </p>
      <dl className="mt-8 grid grid-cols-3 border-y border-border py-4 text-center">
        <div>
          <dt className="text-xs text-muted">Logos</dt>
          <dd className="font-serif text-3xl">80+</dd>
        </div>
        <div className="border-x border-border">
          <dt className="text-xs text-muted">Clients</dt>
          <dd className="font-serif text-3xl">45</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Years</dt>
          <dd className="font-serif text-3xl">6</dd>
        </div>
      </dl>
    </section>
  );
}
