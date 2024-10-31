<script>
	import { base } from '$app/paths';
	import MultitoneImage from '$lib/MultitoneImage.svelte';
	import sample from '$lib/assets/image.jpg';
</script>

<main>
	<h1>A simple image renderer to apply multitone effects for svelte.</h1>
	<pre>&lt;MultitoneImage
    src={sample}
    alt="processed image"
    colors="&#123;['#ff00ff', '#ffff00']&#125;"
    amplitude={1.1}
    exponent={1.3} /&gt;</pre>
	<p>See the <a href="{base}/docs">Docs</a> for more information</p>
	<figure>
		<img src={sample} alt="" />
		<figcaption>The original image</figcaption>
	</figure>
	<figure>
		<MultitoneImage
			src={sample}
			colors={['#ff00ff', '#ffff00']}
			alt="processed image"
			exponent={1.3}
			amplitude={1.1}
		/>
		<figcaption>The processed image</figcaption>
	</figure>

	<figure>
		<MultitoneImage
			src={sample}
			colors={['#000', '#7a4285', '#07d4f2']}
			alt="processed image"
			exponent={2.0}
			amplitude={1.9}
		/>
		<figcaption>The colour array can have more than one colour.</figcaption>
	</figure>
	<figure>
		<MultitoneImage src={sample} />
		<figcaption>Default values will generate a grayscale image.</figcaption>
	</figure>
</main>

<style>
	main {
		align-items: start;
		display: grid;
		gap: 1rem;
		grid-template-columns: 1fr 1fr;
		padding: 1rem 2rem;

		> h1,
		> p {
			grid-column: 1 / -1;
		}
		> pre {
			grid-column: 1 / -1;
		}
	}
</style>
