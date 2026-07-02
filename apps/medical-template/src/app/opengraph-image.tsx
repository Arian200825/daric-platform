import { ImageResponse } from "next/og";
import { config } from "@/config/medical.config";
import { localize } from "@/lib/localize";

// Generated Open Graph image (built statically) — a polished social preview.
export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${config.brand.name} — dental & medical care`;

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
        <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: c.primary, fontWeight: 700 }}>
          Dental &amp; medical care
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, fontWeight: 700, lineHeight: 1 }}>{config.brand.name}</div>
          <div style={{ fontSize: 40, color: c.muted, marginTop: 24 }}>{tagline}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24 }}>
          <span style={{ color: c.muted }}>A Daric template</span>
          <span style={{ color: c.primary, fontWeight: 600 }}>Built by Daric</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
