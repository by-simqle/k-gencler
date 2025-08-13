import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const modules = import.meta.glob('/src/posts/*.md', { eager: true });
  const posts = Object.entries(modules).map(([path, post]: any) => ({
    slug: path.split('/').pop()?.replace('.md', ''),
    ...(post.metadata ?? {})
  })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { posts };
};
