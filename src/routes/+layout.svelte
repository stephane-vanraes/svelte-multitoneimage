<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import '$lib/styles.css';

	const { children } = $props();
</script>

{#snippet link(href: string, text: string)}
	<a href={resolve(href)} aria-current={page.route.id == href ? 'page' : undefined}>{text}</a>
{/snippet}

<div class="header">
  <header>
    <h1>Svelte Multitone Image</h1>
    {@render link('/', 'Home')}
    {@render link('/docs', 'Docs')}
    {@render link('/demo', 'Demo')}
    <a href="https://github.com/stephane-vanraes/svelte-multitoneimage" target="_blank">Github</a>
  </header>
</div>

<div>
	{@render children()}
</div>

<style>
.header {
		background-color: var(--primary);
		box-shadow: 0px 8px 8px var(--secondary);

}
	header {
		align-items: center;
		color: white;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
    margin-inline: auto;
    max-inline-size: 120ch;

		> h1 {
			flex-grow: 999;
			font-size: 1.25rem;
			font-weight: 500;
		}

		> a {
			background-color: transparent;
			border: 4px solid transparent;
			border-radius: 1rem;
			padding: 0.5rem 1rem;
			text-decoration: none;
		}

		> a:where(:active, :focus, :hover) {
			background-color: var(--secondary);
			border-color: var(--secondary);
			color: black;
		}

		> a[aria-current~='page'] {
			border-color: var(--secondary);
		}
	}

	div {
		padding: 1rem 2rem;
	}
</style>
