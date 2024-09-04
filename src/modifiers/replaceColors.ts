import { Color, LottieObject } from '../types';
import { replaceColor } from './replaceColor';

/**
 * Replaces all specified colors in a lottie object with the target colors.
 * @param colorPairs [sourceColor, targetColor][]
 * @param lottie LottieObject
 * @returns LottieObject
 */
export const replaceColors = (colorPairs: [Color, Color][], lottie: LottieObject): LottieObject => {
  return colorPairs.reduce((computed, [sourceColor, targetColor]) => {
    return replaceColor(sourceColor, targetColor, computed);
  }, lottie);
};
