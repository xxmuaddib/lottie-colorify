import { colorify } from './../../src/modifiers/colorify';
import { describe, it, assert } from 'vitest';
import type { Color } from '../../src/types';
import basicAnimation from '../mock-data/basic-animation.json';

describe('colorify', () => {
  it('should modify the colors in the Lottie object', () => {
    const targetColors = ['#bada55', '#ffffff', [123, 231, 12, 0], [0, 0, 0]] as Color[];
    const result = colorify(targetColors, basicAnimation);

    const expected = structuredClone(basicAnimation);
    expected.layers[0].shapes[0].it[1].c!.k = [0.729, 0.855, 0.333, 1];
    expected.layers[0].shapes[0].it[2].c!.k = [1, 1, 1, 1];
    expected.layers[0].shapes[1].it[1].c!.k = [0.482, 0.906, 0.047, 0];
    expected.layers[0].shapes[1].it[2].c!.k = [0, 0, 0, 1];

    assert.notDeepEqual(result, basicAnimation);
    assert.deepEqual(result, expected);
  });
});
