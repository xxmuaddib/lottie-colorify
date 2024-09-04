import { Color, LottieColor } from '../types';
/**
 * Convert a rgb / rgba / hex color to a lottie color.
 * @param color
 * @returns lottie color array with alpha channel
 */
export declare const convertColorToLottieColor: (color?: Color) => LottieColor;
