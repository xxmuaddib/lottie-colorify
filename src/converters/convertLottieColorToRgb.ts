import { LottieColor, RgbColor } from '../types';

/**
 * Convert a lottie color to an rgb color array (without alpha channel).
 * @param lottieColor
 * @returns rgb color array
 */
export const convertLottieColorToRgb = (lottieColor: LottieColor): RgbColor => {
  return [Math.round(lottieColor[0] * 255), Math.round(lottieColor[1] * 255), Math.round(lottieColor[2] * 255)];
};
