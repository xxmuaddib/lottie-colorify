import { replaceColorsLoop } from './../../src/modifiers/replaceColorsLoop';
import { describe, it, assert } from 'vitest';
import type { Color } from '../../src/types';
import basicAnimation from '../mock-data/basic-animation.json';

describe('replaceColorLoop', () => {
  it('should replace colors in the Lottie object with the specified colors when they exact match lengths', () => {
    const sourceColors = [
      [70, 193, 228],
      [187, 179, 255],
      [255, 245, 179],
    ] as Color[];

    const targetColors = ['#bada55', [192, 168, 0, 1], [123, 123, 123, 0.5]] as Color[];

    const result = replaceColorsLoop(sourceColors, targetColors, basicAnimation);

    const expected = structuredClone(basicAnimation);

    expected.layers[0].shapes[0].it[1].c!.k = [0.729, 0.855, 0.333, 1];
    expected.layers[0].shapes[0].it[2].c!.k = [0.753, 0.659, 0, 1];
    expected.layers[0].shapes[1].it[1].c!.k = [0.729, 0.855, 0.333, 1];
    expected.layers[0].shapes[1].it[2].c!.k = [0.482, 0.482, 0.482, 0.5];

    assert.notDeepEqual(result, basicAnimation);
    assert.deepEqual(result, expected);
  });

  it('should replace colors in the Lottie object with the specified colors when the source length is longer', () => {
    const sourceColors = [
      [70, 193, 228],
      [187, 179, 255],
      [255, 245, 179],
    ] as Color[];

    const targetColors = ['#bada55', [192, 168, 0, 1]] as Color[];

    const result = replaceColorsLoop(sourceColors, targetColors, basicAnimation);

    const expected = structuredClone(basicAnimation);

    expected.layers[0].shapes[0].it[1].c!.k = [0.729, 0.855, 0.333, 1];
    expected.layers[0].shapes[1].it[1].c!.k = [0.729, 0.855, 0.333, 1];
    expected.layers[0].shapes[0].it[2].c!.k = [0.753, 0.659, 0, 1];
    expected.layers[0].shapes[1].it[2].c!.k = [0.729, 0.855, 0.333, 1];

    assert.notDeepEqual(result, basicAnimation);
    assert.deepEqual(result, expected);
  });

  it('should replace colors in the Lottie object with the specified colors when the source length is shorter', () => {
    const sourceColors = [
      [70, 193, 228],
      [187, 179, 255],
    ] as Color[];

    const targetColors = ['#bada55', [192, 168, 0, 1], [123, 123, 123, 0.5]] as Color[];

    const result = replaceColorsLoop(sourceColors, targetColors, basicAnimation);

    const expected = structuredClone(basicAnimation);

    expected.layers[0].shapes[0].it[1].c!.k = [0.729, 0.855, 0.333, 1];
    expected.layers[0].shapes[0].it[2].c!.k = [0.753, 0.659, 0, 1];
    expected.layers[0].shapes[1].it[1].c!.k = [0.729, 0.855, 0.333, 1];

    assert.notDeepEqual(result, basicAnimation);
    assert.deepEqual(result, expected);
  });
});
