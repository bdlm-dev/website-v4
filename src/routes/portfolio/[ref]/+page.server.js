import { error } from '@sveltejs/kit';
import { posts } from '../data.js';

export function load({ params }) {
	const post = posts.find((post) => post.ref === params.ref);

	if (!post) throw error(404);

	return {
		post
	};
}
