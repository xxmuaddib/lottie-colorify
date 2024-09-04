import { convertColorToLottieColor } from '../converters/convertColorToLottieColor';
import { LottieObject, LottieColor, Color } from '../types';
import { modifyColors } from './modifyColors';

/**
 * Replace Lottie colors in the animation. Specify the target color array exactly as the source lottie color order.
 * @param colorsArray must be rba/rgba/hex colors
 * @param lottieObject
 * @param immutable makes a deep copy of the lottieObject if true
 * @returns LottieObject
 */
export const colorify = (colorsArray: Color[] = [], lottieObject: LottieObject, immutable = true): LottieObject => {
  const modifiedColors: LottieColor[] = [];

  colorsArray.forEach((color) => {
    modifiedColors.push(convertColorToLottieColor(color));
  });

  return modifyColors(modifiedColors, immutable ? structuredClone(lottieObject) : lottieObject);
};
