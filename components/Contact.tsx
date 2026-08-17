import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <p className="font-mono text-xs uppercase tracking-wide3 text-rust">
          07 — Contact
        </p>

        <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl leading-[1.05] md:text-6xl">
          Open to institutional banking, finance, and organizing roles.
        </h2>

        <p className="mt-6 max-w-lg font-body text-paper/70">
          The fastest way to reach me is email — I reply from Jakarta, usually
          within a day.
        </p>

        <div className="mt-12 flex flex-col gap-6 border-t border-paper/15 pt-8 sm:flex-row sm:items-baseline sm:justify-between">
          <a
            href={`mailto:${profile.email}`}
            className="font-display text-2xl text-paper underline decoration-rust decoration-2 underline-offset-4 transition-colors hover:text-rust md:text-3xl"
          >
            {profile.email}
          </a>

          <div className="flex flex-col gap-2 font-mono text-sm text-paper/70 sm:items-end">
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rust"
            >
              {profile.linkedin}
            </a>

            <span>{profile.phone}</span>
            <span>{profile.location}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-6 font-mono text-[11px] uppercase tracking-wide2 text-paper/50 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <span>&copy; {new Date().getFullYear()} Vanesa Arneta</span>
          <span>Economics — Universitas Indonesia</span>
        </div>
      </div>
    </section>
  );
}