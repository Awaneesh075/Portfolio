import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      {experience.map((exp) => (
        <div key={exp.company} className="mb-6 border-l-2 pl-4">
          <h3 className="font-semibold">
            {exp.role} – {exp.companyUrl ? <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{exp.company}</a> : exp.company}
          </h3>
          <p className="text-sm text-gray-500">{exp.duration}</p>
          <ul className="list-disc ml-6 mt-2">
            {exp.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
