const links = [
  { href: "#about", label: "About" },
  { href: "#banking", label: "Internship" },
  { href: "#registry", label: "Roles" },
  { href: "#leadership", label: "Leadership" },
  { href: "#events", label: "Events & People" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10"
      >
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          Vanesa Arneta
        </a>
        <ul className="hidden gap-7 font-mono text-[11px] uppercase tracking-wide2 text-ink-soft lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-rust focus-visible:text-rust"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full border border-ink px-4 py-2 font-mono text-[11px] uppercase tracking-wide2 text-ink transition-colors hover:border-rust hover:text-rust md:inline-block"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
