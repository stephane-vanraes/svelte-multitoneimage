<script>
    export let src = "";
    export let alt = "";
    export let colours = ['#000', '#fff'];
    export let amplitude = 1;
    export let exponent = 1;

    // Creates a rough hash to ensure unique id's
    let id = src.split('').reduce((a,b) => (((a << 5) - a) + b.charCodeAt(0))|0, 0);

    // Maps the hex code to rgb, extracts the desired channel and converts it to a decimal value
    $: getChannel = (channel) => colours.map(hex => {
        const [ r, g, b ] =
            hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) => '#' + r + r + g + g + b + b)
             .substring(1).match(/.{2}/g)
            .map(x => parseInt(x, 16));
        return {r, g, b}[channel] / 255;
    }).join(' ');
</script>

<style>
img { width: 100%; }
svg { height: 0; }
</style>

<svg viewBox="0 0 1 1">
    <filter id="duotone-{id}">
        <feColorMatrix 
            type="matrix"
            values=".33 .33 .33 0 0
                    .33 .33 .33 0 0
                    .33 .33 .33 0 0
                    0   0   0 1 0">
        </feColorMatrix>
        <feComponentTransfer color-interpolation-filters="sRGB">
            <feFuncR type="table" tableValues="{getChannel('r')}"></feFuncR>
            <feFuncG type="table" tableValues="{getChannel('g')}"></feFuncG>
            <feFuncB type="table" tableValues="{getChannel('b')}"></feFuncB>
        </feComponentTransfer>
        <feComponentTransfer color-interpolation-filters="sRGB">
            <feFuncR type="gamma" {exponent} {amplitude} offset="0"></feFuncR>
            <feFuncG type="gamma" {exponent} {amplitude} offset="0"></feFuncG>
            <feFuncB type="gamma" {exponent} {amplitude} offset="0"></feFuncB>
        </feComponentTransfer>
    </filter>
</svg>

<img {src} {alt} style="filter: url(#duotone-{id});" />
