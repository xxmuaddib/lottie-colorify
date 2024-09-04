import { replaceColor } from './../../src/modifiers/replaceColor';
import type { Color } from './../../src/types';
import { describe, it, assert } from 'vitest';
import basicAnimation from '../mock-data/basic-animation.json';

describe('replaceColor', () => {
  it('should replace rgb source color with the target hex color', () => {
    const sourceColor = [70, 193, 228] as Color;
    const targetColor = '#FFFFFF';
    const result = replaceColor(sourceColor, targetColor, basicAnimation);
    const expected = structuredClone(basicAnimation);

    // Theres two shapes that have the source color.
    expected.layers[0].shapes[0].it[1].c!.k = [1, 1, 1, 1];
    expected.layers[0].shapes[1].it[1].c!.k = [1, 1, 1, 1];

    assert.notDeepEqual(result, basicAnimation);
    assert.deepEqual(result, expected);
  });

  it('should replace hex source color with the target hex color', () => {
    const sourceColor = '#46c1e4';
    const targetColor = '#bada55';

    const result = replaceColor(sourceColor, targetColor, basicAnimation);
    const expected = structuredClone(basicAnimation);

    // Theres two shapes that have the source color.
    expected.layers[0].shapes[0].it[1].c!.k = [0.729, 0.855, 0.333, 1];
    expected.layers[0].shapes[1].it[1].c!.k = [0.729, 0.855, 0.333, 1];

    assert.notDeepEqual(result, basicAnimation);
    assert.deepEqual(result, expected);
  });

  it('should replace a rgb source color with a rgb target color', () => {
    const sourceColor = [187, 179, 255] as Color;
    const targetColor = [0, 0, 0, 1] as Color;
    const result = replaceColor(sourceColor, targetColor, basicAnimation);
    const expected = structuredClone(basicAnimation);
    expected.layers[0].shapes[0].it[2].c!.k = [0, 0, 0, 1];

    assert.notDeepEqual(result, basicAnimation);
    assert.deepEqual(result, expected);
  });

  it('should replace a hex source color with the target rgb color', () => {
    const sourceColor = '#46c1e4';
    const targetColor = [0, 0, 0, 1] as Color;
    const result = replaceColor(sourceColor, targetColor, basicAnimation);
    const expected = structuredClone(basicAnimation);

    expected.layers[0].shapes[0].it[1].c!.k = [0, 0, 0, 1];
    expected.layers[0].shapes[1].it[1].c!.k = [0, 0, 0, 1];

    assert.notDeepEqual(result, basicAnimation);
    assert.deepEqual(result, expected);
  });

  it('should replace a rgb source color with the target rgba color', () => {
    const sourceColor = [187, 179, 255] as Color;
    const targetColor = [123, 123, 123, 0.123] as Color;
    const result = replaceColor(sourceColor, targetColor, basicAnimation);
    const expected = structuredClone(basicAnimation);
    expected.layers[0].shapes[0].it[2].c!.k = [0.482, 0.482, 0.482, 0.123];

    assert.notDeepEqual(result, basicAnimation);
    assert.deepEqual(result, expected);
  });

  it('should replace a rgba source color with the target rgba color', () => {
    const sourceColor = [187, 179, 255, 1] as Color;
    const targetColor = [123, 123, 123, 0.123] as Color;
    const result = replaceColor(sourceColor, targetColor, basicAnimation);
    const expected = structuredClone(basicAnimation);
    expected.layers[0].shapes[0].it[2].c!.k = [0.482, 0.482, 0.482, 0.123];

    assert.notDeepEqual(result, basicAnimation);
    assert.deepEqual(result, expected);
  });
});
