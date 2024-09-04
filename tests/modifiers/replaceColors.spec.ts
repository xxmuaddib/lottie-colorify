import { replaceColors } from './../../src/modifiers/replaceColors';
import { describe, it, assert } from 'vitest';
import type { Color } from '../../src/types';
import basicAnimation from '../mock-data/basic-animation.json';

describe('replaceColors', () => {
  it('should replace colors in the Lottie object with the specified colors pair', () => {
    const colorsPair = [
      [[70, 193, 228], '#bada55'],
      [
        [187, 179, 255],
        [192, 192, 192],
      ],
      [
        [255, 245, 179],
        [123, 123, 123, 0.5],
      ],
    ] as [Color, Color][];

    const result = replaceColors(colorsPair, basicAnimation);
    const expected = structuredClone(basicAnimation);

    expected.layers[0].shapes[0].it[1].c!.k = [0.729, 0.855, 0.333, 1];
    expected.layers[0].shapes[0].it[2].c!.k = [0.753, 0.753, 0.753, 1];
    expected.layers[0].shapes[1].it[1].c!.k = [0.729, 0.855, 0.333, 1];
    expected.layers[0].shapes[1].it[2].c!.k = [0.482, 0.482, 0.482, 0.5];

    assert.notDeepEqual(result, basicAnimation);
    assert.deepEqual(result, expected);
  });
});
