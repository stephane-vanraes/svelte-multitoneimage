<script>
import MultitoneImage from '../index.svelte';
</script>

<header>
    <h1>Svelte Multitone Image</h1>
    <a href="https://github.com/stephane-vanraes/svelte-multitoneimage">Github</a>
</header>

<main>
    <p>A simple image renderer to apply multitone effects for svelte.</p>
    <div class="sample">
        <figure>
            <img src="./assets/image.jpg" alt="">
            <figcaption>The original image</figcaption>
        </figure>
        <figure>
            <MultitoneImage
                src="./assets/image.jpg"
                colours="{['#ff00ff', '#ffff00']}"
                alt="processed image"
                exponent="1.3"
                amplitude="1.1"
            />
            <figcaption>The processed image</figcaption>
        </figure>
    </div>
    <pre>&lt;MultitoneImage
        src="./assets/image.jpg"
        alt="processed image"
        colours="&#123;['#ff00ff', '#ffff00']&#125;"
        amplitude="1.3"
        exponent="1.1" /&gt;</pre>
</main>