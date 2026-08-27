import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { allPosts } from '../lib/posts';
import { SITE, withBase } from '../lib/site';

export async function GET(context: APIContext) {
  const posts = await allPosts();
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    trailingSlash: true,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.published,
      description: post.data.description,
      link: withBase(`posts/${post.data.slug}/`),
      categories: [...post.data.categories, ...post.data.tags],
    })),
  });
}
