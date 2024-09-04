import { describe, expect, it, test } from 'vitest';
import type { Color } from '../../src/types';
import { convertColorToLottieColor } from '../../src/converters/convertColorToLottieColor';

describe('convertColorToLottieColor', () => {
  test.each([
    [
      [0, 0, 0],
      [0, 0, 0, 1],
    ],
    [
      [255, 255, 255],
      [1, 1, 1, 1],
    ],
    [
      [255, 255, 0],
      [1, 1, 0, 1],
    ],
    [
      [255, 0, 255],
      [1, 0, 1, 1],
    ],
    [
      [0, 255, 255],
      [0, 1, 1, 1],
    ],
    [
      [0, 0, 255],
      [0, 0, 1, 1],
    ],
    [
      [255, 0, 0],
      [1, 0, 0, 1],
    ],
    [
      [0, 255, 0],
      [0, 1, 0, 1],
    ],
    [
      [0, 128, 0],
      [0, 0.502, 0, 1],
    ],
  ] as [Color, Color][])('should convert the color to Lottie color', (color: Color, expected: Color) => {
    const result = convertColorToLottieColor(color);
    expect(result).toEqual(expected);
  });

  it('should throw an error if the color is not defined', () => {
    expect(() => convertColorToLottieColor()).toThrow('Color not defined');
  });
});
