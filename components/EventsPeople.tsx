import ImageFrame from "./ImageFrame";
import { eventsAndPeople as ep } from "@/data/content";

export default function EventsPeople() {
  return (
    <section id="events" className="border-b border-line">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <p className="font-mono text-xs uppercase tracking-wide3 text-rust">
          05 — Events &amp; People
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight text-ink md:text-4xl">
          {ep.intro}
        </h2>
        <p className="mt-5 max-w-2xl font-body leading-relaxed text-ink-soft">
          {ep.learnings}
        </p>

        {/* showcase strip */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { title: ep.showcase[0], file: "bahana-sekuritas.webp" },
            { title: ep.showcase[1], file: "us-phd-sharing.webp" },
            { title: ep.showcase[2], file: "palmoil-launch.webp" },
          ].map((item) => (
            <ImageFrame
              key={item.file}
              src={`/images/events/${item.file}`}
              alt={item.title}
              caption={item.title}
              ratio="aspect-[3/4]"
              sizes="(min-width: 640px) 33vw, 90vw"
            />
          ))}
        </div>

        {/* committee history */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
          {ep.committees.map((c) => (
            <div key={c.role} className="border-t border-line pt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl text-ink">{c.role}</h3>
                <span className="font-mono text-[11px] uppercase tracking-wide2 text-ink-soft">
                  {c.period}
                </span>
              </div>
              <p className="mt-1 font-body text-sm text-ink-soft">{c.org}</p>
              <ul className="mt-4 space-y-2">
                {c.points.map((pt, i) => (
                  <li key={i} className="font-body text-sm leading-relaxed text-ink-soft">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* other experience */}
        <div className="mt-16 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide2 text-ink-soft">
              Also on record
            </p>
            <h3 className="mt-1 font-display text-xl text-ink">
              {ep.other.role} — {ep.other.event}
            </h3>
            <p className="mt-1 font-body text-sm text-ink-soft">{ep.other.withOrg}</p>
            <ul className="mt-4 space-y-1.5">
              {ep.other.points.map((pt, i) => (
                <li key={i} className="font-body text-sm leading-relaxed text-ink-soft">
                  {pt}
                </li>
              ))}
            </ul>
          </div>
          <ImageFrame
            src="/images/events/toyota-01.webp"
            alt="events/toyota-01.webp · 4:3"
            caption="Toyota — 100 Tahun Industri Otomotif Indonesia"
            ratio="aspect-[4/3]"
            className="md:w-72 md:flex-none"
          />
        </div>
      </div>
    </section>
  );
}
