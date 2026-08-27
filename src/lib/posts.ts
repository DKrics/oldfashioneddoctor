import { getCollection, type CollectionEntry } from 'astro:content';
import type { Category } from './site';
import { tagSlug } from './site';

export type Post = CollectionEntry<'posts'>;

export async function allPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => +b.data.published - +a.data.published);
}

export async function postsInCategory(cat: Category): Promise<Post[]> {
  const posts = await allPosts();
  return posts.filter((p) => p.data.categories.includes(cat));
}

export function readingMinutes(body: string): number {
  const text = body
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/[#>*_`~]/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function relatedPosts(post: Post, pool: Post[], limit = 3): Post[] {
  const tags = new Set(post.data.tags.map((t) => t.toLowerCase()));
  const cats = new Set(post.data.categories);
  return pool
    .filter((p) => p.id !== post.id)
    .map((p) => {
      const tagScore = p.data.tags.filter((t) => tags.has(t.toLowerCase())).length;
      const catScore = p.data.categories.some((c) => cats.has(c)) ? 2 : 0;
      return { p, score: tagScore + catScore };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || +b.p.data.published - +a.p.data.published)
    .slice(0, limit)
    .map((x) => x.p);
}

export function allTags(posts: Post[]): { tag: string; count: number }[] {
  const map = new Map<string, number>();
  for (const p of posts) {
    for (const t of p.data.tags) {
      map.set(t, (map.get(t) || 0) + 1);
    }
  }
  return [...map.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export { tagSlug };
