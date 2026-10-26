import Image from "next/image";

const projects = [
  { name: "Kopi Ruang", category: "Coffee shop", year: "2026", image: "/work/kopi-ruang.png" },
  { name: "Arus", category: "Fintech", year: "2025", image: "/work/arus.png" },
  { name: "Hijau Studio", category: "Plant nursery", year: "2025", image: "/work/hijau.png" },
  { name: "Nyala", category: "Candle brand", year: "2024", image: "/work/nyala.png" },
];

export function WorkGrid() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-16 px-5 pb-14">
      <div className="mb-5 flex items-baseline justify-between">
        <h2 id="work-title" className="font-serif text-3xl">Selected work</h2>
        <span className="text-xs text-muted">{`${projects.length} projects`}</span>
      </div>
      <ul className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <li key={project.name}>
            <article>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-card">
                <Image
                  src={project.image}
                  alt={`${project.name} logo`}
                  fill
                  sizes="(max-width: 448px) 100vw, 448px"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <h3 className="text-base font-medium">{project.name}</h3>
                <p className="text-sm text-muted">
                  {project.category} · {project.year}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
