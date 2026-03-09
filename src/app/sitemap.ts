import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shadow-learning.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-09"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date("2026-03-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date("2026-03-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date("2026-03-09"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-03-09"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
