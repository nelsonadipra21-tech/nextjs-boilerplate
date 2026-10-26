const swatches = [
  { name: "Ink", className: "bg-foreground" },
  { name: "Stone", className: "bg-muted" },
  { name: "Ember", className: "bg-accent" },
  { name: "Paper", className: "bg-background" },
];

function CornerDots({ className = "bg-border" }: { className?: string }) {
  return (
    <>
      <span aria-hidden="true" className={`absolute -left-0.5 -top-0.5 size-1.5 ${className}`} />
      <span aria-hidden="true" className={`absolute -right-0.5 -top-0.5 size-1.5 ${className}`} />
      <span aria-hidden="true" className={`absolute -bottom-0.5 -left-0.5 size-1.5 ${className}`} />
      <span aria-hidden="true" className={`absolute -bottom-0.5 -right-0.5 size-1.5 ${className}`} />
    </>
  );
}

function StepBadge({ number }: { number: number }) {
  return (
    <span className="absolute -left-4 -top-4 flex size-8 items-center justify-center bg-foreground text-sm font-semibold text-background">
      {number}
    </span>
  );
}

function DashList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-col gap-3 text-xl font-light leading-snug">
      {items.map((item) => (
        <li key={item}>{`– ${item}`}</li>
      ))}
    </ul>
  );
}

export function Deliverables() {
  return (
    <section
      aria-labelledby="deliverables-title"
      className="mx-5 mt-14 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] px-5 py-10"
    >
      <div className="relative flex size-12 items-center justify-center text-4xl font-medium">
        <span aria-hidden="true">+</span>
        <CornerDots />
      </div>

      <h2 id="deliverables-title" className="mt-8 text-2xl font-medium">
        what you get
      </h2>
      <p className="mt-4 text-2xl font-light leading-tight text-pretty">
        every logo ships as a complete, ready-to-use identity
      </p>

      <ol className="mt-12 flex flex-col gap-14 pl-4">
        <li>
          <div className="relative bg-card px-5 py-8">
            <StepBadge number={1} />
            <p aria-hidden="true" className="text-center font-serif text-7xl leading-none">
              Aa
            </p>
            <div className="mt-8 flex items-center justify-center">
              {swatches.map((swatch) => (
                <span
                  key={swatch.name}
                  title={swatch.name}
                  className={`-ml-4 size-14 rounded-full border border-border first:ml-0 ${swatch.className}`}
                />
              ))}
              <span className="sr-only">{`Brand palette: ${swatches.map((s) => s.name).join(", ")}`}</span>
            </div>
          </div>
          <h3 className="sr-only">Identity system</h3>
          <DashList items={["primary logo and icon mark", "color palette with hex and CMYK", "typography pairing"]} />
        </li>

        <li>
          <div className="relative">
          <StepBadge number={2} />
          <div className="relative overflow-hidden bg-[radial-gradient(circle,#4a1d1a_0%,#141414_75%)] px-5 py-16">
            <span aria-hidden="true" className="absolute inset-x-0 top-[38%] h-px bg-accent/50" />
            <span aria-hidden="true" className="absolute inset-x-0 top-[62%] h-px bg-accent/50" />
            <span aria-hidden="true" className="absolute inset-y-0 left-[18%] w-px bg-accent/50" />
            <span aria-hidden="true" className="absolute inset-y-0 right-[18%] w-px bg-accent/50" />
            <div className="relative mx-auto w-fit">
              <p className="mb-2 text-xs text-background/60">SVG · PNG · PDF</p>
              <div className="relative">
                <a
                  href="#contact"
                  className="block border border-background/20 bg-foreground px-6 py-3 text-lg font-medium text-background shadow-[0_10px_40px_rgba(255,74,28,0.25)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Start a project
                </a>
                <CornerDots className="bg-accent" />
              </div>
            </div>
          </div>
          </div>
          <h3 className="sr-only">Files and handoff</h3>
          <DashList items={["print and web-ready files", "social media avatar kit", "one-page usage guide"]} />
        </li>
      </ol>
    </section>
  );
}
