import type { MetadataRoute } from "next";
import { productContentList } from "@/lib/content/products/[productSlug]";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/applications", "/platform", "/support", "/contact"];

  return [
    ...routes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    })),
    ...productContentList.map((product) => ({
      url: `${siteConfig.url}/products/${product.slug}`,
      lastModified: new Date(),
    })),
  ];
}
