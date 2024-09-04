import { HexColor, LottieColor } from '../types';

/**
 * Convert a lottie color to a hex color (without alpha channel).
 * @param lottieColor
 * @returns hex color
 */
export const convertLottieColorToHex = (lottieColor: LottieColor): HexColor => {
  const r = Math.round(lottieColor[0] * 255)
    .toString(16)
    .padStart(2, '0');
  const g = Math.round(lottieColor[1] * 255)
    .toString(16)
    .padStart(2, '0');
  const b = Math.round(lottieColor[2] * 255)
    .toString(16)
    .padStart(2, '0');
  return `#${r}${g}${b}`;
};
