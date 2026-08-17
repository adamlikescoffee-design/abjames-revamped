// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://www.abjames.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/aboutadam", changefreq: "monthly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.9" },
  { path: "/gallery", changefreq: "monthly", priority: "0.6" },
  { path: "/media-publications", changefreq: "monthly", priority: "0.6" },
  { path: "/paying-it-forward", changefreq: "weekly", priority: "0.8" },
  { path: "/contact", changefreq: "yearly", priority: "0.5" },
];

// Blog posts live in src/data/blogPosts.ts. Read slugs of non-hidden posts.
function blogEntries(): SitemapEntry[] {
  const source = readFileSync(resolve("src/data/blogPosts.ts"), "utf8");
  const blocks = source.split(/\n\s*\{\s*\n/);
  const entries: SitemapEntry[] = [];
  for (const block of blocks) {
    const slug = block.match(/slug:\s*"([^"]+)"/)?.[1];
    if (!slug) continue;
    if (/hidden:\s*true/.test(block)) continue;
    entries.push({ path: `/blog/${slug}`, changefreq: "monthly", priority: "0.7" });
  }
  return entries;
}

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

const entries = [...staticEntries, ...blogEntries()];
writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
