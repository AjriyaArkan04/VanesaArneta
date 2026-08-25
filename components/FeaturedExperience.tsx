import ImageFrame from "./ImageFrame";
import { featuredExperience as fx } from "@/data/content";

export default function FeaturedExperience() {
  return (
    <section id="banking" className="border-b border-line bg-ink text-paper">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide3 text-rust">
              02 — {fx.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight md:text-5xl">
              {fx.company}
            </h2>
            <p className="mt-2 font-body text-lg text-paper/70">{fx.role}</p>
          </div>
          <p className="font-mono text-sm uppercase tracking-wide2 text-paper/60">
            {fx.period}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-body text-lg leading-relaxed text-paper/85">{fx.intro}</p>

            <ol className="mt-8 space-y-5 border-t border-paper/15 pt-8">
              {fx.points.map((pt, i) => (
                <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-4">
                  <span className="font-mono text-sm text-rust">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body leading-relaxed text-paper/85">{pt}</span>
                </li>
              ))}
            </ol>

            <p className="mt-8 border-t border-paper/15 pt-8 font-body italic leading-relaxed text-paper/70">
              {fx.takeaway}
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {fx.keyTerms.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-paper/25 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wide2 text-paper/70"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <ImageFrame
              src="/images/experience/hsbc-01.jpeg"
              alt="HSBC Indonesia — internship team"
              caption="HSBC Indonesia — internship team"
              ratio="aspect-[4/5]"
              className="[&_div]:!bg-paper/10 [&_div]:!border-paper/20"
            />
            <div className="mt-4">
              <ImageFrame
                src="/images/experience/hsbc-02.jpeg"
                alt="HSBC Indonesia — client presentation"
                caption="HSBC Indonesia"
                ratio="aspect-[4/3]"
                className="[&_div]:!bg-paper/10 [&_div]:!border-paper/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
