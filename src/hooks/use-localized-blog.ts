import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts, type BlogPost, type ContentBlock, type Reference } from "@/data/blogPosts";
import { blogPostsEs } from "@/data/blogPostsEs";
import { useBlogOverrides } from "@/hooks/use-blog-overrides";
import { useMemo } from "react";

export interface LocalizedBlogPost extends BlogPost {
  localizedTitle: string;
  localizedExcerpt: string;
  localizedContent: ContentBlock[];
  localizedCategory: string;
  localizedImageAlt: string;
  localizedReferences: Reference[];
}

export function useLocalizedBlogPosts(): LocalizedBlogPost[] {
  const { lang } = useLanguage();
  const overrides = useBlogOverrides();

  return useMemo(() => {
    return blogPosts.filter((p) => !p.hidden).map((post) => {
      const ov = overrides[post.slug];
      const image = ov?.image_url || post.image;
      const baseTitle = ov?.title || post.title;
      const baseExcerpt = ov?.excerpt || post.excerpt;
      const baseContent = ov?.content && ov.content.length > 0 ? ov.content : post.content;
      const baseCategory = ov?.category || post.category;
      const baseImageAlt = ov?.image_alt || post.imageAlt;

      if (lang === "es") {
        const es = blogPostsEs[post.slug];
        return {
          ...post,
          image,
          title: baseTitle,
          excerpt: baseExcerpt,
          content: baseContent,
          category: baseCategory,
          imageAlt: baseImageAlt,
          localizedTitle: ov?.title_es || es?.title || baseTitle,
          localizedExcerpt: ov?.excerpt_es || es?.excerpt || baseExcerpt,
          localizedContent: (ov?.content_es && ov.content_es.length > 0) ? ov.content_es : (es?.content ?? baseContent),
          localizedCategory: ov?.category_es || es?.category || baseCategory || "",
          localizedImageAlt: ov?.image_alt_es || es?.imageAlt || baseImageAlt || baseTitle,
          localizedReferences: es?.references ?? post.references ?? [],
        };
      }
      return {
        ...post,
        image,
        title: baseTitle,
        excerpt: baseExcerpt,
        content: baseContent,
        category: baseCategory,
        imageAlt: baseImageAlt,
        localizedTitle: baseTitle,
        localizedExcerpt: baseExcerpt,
        localizedContent: baseContent,
        localizedCategory: baseCategory ?? "",
        localizedImageAlt: baseImageAlt ?? baseTitle,
        localizedReferences: post.references ?? [],
      };
    });
  }, [lang, overrides]);
}

export function useLocalizedBlogPost(slug: string | undefined): LocalizedBlogPost | undefined {
  const posts = useLocalizedBlogPosts();
  return useMemo(() => posts.find((p) => p.slug === slug), [posts, slug]);
}
