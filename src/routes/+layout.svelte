<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import '../index.css';

	const { children } = $props();
</script>

{#snippet link(href: string, text: string)}
	<a href="{base}{href}" aria-current={$page.route.id == href ? 'page' : undefined}>{text}</a>
{/snippet}

<header>
	<h1>Svelte Multitone Image</h1>
	{@render link('/', 'Home')}
	{@render link('/docs', 'Docs')}
	{@render link('/demo', 'Demo')}
	<a href="https://github.com/stephane-vanraes/svelte-multitoneimage" target="_blank">Github</a>
</header>

<div>
	{@render children()}
</div>

<style>
	header {
		align-items: center;
		background-color: var(--primary);
		box-shadow: 0px 8px 8px var(--secondary);
		color: white;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		padding: 1rem;

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
