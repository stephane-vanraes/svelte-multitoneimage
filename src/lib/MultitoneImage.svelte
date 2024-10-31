<script lang="ts">
	type Props = {
		src: string;
		alt: string;
		colours: string[];
		amplitude: number;
		exponent: number;
	};

	const { src, alt, colours = ['#000', '#fff'], amplitude, exponent }: Props = $props();

	const id = crypto.randomUUID();

	// Maps the hex code to rgb, extracts the desired channel and converts it to a decimal value
	const getChannel = (channel: 'r' | 'g' | 'b') =>
		colours
			.map((hex) => {
				const [r, g, b] = hex
					.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b)
					?.substring(1)
					?.match(/.{2}/g)
					?.map((x) => parseInt(x, 16)) ?? [0, 0, 0];
				return { r, g, b }[channel] / 255;
			})
			.join(' ');
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
			<feFuncR type="table" tableValues={getChannel('r')}></feFuncR>
			<feFuncG type="table" tableValues={getChannel('g')}></feFuncG>
			<feFuncB type="table" tableValues={getChannel('b')}></feFuncB>
		</feComponentTransfer>
		<feComponentTransfer color-interpolation-filters="sRGB">
			<feFuncR type="gamma" {exponent} {amplitude} offset="0"></feFuncR>
			<feFuncG type="gamma" {exponent} {amplitude} offset="0"></feFuncG>
			<feFuncB type="gamma" {exponent} {amplitude} offset="0"></feFuncB>
		</feComponentTransfer>
	</filter>
</svg>

<img {src} {alt} style="filter: url(#duotone-{id});" />

<style>
	img {
		width: 100%;
	}
	svg {
		height: 0;
		position: fixed;
	}
</style>
