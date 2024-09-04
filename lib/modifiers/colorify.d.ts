import { LottieObject, Color } from '../types';
/**
 * Replace Lottie colors in the animation. Specify the target color array exactly as the source lottie color order.
 * @param colorsArray must be rba/rgba/hex colors
 * @param lottieObject
 * @param immutable makes a deep copy of the lottieObject if true
 * @returns LottieObject
 */
export declare const colorify: (colorsArray: Color[] | undefined, lottieObject: LottieObject, immutable?: boolean) => LottieObject;
