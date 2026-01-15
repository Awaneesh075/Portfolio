import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      {certifications.map((c) => (
        <p key={c.title}>
          {c.url ? (
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {c.title}
            </a>
          ) : (
            c.title
          )} – {c.issuer}{c.year ? ` (${c.year})` : ""}
        </p>
      ))}
    </section>
  );
}
