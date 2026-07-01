import { ImageResponse } from "next/og";
import { config } from "@/config/hotel.config";
import { localize } from "@/lib/localize";

// Generated Open Graph image (built statically). Gives the demo a polished
// social preview when the link is shared.
// Required for `output: export` — generate the image once at build time.
export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${config.brand.name} — luxury resort & spa`;

export default function OpengraphImage() {
  const c = config.theme.colors;
  const tagline = localize(config.brand.tagline, config.i18n.defaultLocale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: c.background,
          color: c.foreground,
          padding: 80,
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 8, textTransform: "uppercase", color: c.primary }}>
          Five-star resort &amp; spa
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 110, lineHeight: 1 }}>{config.brand.name}</div>
          <div style={{ fontSize: 40, color: c.muted, marginTop: 24 }}>{tagline}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 24, color: c.muted }}>A Daric template</div>
          <div style={{ fontSize: 24, color: c.primary }}>Built by Daric</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
