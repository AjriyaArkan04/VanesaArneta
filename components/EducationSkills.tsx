import { education, languages, tools } from "@/data/content";

export default function EducationSkills() {
  return (
    <section id="education" className="border-b border-line bg-paper-deep">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <p className="font-mono text-xs uppercase tracking-wide3 text-rust">
          02 — Education &amp; Toolkit
        </p>

        <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-display text-2xl text-ink md:text-3xl">
              {education.primary.school}
            </h2>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide2 text-ink-soft">
              {education.primary.period} &middot; {education.primary.gpa} &middot;{" "}
              {education.primary.ept}
            </p>
            <p className="mt-4 max-w-xl font-body text-sm italic leading-relaxed text-ink-soft">
              Thesis — &ldquo;{education.primary.thesis}&rdquo;
            </p>

            <div className="mt-8 border-t border-line pt-6">
              <h3 className="font-display text-lg text-ink">{education.secondary.school}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide2 text-ink-soft">
                {education.secondary.period}
              </p>
            </div>

            <div className="mt-8 flex gap-8 border-t border-line pt-6">
              {languages.map((l) => (
                <div key={l.name}>
                  <p className="font-body text-sm font-medium text-ink">{l.name}</p>
                  <p className="font-body text-sm text-ink-soft">{l.level}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <p className="font-mono text-[11px] uppercase tracking-wide2 text-ink-soft">
              Toolkit
            </p>
            <ul className="mt-4 space-y-3 border-t border-line pt-4">
              {tools.map((t) => (
                <li
                  key={t.name}
                  className="flex items-baseline justify-between gap-3 font-body text-sm text-ink"
                >
                  <span>{t.name}</span>
                  {t.level && (
                    <span className="font-mono text-[11px] text-ink-soft">{t.level}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
