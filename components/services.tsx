const steps = [
  { title: "Brief", text: "A short call to understand your business, audience, and taste." },
  { title: "Concepts", text: "Three distinct logo directions, presented in real-world mockups." },
  { title: "Refine", text: "Two rounds of revisions on your favorite direction." },
  { title: "Deliver", text: "Final files in SVG, PNG, and PDF plus a one-page usage guide." },
];

export function Services() {
  return (
    <section aria-labelledby="process-title" className="mx-5 rounded-2xl bg-foreground px-5 py-8 text-background">
      <h2 id="process-title" className="font-serif text-3xl">How it works</h2>
      <p className="mt-2 text-sm text-background/60">Logo packages start from $450 · 2–3 weeks</p>
      <ol className="mt-6 flex flex-col">
        {steps.map((step, index) => (
          <li key={step.title} className="flex gap-4 border-t border-background/15 py-4">
            <span className="font-serif text-xl text-accent">{`0${index + 1}`}</span>
            <div>
              <h3 className="text-sm font-medium">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-background/60">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
