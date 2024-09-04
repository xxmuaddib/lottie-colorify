import { LottieObject, RgbColor, RgbaColor } from '../types';
/**
 * Get all the colors from a lottie object then filters them for uniqueness.
 * @param lottieObject
 * @returns array of rgb colors with a possible alpha channel
 */
export declare const getUniqueColors: (lottieObject: LottieObject) => (RgbColor | RgbaColor)[];
