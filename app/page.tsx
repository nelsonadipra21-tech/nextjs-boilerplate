import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { WorkGrid } from "@/components/work-grid";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";
import { Deliverables } from "@/components/deliverables";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-md pb-28">
      <SiteHeader />
      <main>
        <Hero />
        <WorkGrid />
        <Services />
        <Deliverables />
        <Contact />
      </main>
      <footer className="px-5 pt-10 text-xs text-muted">
        {"© 2026 Nelson Adipra. All marks shown are client work."}
      </footer>
    </div>
  );
}
