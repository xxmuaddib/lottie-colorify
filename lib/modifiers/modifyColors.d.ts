import { LottieColor, LottieObject } from '../types';
/**
 * Replace Lottie colors in the animation. Specify the target lottie color array exactly as the source lottie color order.
 * @param colorsArray must be LOTTIE COLORS
 * @param lottieObject
 * @param immutable makes a deep copy of the lottieObject if true
 * @returns LottieObject
 */
export declare const modifyColors: (
  colorsArray: LottieColor[],
  lottieObject: LottieObject,
  immutable?: boolean,
) => LottieObject;
