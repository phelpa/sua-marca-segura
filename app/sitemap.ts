import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const defaultPage: MetadataRoute.Sitemap = [
    {
      url: "https://jademarcas.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  return defaultPage;
}
