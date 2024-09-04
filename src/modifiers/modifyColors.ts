import { LottieColor, LottieObject } from '../types';

/**
 * Replace Lottie colors in the animation. Specify the target lottie color array exactly as the source lottie color order.
 * @param colorsArray must be LOTTIE COLORS
 * @param lottieObject
 * @param immutable makes a deep copy of the lottieObject if true
 * @returns LottieObject
 */
export const modifyColors = (
  colorsArray: LottieColor[],
  lottieObject: LottieObject,
  immutable = true,
): LottieObject => {
  let i = 0;
  function doModify(colors: LottieColor[], innerObject: LottieObject) {
    if (innerObject && innerObject.s && Array.isArray(innerObject.s) && innerObject.s.length === 4) {
      if (colors[i]) {
        innerObject.s = [...colors[i]];
      }
      i++;
    } else if (innerObject && innerObject.c && innerObject.c.k) {
      if (Array.isArray(innerObject.c.k) && typeof innerObject.c.k[0] !== 'number') {
        doModify(colors, innerObject.c.k);
      } else {
        if (colors[i]) {
          innerObject.c.k = colors[i];
        }
        i++;
      }
    }

    for (const key in innerObject) {
      if (typeof innerObject[key] === 'object') {
        doModify(colors, innerObject[key]);
      }
    }

    return innerObject;
  }

  return doModify(colorsArray, immutable ? structuredClone(lottieObject) : lottieObject);
};
