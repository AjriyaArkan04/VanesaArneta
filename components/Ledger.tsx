import { otherInternships, partTime } from "@/data/content";

const entries = [
  {
    role: otherInternships[0].role,
    company: otherInternships[0].company,
    period: otherInternships[0].period,
    points: otherInternships[0].points,
  },
  {
    role: otherInternships[1].role,
    company: otherInternships[1].company,
    period: otherInternships[1].period,
    points: otherInternships[1].points,
  },
  {
    role: partTime.role,
    company: partTime.place,
    period: partTime.period,
    points: partTime.points,
  },
];

export default function Ledger() {
  return (
    <section id="registry" className="border-b border-line">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide3 text-rust">
              04 — Registry
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
              Other roles, in the ledger
            </h2>
          </div>
          <p className="max-w-xs font-body text-sm text-ink-soft">
            Kept as a running record, the way I&rsquo;d file it myself.
          </p>
        </div>

        <div className="ledger-rule">
          {entries.map((e, i) => (
            <details key={e.role + e.company} className="group border-b border-line py-6">
              <summary className="grid cursor-pointer grid-cols-1 items-baseline gap-1 md:grid-cols-12 md:gap-4">
                <span className="font-mono text-sm text-ink-soft md:col-span-1 ledger-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl text-ink md:col-span-5">
                  {e.role}
                </span>
                <span className="font-body text-base text-ink-soft md:col-span-4">
                  {e.company}
                </span>
                <span className="font-mono text-xs uppercase tracking-wide2 text-ink-soft md:col-span-2 md:text-right">
                  {e.period}
                </span>
              </summary>
              <ul className="mt-5 space-y-2 pl-0 md:pl-[calc(8.33%+1rem)]">
                {e.points.map((pt, j) => (
                  <li
                    key={j}
                    className="font-body text-sm leading-relaxed text-ink-soft md:max-w-2xl"
                  >
                    {pt}
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}