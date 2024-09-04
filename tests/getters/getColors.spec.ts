import { getColors } from '../../src/getters/getColors';
import { describe, it, expect } from 'vitest';
import basicAnimation from '../mock-data/basic-animation.json';

describe('getColors', () => {
  it('should return an array of colors', () => {
    const result = getColors(basicAnimation);
    expect(result).toEqual([
      [70, 193, 228],
      [187, 179, 255],
      [70, 193, 228],
      [255, 245, 179],
    ]);
  });
});
