import { Color, LottieObject } from '../types';
/**
 * Replace all the colors in a lottie object with 1 target color.
 * @param targetColor
 * @param lottieObject
 * @param immutable makes a deep copy of the lottieObject if true
 * @returns lottieObject
 */
export declare const flatten: (targetColor: Color, lottieObject: LottieObject, immutable?: boolean) => any;
