# Svelte Multitone Image

A simple image renderer to apply multitone effects for svelte.

## Basic usage

```html
<MultitoneImage src={imageSource} colours={colorArray} />
```


## Props

### src

This is the origin of the image, equivalent of the `src` attribute on an <img> tag.

### alt

The alt text for the generated image.

### colours

An array of hex colours, the component will automatically parse both short and long hexcodes.
Defaults to `['#000', '#fff']` resulting in a grayscale image.

### exponent and amplitude

As a final step in the filter a gamma correction is passed on each channel, this correction is of the form:

```gamma = amplitude * pow(channel, exponent) + offset```

This gamma correction enhances the overall contrast in the image. A higher exponent will make the dark areas darker, while a higher amplitude brightens the lighter areas.

_The offset in this component will always be 0._
