"use client";

import { Section, SectionHeading, Gallery, type GalleryItem } from "@daric/ui";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";

/** GallerySection — wraps the shared Gallery with resolved content. */
export function GallerySection() {
  const { l } = useI18n();
  const gallery = content.gallery;

  const images: GalleryItem[] = gallery.images.map((img) => ({
    src: img.src,
    alt: l(img.alt),
    gradient: img.gradient,
  }));

  return (
    <Section id="gallery">
      <SectionHeading eyebrow={l(gallery.eyebrow)} title={l(gallery.title)} />
      <Gallery images={images} className="mt-12" />
    </Section>
  );
}
