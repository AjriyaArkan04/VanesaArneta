import ImageFrame from "./ImageFrame";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto max-w-content px-6 pb-14 pt-12 md:px-10 md:pb-20 md:pt-16">
        {/* metadata strip */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-wide2 text-ink-soft">
          <span>{profile.location}</span>
          <span className="max-w-full">{`Economics — Universitas Indonesia, 2022–2026`}</span>
          <span>Portfolio 2026</span>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="min-w-0 md:col-span-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-wide3 text-rust">
              Institutional Banking &middot; Event Organizing &middot; Liaison Work
            </p>

            <h1 className="max-w-full font-display text-[15vw] leading-[0.92] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[6.4rem]">
              Vanesa
              <br />
              Arneta
            </h1>

            <p className="mt-8 max-w-xl text-balance font-body text-lg leading-relaxed text-ink-soft md:text-xl">
              {profile.summary}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#banking"
                className="rounded-full bg-ink px-5 py-3 font-mono text-[11px] uppercase tracking-wide2 text-paper transition-colors hover:bg-rust"
              >
                See the HSBC internship
              </a>

              <a
                href="#contact"
                className="max-w-full break-words rounded-full border border-ink px-5 py-3 font-mono text-[11px] uppercase tracking-wide2 text-ink transition-colors hover:border-rust hover:text-rust"
              >
                {profile.email}
              </a>
            </div>
          </div>

          <div className="min-w-0 md:col-span-4 md:pt-2">
            <ImageFrame
              src={undefined}
              alt="Portrait — Vanesa Arneta"
              caption="profile.webp · 4:5"
              priority
              ratio="aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}