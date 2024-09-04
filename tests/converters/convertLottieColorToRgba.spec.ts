import { describe, test, expect } from 'vitest';
import type { LottieColor, Color } from '../../src/types';
import { convertLottieColorToRgba } from '../../src/converters/convertLottieColorToRgba';

describe('convertLottieColorToRgba', () => {
  test.each([
    [
      [0, 0, 0, 0.1],
      [0, 0, 0, 0.1],
    ],
    [
      [1, 1, 1, 0.3],
      [255, 255, 255, 0.3],
    ],
    [
      [1, 1, 0, 1],
      [255, 255, 0, 1],
    ],
    [
      [1, 0, 1, 0.123],
      [255, 0, 255, 0.123],
    ],
    [
      [0, 1, 1, 0.4],
      [0, 255, 255, 0.4],
    ],
    [
      [0, 0, 1, 0.99999999],
      [0, 0, 255, 0.99999999],
    ],
    [
      [1, 0, 0, 0.12345],
      [255, 0, 0, 0.12345],
    ],
    [
      [0, 1, 0, 0.6],
      [0, 255, 0, 0.6],
    ],
    [
      [0, 0.5, 0, 0.5],
      [0, 128, 0, 0.5],
    ],
  ] as [LottieColor, Color][])(
    'should convert the Lottie color to RGBA format',
    (lottieColor: LottieColor, expected: Color) => {
      const result = convertLottieColorToRgba(lottieColor);
      expect(result).toEqual(expected);
    },
  );
});
