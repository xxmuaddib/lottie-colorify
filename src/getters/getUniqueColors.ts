import { getColors } from './getColors';
import { LottieObject, RgbColor, RgbaColor } from '../types';

/**
 * Get all the colors from a lottie object then filters them for uniqueness.
 * @param lottieObject
 * @returns array of rgb colors with a possible alpha channel
 */
export const getUniqueColors = (lottieObject: LottieObject): (RgbColor | RgbaColor)[] => {
  const colors = getColors(lottieObject);
  const stringArray = colors.map((color) => JSON.stringify(color));
  const uniqueStringArray = new Set(stringArray);
  return Array.from(uniqueStringArray, (item) => JSON.parse(item));
};
