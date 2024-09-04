import { Color, LottieObject } from '../types';
/**
 * Replace all occurrences of sourceColor with targetColor in a lottie object.
 * Also works with gradients but that requires a bit more attention to the sourceColors.
 * @param sourceColor
 * @param targetColor
 * @param lottieObject
 * @param immutable makes a deep copy of the lottieObject if true
 * @returns lottieObject
 */
export declare const replaceColor: (sourceColor: Color, targetColor: Color, lottieObject: LottieObject, immutable?: boolean) => LottieObject;
