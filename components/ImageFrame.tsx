import Image from "next/image";

type ImageFrameProps = {
  src?: string;
  alt: string;
  ratio?: string; // e.g. "aspect-[4/5]"
  caption?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/**
 * Renders a real, optimized Next.js <Image> once `src` is supplied.
 * Until then, shows a polished, correctly-proportioned placeholder so the
 * layout never shifts when photos are dropped in later.
 */
export default function ImageFrame({
  src,
  alt,
  ratio = "aspect-[4/5]",
  caption,
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 90vw",
  className = "",
}: ImageFrameProps) {
  return (
    <figure className={`relative ${className}`}>
      <div
        className={`relative w-full overflow-hidden bg-paper-deep border border-line ${ratio}`}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-end justify-start p-4"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(27,24,18,0.05) 0px, rgba(27,24,18,0.05) 1px, transparent 1px, transparent 14px)",
            }}
          >
            <span className="font-mono text-[10px] uppercase tracking-wide2 text-ink-soft/60">
              {alt}
            </span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-wide2 text-ink-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
