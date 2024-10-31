export const expandHex = (hex: string): string =>
	hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => `#${r}${r}${g}${g}${b}${b}`);

export const hexToRgb = (hex: string): [number, number, number] => {
	const expandedHex = expandHex(hex).substring(1);
	const rgb = expandedHex.match(/.{2}/g)?.map((x) => parseInt(x, 16));
	return rgb && rgb.length === 3 ? [rgb[0], rgb[1], rgb[2]] : [0, 0, 0];
};

export const getChannel = (colours: string[]) => (channel: 'r' | 'g' | 'b') =>
	colours
		.map((hex) => {
			const [r, g, b] = hexToRgb(hex);
			return ({ r, g, b }[channel] / 255).toFixed(4);
		})
		.join(' ');
