import * as utils from '$lib/utils.js';
import { describe } from 'vitest';
import { expect, test } from 'vitest';

describe('expandHex short form', () => {
	test('expandHex short form (numbers)', () => {
		const result = utils.expandHex('#123');
		expect(result).toEqual('#112233');
	});

	test('expandHex short form (letters)', () => {
		const result = utils.expandHex('#abc');
		expect(result).toEqual('#aabbcc');
	});

	test('expandHex short form (capitals)', () => {
		const result = utils.expandHex('#ABC');
		expect(result).toEqual('#AABBCC');
	});

	test('expandHex short form (mixed)', () => {
		const result = utils.expandHex('#1aB');
		expect(result).toEqual('#11aaBB');
	});
});

describe('expandHex long form', () => {
	test('expandHex long form (numbers)', () => {
		const result = utils.expandHex('#123456');
		expect(result).toEqual('#123456');
	});

	test('expandHex long form (letters)', () => {
		const result = utils.expandHex('#aabbcc');
		expect(result).toEqual('#aabbcc');
	});

	test('expandHex long form (capitals)', () => {
		const result = utils.expandHex('#AABBCC');
		expect(result).toEqual('#AABBCC');
	});

	test('expandHex long form (mixed)', () => {
		const result = utils.expandHex('#12abCD');
		expect(result).toEqual('#12abCD');
	});
});

describe('hexToRgb', () => {
	test('short form', () => {
		const result = utils.hexToRgb('#123');
		expect(result).toEqual([17, 34, 51]);
	});

	test('long form', () => {
		const result = utils.hexToRgb('#1a2c3d');
		expect(result).toEqual([26, 44, 61]);
	});
});

describe('getChannel', () => {
	const fn = utils.getChannel(['#000', '#123456']);

	test('r channel', () => {
		const result = fn('r');
		expect(result).toEqual('0.0000 0.0706');
	});

	test('g channel', () => {
		const result = fn('g');
		expect(result).toEqual('0.0000 0.2039');
	});

	test('b channel', () => {
		const result = fn('b');
		expect(result).toEqual('0.0000 0.3373');
	});
});
