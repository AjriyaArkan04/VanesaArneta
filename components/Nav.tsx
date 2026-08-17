"use client";

import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10"
      >
        <a
          href="#top"
          onClick={closeMenu}
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          Vanesa Arneta
        </a>

        {/* Desktop navigation */}
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

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full border border-ink px-4 py-2 font-mono text-[11px] uppercase tracking-wide2 text-ink transition-colors hover:border-rust hover:text-rust md:inline-block"
        >
          Get in touch
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink text-ink transition-colors hover:border-rust hover:text-rust lg:hidden"
        >
          <span className="sr-only">
            {isOpen ? "Close navigation menu" : "Open navigation menu"}
          </span>

          <span className="flex w-4 flex-col gap-1.5">
            <span
              className={`block h-px w-full bg-current transition-transform duration-200 ${
                isOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-current transition-opacity duration-200 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-current transition-transform duration-200 ${
                isOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`border-t border-line bg-paper lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="mx-auto max-w-content px-6 py-4 md:px-10">
          {links.map((l) => (
            <li key={l.href} className="border-b border-line last:border-b-0">
              <a
                href={l.href}
                onClick={closeMenu}
                className="block py-4 font-mono text-xs uppercase tracking-wide2 text-ink-soft transition-colors hover:text-rust focus-visible:text-rust"
              >
                {l.label}
              </a>
            </li>
          ))}

          <li className="pt-4">
            <a
              href="#contact"
              onClick={closeMenu}
              className="inline-block rounded-full border border-ink px-4 py-2 font-mono text-[11px] uppercase tracking-wide2 text-ink transition-colors hover:border-rust hover:text-rust"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}