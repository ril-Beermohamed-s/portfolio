export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur z-50 border-b">
      <div className="max-w-5xl mx-auto flex justify-between p-4">
        <span className="font-semibold">Beer Mohamed</span>
        <div className="space-x-6 text-sm">
          {["about", "skills", "experience", "contact"].map((s) => (
            <a key={s} href={`#${s}`} className="hover:text-accent">
              {s.toUpperCase()}
            </a>
          ))}
          <a href="/resume.pdf" download className="text-accent font-medium">
            RESUME
          </a>
        </div>
      </div>
    </nav>
  );
}
