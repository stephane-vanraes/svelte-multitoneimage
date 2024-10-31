<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { getChannel } from './utils.js';

	interface Props extends HTMLImgAttributes {
		colors?: string[];
		amplitude?: number;
		exponent?: number;
	}

	const { colors = ['#000', '#fff'], amplitude = 1, exponent = 1, ...rest }: Props = $props();

	const id = crypto.randomUUID();

	const getValues = $derived(getChannel(colors));
</script>

<svg viewBox="0 0 1 1">
	<filter id="duotone-{id}">
		<feColorMatrix
			type="matrix"
			values=".33 .33 .33 0 0
                  .33 .33 .33 0 0
                  .33 .33 .33 0 0
                  0   0   0 1 0"
		>
		</feColorMatrix>
		<feComponentTransfer color-interpolation-filters="sRGB">
			<feFuncR type="table" tableValues={getValues('r')}></feFuncR>
			<feFuncG type="table" tableValues={getValues('g')}></feFuncG>
			<feFuncB type="table" tableValues={getValues('b')}></feFuncB>
		</feComponentTransfer>
		<feComponentTransfer color-interpolation-filters="sRGB">
			<feFuncR type="gamma" {exponent} {amplitude} offset="0"></feFuncR>
			<feFuncG type="gamma" {exponent} {amplitude} offset="0"></feFuncG>
			<feFuncB type="gamma" {exponent} {amplitude} offset="0"></feFuncB>
		</feComponentTransfer>
	</filter>
</svg>

<img style="filter: url(#duotone-{id});" {...rest} />

<style>
	img {
		width: 100%;
	}
	svg {
		height: 0;
		position: fixed;
	}
</style>
