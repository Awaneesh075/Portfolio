export default function Navbar() {
  return (
    <header>
      <nav aria-label="Main navigation" className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <span className="font-bold">Awaneesh</span>
          <div className="space-x-4 text-sm">
            <a href="#projects" aria-label="Projects">Projects</a>
            <a href="#experience" aria-label="Experience">Experience</a>
            <a href="#contact" aria-label="Contact">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
