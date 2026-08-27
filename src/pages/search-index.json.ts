import type { APIRoute } from 'astro';
import { allPosts } from '../lib/posts';
import { withBase } from '../lib/site';

export const GET: APIRoute = async () => {
  const posts = await allPosts();
  const items = posts.map((p) => ({
    title: p.data.title,
    description: p.data.description,
    slug: p.data.slug,
    url: withBase(`posts/${p.data.slug}/`),
    categories: p.data.categories,
    tags: p.data.tags,
    date: p.data.published.toISOString(),
    hero: p.data.hero ? withBase(p.data.hero) : null,
  }));
  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
