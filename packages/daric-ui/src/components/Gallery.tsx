import { cn } from "../lib/cn";
import { Media } from "./Media";
import { Reveal } from "./Reveal";

export interface GalleryItem {
  src?: string;
  alt: string;
  gradient?: [string, string];
}

// Editorial spans for visual rhythm (loops over more images).
const SPANS = ["sm:col-span-2 sm:row-span-2", "", "", "", "sm:col-span-2", ""];

/** Gallery — responsive mosaic with graceful image fallbacks. Presentational. */
export function Gallery({
  images,
  className,
}: {
  images: GalleryItem[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-3",
        className
      )}
    >
      {images.map((img, i) => (
        <Reveal
          as="figure"
          key={i}
          delay={(i % 4) * 0.05}
          className={cn(
            "group relative overflow-hidden rounded-[var(--radius)]",
            SPANS[i % SPANS.length]
          )}
        >
          <Media
            src={img.src}
            alt={img.alt}
            gradient={img.gradient}
            className="h-full w-full"
            imgClassName="transition-transform duration-700 group-hover:scale-105"
          />
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent p-4 text-xs uppercase tracking-[0.12em] text-foreground/0 transition-colors duration-300 group-hover:text-foreground/90">
            {img.alt}
          </figcaption>
        </Reveal>
      ))}
    </div>
  );
}
