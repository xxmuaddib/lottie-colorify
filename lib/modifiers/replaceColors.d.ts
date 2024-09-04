import { Color, LottieObject } from '../types';
/**
 * Replaces all specified colors in a lottie object with the target colors.
 * @param colorPairs [sourceColor, targetColor][]
 * @param lottie LottieObject
 * @returns LottieObject
 */
export declare const replaceColors: (colorPairs: [Color, Color][], lottie: LottieObject) => LottieObject;
