import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <p>{skills.frontend.join(", ")}</p>
    </section>
  );
}
