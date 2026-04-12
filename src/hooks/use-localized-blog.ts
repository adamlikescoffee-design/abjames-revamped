import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts, type BlogPost } from "@/data/blogPosts";
import { blogPostsEs } from "@/data/blogPostsEs";
import { useMemo } from "react";

export interface LocalizedBlogPost extends BlogPost {
  localizedTitle: string;
  localizedExcerpt: string;
  localizedContent: string[];
  localizedCategory: string;
}

export function useLocalizedBlogPosts(): LocalizedBlogPost[] {
  const { lang } = useLanguage();

  return useMemo(() => {
    return blogPosts.map((post) => {
      if (lang === "es") {
        const es = blogPostsEs[post.slug];
        return {
          ...post,
          localizedTitle: es?.title ?? post.title,
          localizedExcerpt: es?.excerpt ?? post.excerpt,
          localizedContent: es?.content ?? post.content,
          localizedCategory: es?.category ?? post.category ?? "",
        };
      }
      return {
        ...post,
        localizedTitle: post.title,
        localizedExcerpt: post.excerpt,
        localizedContent: post.content,
        localizedCategory: post.category ?? "",
      };
    });
  }, [lang]);
}

export function useLocalizedBlogPost(slug: string | undefined): LocalizedBlogPost | undefined {
  const posts = useLocalizedBlogPosts();
  return useMemo(() => posts.find((p) => p.slug === slug), [posts, slug]);
}
