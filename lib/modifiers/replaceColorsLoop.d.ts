import { Color, LottieObject } from '../types';
/**
 * Replaces source colors in a lottie object with the provided array, if the source colors list is longer than the target colors list, it will loop through the target colors.
 * @param sourceColors rgb/rgba/hex colors
 * @param targetColors rgb/rgba/hex colors
 * @param lottieObject
 * @returns LottieObject
 */
export declare const replaceColorsLoop: (
  sourceColors: Color[],
  targetColors: Color[],
  lottieObject: LottieObject,
) => any;
