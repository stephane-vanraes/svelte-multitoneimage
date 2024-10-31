<script lang="ts">
	import sample from '$lib/assets/image.jpg';
	import MultitoneImage from '$lib/MultitoneImage.svelte';
	let amplitude = $state(1);
	let exponent = $state(1);

	let colors = $state([
		{
			value: '#000',
			selected: true
		},
		{
			value: '#fff',
			selected: true
		},
		{
			value: '#33cc9c',
			selected: false
		},
		{
			value: '#cc3363',
			selected: false
		},
		{
			value: '#f00',
			selected: false
		},
		{
			value: '#0f0',
			selected: false
		},
		{
			value: '#00f',
			selected: false
		},
		{
			value: '#888',
			selected: false
		}
	]);
	let selected_colors = $derived(colors.filter((c) => c.selected).map((c) => c.value));
</script>

<h1>Demo</h1>
<div class="controls">
	<label>
		<span>Exponent</span>
		<input type="range" min="0" max="10" bind:value={exponent} step="0.1" />
		<span>{exponent}</span>
	</label>
	<label>
		<span>Amplitude</span>
		<input type="range" min="0" max="10" bind:value={amplitude} step="0.1" />
		<span>{amplitude}</span>
	</label>
	<div class="colours">
		<span>Colours</span>
		<div>
			{#each colors as color}
				<label class="colour" style="--clr: {color.value}">
					<input type="checkbox" bind:checked={color.selected} />
				</label>
			{/each}
		</div>
	</div>
</div>

{#if selected_colors.length < 2}
	<p>Select at least 2 colours</p>
{:else}
	<MultitoneImage alt="" src={sample} {exponent} colors={selected_colors} {amplitude} />
{/if}

<style>
	.controls {
		display: grid;
		gap: 0.5rem 1rem;
		grid-template-columns: max-content 200px max-content;
		padding: 1rem;
	}
	label {
		align-items: center;
		display: grid;
		gap: 1rem;
		grid-column: 1 / -1;
		grid-template-columns: subgrid;
	}
	input {
		accent-color: var(--primary);
	}
	span {
		font-weight: 500;
	}
	.colours {
		display: grid;
		gap: 1rem;
		grid-column: 1 / -1;
		grid-template-columns: subgrid;

		> div {
			display: flex;
			gap: 0.25rem;

			label {
				display: flex;
				flex-direction: column;

				&:after {
					background-color: var(--clr);
					border: 2px solid black;
					content: '';
					height: 2rem;
					width: 2rem;
				}
			}
		}
	}
</style>
