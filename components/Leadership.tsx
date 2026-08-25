import ImageFrame from "./ImageFrame";
import { leadership } from "@/data/content";

export default function Leadership() {
  return (
    <section id="leadership" className="border-b border-line bg-paper-deep">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <p className="font-mono text-xs uppercase tracking-wide3 text-rust">
          04 — Leadership
        </p>

        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
              {leadership.role}
            </h2>
            <p className="mt-2 font-body text-lg text-ink-soft">{leadership.org}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide2 text-ink-soft">
              {leadership.period}
            </p>

            <ul className="mt-8 space-y-4 border-t border-line pt-8">
              {leadership.points.map((pt, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-moss"
                  />
                  <span className="font-body leading-relaxed text-ink-soft">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <ImageFrame
              src="/images/experience/kanopi-01.webp"
              alt="experience/kanopi-01.webp · 4:5"
              caption="KANOPI FEB UI — finance bureau team"
              ratio="aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
