import svelte from 'rollup-plugin-svelte';	import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';	import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';	import { terser } from 'rollup-plugin-terser';

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());


export default {	export default {
	input: 'src/index.svelte',	    input: './src/pages/index.js',
	output: [	    output: {
		{ file: pkg.module, 'format': 'es' },	        file: './index.js',
		{ file: pkg.main, 'format': 'umd', name }	        format: 'iife'
	],	    },
	plugins: [	    treeshake: true,
		svelte(),	    plugins: [
		resolve()	        resolve({
	]	            extensions: ['.js', '.mjs', '.svelte']
};