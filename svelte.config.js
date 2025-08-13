import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {

	preprocess: [
		mdsvex({
			extensions: ['.svx', '.md'],
			remarkPlugins: [import('remark-gfm')],
			rehypePlugins: []
		})
	],
	kit: {
		adapter: adapter({
			fallback: '200.html'
		}),
		alias: {
			$lib: path.resolve('./src/lib'),
			$posts: path.resolve('./src/posts')
		}
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
