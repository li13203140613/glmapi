import { MetadataRoute } from "next";

const baseUrl = "https://glm-api.org";
const locales = ["en", "zh", "ja", "ko", "de", "es"] as const;

const pages = [
  { path: "", changeFrequency: "daily" as const, priority: 1.0 },
  { path: "/pricing", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/docs", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/docs/text", changeFrequency: "weekly" as const, priority: 0.7 },
  { path: "/docs/vision", changeFrequency: "weekly" as const, priority: 0.7 },
  { path: "/docs/image", changeFrequency: "weekly" as const, priority: 0.7 },
  { path: "/docs/video", changeFrequency: "weekly" as const, priority: 0.7 },
  { path: "/docs/voice", changeFrequency: "weekly" as const, priority: 0.7 },
  { path: "/docs/embedding", changeFrequency: "weekly" as const, priority: 0.7 },
  { path: "/docs/tools", changeFrequency: "weekly" as const, priority: 0.7 },
  { path: "/glm-4-7-api", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/glm-free-api", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/glm-api-key", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/glm-4-7-flash-api", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/glm-coding-plan", changeFrequency: "weekly" as const, priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      const prefix = locale === "en" ? "" : `/${locale}`;
      entries.push({
        url: `${baseUrl}${prefix}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l,
              `${baseUrl}${l === "en" ? "" : `/${l}`}${page.path}`,
            ])
          ),
        },
      });
    }
  }

  return entries;
}
