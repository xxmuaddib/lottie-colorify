import { LottieObject, RgbColor, RgbaColor } from '../types';
/**
 * Get all the colors from a lottie object. It will return an array of rgba colors, not unique.
 * @param lottieObject
 * @returns array of rgb colors with a possible alpha channel
 */
export declare const getColors: (lottieObject: LottieObject) => (RgbColor | RgbaColor)[];
