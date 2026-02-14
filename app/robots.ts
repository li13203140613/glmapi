import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://glm-api.org";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
