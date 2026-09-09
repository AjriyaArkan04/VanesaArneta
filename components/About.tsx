import { profile, softSkills } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:px-10 md:py-24">
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-wide3 text-rust">01 — About</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
            Sales, Number, Relation, and Strategy Excites Me The Most.
          </h2>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <div className="space-y-5 font-body text-base leading-relaxed text-ink-soft md:text-lg">
            {profile.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <li
                key={s}
                className="rounded-full border border-line px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wide2 text-ink-soft"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}