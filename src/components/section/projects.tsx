import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="border rounded-lg p-4">
            <Image src={p.image} alt={p.title} className="rounded mb-3" width={800} height={450} />
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
