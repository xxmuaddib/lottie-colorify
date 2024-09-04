import { describe, test, expect } from 'vitest';
import type { LottieColor, Color } from '../../src/types';
import { convertLottieColorToHex } from '../../src/converters/convertLottieColorToHex';

describe('convertLottieColorToHex', () => {
  test.each([
    [[0, 0, 0, 0.1], '#000000'],
    [[1, 1, 1, 0.3], '#ffffff'],
    [[1, 1, 0, 1], '#ffff00'],
    [[1, 0, 1, 0.123], '#ff00ff'],
    [[0, 1, 1, 0.4], '#00ffff'],
    [[0, 0, 1, 0.99999999], '#0000ff'],
    [[1, 0, 0, 0.12345], '#ff0000'],
    [[0, 1, 0, 0.6], '#00ff00'],
    [[0, 0.5, 0, 0.5], '#008000'],
  ] as [LottieColor, Color][])(
    'should convert the Lottie color to hex',
    (lottieColor: LottieColor, expected: Color) => {
      const result = convertLottieColorToHex(lottieColor);
      expect(result).toEqual(expected);
    },
  );
});
