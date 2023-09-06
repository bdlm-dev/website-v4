import { posts } from './data.js';

export function load() {
	return {
		summaries: posts.map((post) => ({
			ref: post.ref,
			title: post.title,
            languages: post.languages,
            brief: post.brief,
			img: post.img,
			links: post.links
		}))
	};
}
