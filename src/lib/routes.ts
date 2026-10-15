/** Every public URL on the site, in one list: feeds sitemap.xml and llms-full.txt. */
import { PAGES } from "./site";
import { PRODUCTS } from "@/content/products";
import { AUDIENCES } from "@/content/audiences";
import { USECASES } from "@/content/usecases";
import { COMPARISONS } from "@/content/comparisons";
import { POSTS, postPath } from "@/content/posts";

export interface Route {
  path: string;
  priority: number;
  lastModified?: string;
}

export function allRoutes(): Route[] {
  return [
    { path: "/", priority: 1 },
    ...PRODUCTS.map((p) => ({ path: `/${p.slug}/`, priority: 0.9 })),
    ...PAGES.map((p) => ({ path: p.path, priority: p.group === "product" ? 0.9 : 0.7 })),
    { path: "/for/", priority: 0.7 },
    ...AUDIENCES.map((a) => ({ path: `/for/${a.slug}/`, priority: 0.8 })),
    { path: "/use-cases/", priority: 0.7 },
    ...USECASES.map((u) => ({ path: `/use-cases/${u.slug}/`, priority: 0.8 })),
    { path: "/compare/", priority: 0.6 },
    ...COMPARISONS.map((c) => ({ path: `/compare/${c.slug}/`, priority: 0.7 })),
    ...POSTS.map((p) => ({ path: postPath(p.slug), priority: 0.6, lastModified: p.updated ?? p.published })),
  ];
}
