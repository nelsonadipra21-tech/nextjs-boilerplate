const EMAIL = "hello@nelsonadipra.com";

export function Contact() {
  return (
    <>
      <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16 px-5 pt-14">
        <h2 id="contact-title" className="font-serif text-4xl leading-tight text-balance">
          {"Got a brand that needs a face? Let's talk."}
        </h2>
        <ul className="mt-6 flex flex-col divide-y divide-border border-y border-border text-sm">
          <li>
            <a href={`mailto:${EMAIL}`} className="flex justify-between py-4">
              <span className="text-muted">Email</span>
              <span>{EMAIL}</span>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex justify-between py-4">
              <span className="text-muted">Instagram</span>
              <span>@nelsonadipra</span>
            </a>
          </li>
          <li>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="flex justify-between py-4">
              <span className="text-muted">Dribbble</span>
              <span>/nelsonadipra</span>
            </a>
          </li>
        </ul>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-30 mx-auto w-full max-w-md px-5 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <a
          href={`mailto:${EMAIL}?subject=New%20logo%20project`}
          className="flex h-14 items-center justify-center rounded-full bg-accent text-base font-medium text-foreground shadow-lg shadow-accent/30 transition-transform active:scale-[0.98]"
        >
          Start a logo project
        </a>
      </div>
    </>
  );
}
