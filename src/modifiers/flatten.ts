import { convertColorToLottieColor } from '../converters/convertColorToLottieColor';
import { Color, LottieObject, LottieColor } from '../types';

/**
 * Replace all the colors in a lottie object with 1 target color.
 * @param targetColor
 * @param lottieObject
 * @param immutable makes a deep copy of the lottieObject if true
 * @returns lottieObject
 */
export const flatten = (targetColor: Color, lottieObject: LottieObject, immutable = true) => {
  const genTargetLottieColor = convertColorToLottieColor(targetColor);
  if (!genTargetLottieColor) {
    throw new Error('Proper colors must be used for target');
  }
  function doFlatten(targetLottieColor: LottieColor, innerObject: LottieObject) {
    if (innerObject && innerObject.s && Array.isArray(innerObject.s) && innerObject.s.length === 4) {
      innerObject.s = [...targetLottieColor];
    } else if (innerObject && innerObject.c && innerObject.c.k) {
      if (Array.isArray(innerObject.c.k) && typeof innerObject.c.k[0] !== 'number') {
        doFlatten(targetLottieColor, innerObject.c.k);
      } else {
        innerObject.c.k = targetLottieColor;
      }
    } else {
      for (const key in innerObject) {
        if (typeof innerObject[key] === 'object') {
          doFlatten(targetLottieColor, innerObject[key]);
        }
      }
    }

    return innerObject;
  }
  return doFlatten(genTargetLottieColor, immutable ? structuredClone(lottieObject) : lottieObject);
};
