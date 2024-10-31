<script>
	import sample from '$lib/assets/image.jpg';
	import MultitoneImage from '$lib/MultitoneImage.svelte';
</script>

<main>
	<h1>Documentation</h1>
	<p>The package is installed on NPM and can simply be installed from there.</p>
	<pre>npm install svelte-multitoneimage</pre>
	<p>To use import the component and use it as if it were a normal image.</p>
	<pre>&lt;MultitoneImage alt="alt text" src="src path"></pre>
	<p>There are three parameters (all reactive)</p>
	<dl>
		<dt>colors</dt>
		<dd>Takes an array of colors in hex format, defaults to [#000, #fff].</dd>
		<dt>amplitude</dt>
		<dd>higher values make light areas lighter</dd>
		<dt>exponent</dt>
		<dd>higher values make dark areas darker</dd>
	</dl>
	<p>The following code</p>
	<pre>&lt;MultitoneImage
  alt="Sibiu"
  src="/sibiu.jpg"
  colors={['#123', '#def']}
  amplitude={1}
  exponent={1}
></pre>
	<p>Gives this result</p>
	<div class="sample">
		<MultitoneImage alt="Sibiu" src={sample} colors={['#123', '#def']} amplitude={1} exponent={1} />
	</div>
	<p>Check the <a href="/demo">Demo Page</a> for an interactive demo</p>
</main>

<style>
	main {
		display: grid;
		gap: 1rem;
		margin: 0 auto 2rem;
		max-inline-size: 144ch;
		padding: 0 0.5rem;
	}

	dl {
		display: grid;
		gap: 1rem;
		grid-template-columns: max-content max-content;
		margin-inline-start: 1rem;

		> dt {
			font-weight: 600;
		}
	}

	div {
		margin: auto;
		max-inline-size: 500px;
	}

	a {
		color: var(--primary);
		font-weight: 500;

		&:where(:active, :focus, :hover) {
			background-color: var(--primary);
			color: white;
		}
	}
</style>
