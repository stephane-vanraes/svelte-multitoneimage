<script>
    import MultitoneImage from '../index.svelte';

    const src = "image.jpg";
    let colours = ["#478abd", "#de45db"];
    let exponent = 1;
    let amplitude = 1;

    const remove = (index) => colours = colours.filter((c, i) => i != index);
    const add = () => colours = [...colours, "#757575"];

</script>

<h1>Svelte Multione Image</h1>
<main>
    <div class="controls">
        {#each colours as colour, index}
            <li>
                <label>
                    <input type="color" bind:value={colour}>
                    <span>{colour}</span>
                </label>
                <button
                    type="button"
                    disabled="{colours.length <= 2}"
                    on:click="{() => remove(index)}">
                    <span>Remove</span>
                </button>
            </li>
        {/each}
        <button on:click="{add}">Add</button>
        <hr />
        <label>
            <input type="range" min="0" max="5" step=".1" bind:value={exponent}>
            <span>Exponent</span>
        </label>
        <label>
            <input type="range" min="0" max="5" step=".1" bind:value={amplitude}>
            <span>Amplitude</span>
        </label>
    </div>
    <div class="image">
        <MultitoneImage {src} {colours} {exponent} {amplitude} />
    </div>
</main>
