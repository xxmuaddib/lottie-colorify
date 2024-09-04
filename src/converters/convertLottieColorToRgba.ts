import { LottieColor, RgbaColor } from '../types';

/**
 * Convert a lottie color to an rgba color array.
 * @param lottieColor
 * @returns rgba color array
 */
export const convertLottieColorToRgba = (lottieColor: LottieColor): RgbaColor => {
  return [
    Math.round(lottieColor[0] * 255),
    Math.round(lottieColor[1] * 255),
    Math.round(lottieColor[2] * 255),
    lottieColor[3],
  ];
};
