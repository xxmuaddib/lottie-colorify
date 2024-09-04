import { flatten } from './../../src/modifiers/flatten';
import { describe, it, expect } from 'vitest';
import { getColors } from '../../src/getters/getColors';
import basicAnimation from '../mock-data/basic-animation.json';

describe('flatten', () => {
  it('should flatten all colors to the target hex color', () => {
    const colorsBefore = getColors(basicAnimation);
    const targetColor = '#FFFFFF';
    const result = flatten(targetColor, basicAnimation);
    const colorsAfter = getColors(result);

    expect(colorsBefore).toEqual([
      [70, 193, 228],
      [187, 179, 255],
      [70, 193, 228],
      [255, 245, 179],
    ]);

    // Only the target color remains
    expect(colorsAfter).toEqual([
      [255, 255, 255],
      [255, 255, 255],
      [255, 255, 255],
      [255, 255, 255],
    ]);
  });
});
