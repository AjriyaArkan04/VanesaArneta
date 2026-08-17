import { impactStats } from "@/data/content";

export default function ImpactStrip() {
  return (
    <section aria-label="Measurable impact" className="border-b border-line">
      <div className="mx-auto max-w-content px-6 py-14 md:px-10 md:py-20">
        <p className="mb-8 font-mono text-xs uppercase tracking-wide3 text-rust">
          In numbers
        </p>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((s) => (
            <div key={s.label} className="border-t border-line pt-5">
              <p className="font-display text-4xl leading-none text-rust md:text-5xl">
                {s.unit && (
                  <span className="align-top text-xl text-ink-soft md:text-2xl">
                    {s.unit}
                  </span>
                )}
                {s.value}
              </p>
              <p className="mt-3 font-body text-sm font-medium leading-snug text-ink">
                {s.label}
              </p>
              <p className="mt-1 font-body text-sm leading-snug text-ink-soft">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
