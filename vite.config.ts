import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),      kit: {
        
				adapter: adapter({
					fallback: '404.html'
				}),
				paths: {
					base: process.env.BASE_PATH || '/svelte-multitoneimage-2'
				}
      }
		})
	]
});
