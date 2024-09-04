import { describe, it, expect } from 'vitest';
import { getColors } from '../../src/getters/getColors';
import { getUniqueColors } from './../../src/getters/getUniqueColors';
import basicAnimation from '../mock-data/basic-animation.json';

describe('getUniqueColors', () => {
  it('should return an array of colors', () => {
    const allColors = getColors(basicAnimation);
    const uniqueColors = getUniqueColors(basicAnimation);

    expect(allColors).toEqual([
      [70, 193, 228],
      [187, 179, 255],
      [70, 193, 228],
      [255, 245, 179],
    ]);

    expect(uniqueColors).toEqual([
      [70, 193, 228],
      [187, 179, 255],
      [255, 245, 179],
    ]);

    expect(uniqueColors).not.toEqual(allColors);
  });
});
