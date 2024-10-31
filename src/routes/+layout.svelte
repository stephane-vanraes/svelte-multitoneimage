<script lang="ts">
	import '../index.css';

	const { children } = $props();
</script>

<header>
	<h1>Svelte Multitone Image</h1>
	<a href="https://github.com/stephane-vanraes/svelte-multitoneimage">Github</a>
</header>

<div>
	{@render children()}
</div>

<style>
	header {
		background-color: var(--primary);
		color: white;
		display: flex;
		flex-wrap: wrap;
		padding: 1rem;

		> h1 {
			flex-grow: 999;
			font-size: 1.25rem;
			font-weight: 500;
		}
	}

	div {
		padding: 1rem 2rem;
	}
</style>
