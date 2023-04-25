import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ikram-maulana.tech",
      lastModified: new Date(),
    },
    {
      url: "https://ikram-maulana.tech/projects",
      lastModified: new Date(),
    },
    {
      url: "https://ikram-maulana.tech/designs",
      lastModified: new Date(),
    },
  ];
}
