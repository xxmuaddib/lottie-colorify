import { describe, test, expect } from 'vitest';
import type { LottieColor, Color } from '../../src/types';
import { convertLottieColorToRgb } from '../../src/converters/convertLottieColorToRgb';

describe('convertLottieColorToRgb', () => {
  test.each([
    [
      [0, 0, 0, 1],
      [0, 0, 0],
    ],
    [
      [1, 1, 1, 1],
      [255, 255, 255],
    ],
    [
      [1, 1, 0, 1],
      [255, 255, 0],
    ],
    [
      [1, 0, 1, 1],
      [255, 0, 255],
    ],
    [
      [0, 1, 1, 1],
      [0, 255, 255],
    ],
    [
      [0, 0, 1, 1],
      [0, 0, 255],
    ],
    [
      [1, 0, 0, 1],
      [255, 0, 0],
    ],
    [
      [0, 1, 0, 1],
      [0, 255, 0],
    ],
    [
      [0, 0.5, 0, 1],
      [0, 128, 0],
    ],
  ] as [LottieColor, Color][])(
    'should convert the Lottie color to RGB format',
    (lottieColor: LottieColor, expected: Color) => {
      const result = convertLottieColorToRgb(lottieColor as LottieColor);
      expect(result).toEqual(expected);
    },
  );
});
