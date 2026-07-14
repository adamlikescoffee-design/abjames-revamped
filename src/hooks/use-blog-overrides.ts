import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { ContentBlock } from "@/data/blogPosts";

export interface BlogOverride {
  slug: string;
  title: string | null;
  excerpt: string | null;
  image_url: string | null;
  image_alt: string | null;
  category: string | null;
  content: ContentBlock[] | null;
  title_es: string | null;
  excerpt_es: string | null;
  image_alt_es: string | null;
  category_es: string | null;
  content_es: ContentBlock[] | null;
  updated_at: string;
}

type OverrideMap = Record<string, BlogOverride>;

let cache: OverrideMap | null = null;
const listeners = new Set<(m: OverrideMap) => void>();
let inflight: Promise<OverrideMap> | null = null;

async function fetchAll(): Promise<OverrideMap> {
  const { data, error } = await supabase.from("blog_post_overrides").select("*");
  if (error) {
    console.error("Failed to load blog overrides", error);
    return {};
  }
  const map: OverrideMap = {};
  for (const row of data ?? []) {
    map[(row as BlogOverride).slug] = row as BlogOverride;
  }
  return map;
}

export function refreshBlogOverrides() {
  inflight = fetchAll().then((m) => {
    cache = m;
    listeners.forEach((l) => l(m));
    return m;
  });
  return inflight;
}

export function useBlogOverrides(): OverrideMap {
  const [map, setMap] = useState<OverrideMap>(cache ?? {});

  useEffect(() => {
    listeners.add(setMap);
    if (cache === null && !inflight) {
      refreshBlogOverrides();
    } else if (inflight) {
      inflight.then(setMap);
    }
    return () => {
      listeners.delete(setMap);
    };
  }, []);

  return map;
}
