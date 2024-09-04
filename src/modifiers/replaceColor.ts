import { round, faultMargin } from '../basics';
import { convertColorToLottieColor } from '../converters/convertColorToLottieColor';
import { Color, LottieObject, LottieColor } from '../types';

/**
 * Replace all occurrences of sourceColor with targetColor in a lottie object.
 * Also works with gradients but that requires a bit more attention to the sourceColors.
 * @param sourceColor
 * @param targetColor
 * @param lottieObject
 * @param immutable makes a deep copy of the lottieObject if true
 * @returns lottieObject
 */
export const replaceColor = (
  sourceColor: Color,
  targetColor: Color,
  lottieObject: LottieObject,
  immutable = true,
): LottieObject => {
  const genSourceLottieColor = convertColorToLottieColor(sourceColor);
  const genTargetLottieColor = convertColorToLottieColor(targetColor);

  if (!genSourceLottieColor || !genTargetLottieColor) {
    throw new Error('Proper colors must be used for both source and target');
  }

  function doReplace(sourceLottieColor: LottieColor, targetLottieColor: LottieColor, innerObject: LottieObject) {
    if (innerObject && innerObject.s && Array.isArray(innerObject.s) && innerObject.s.length === 4) {
      if (
        sourceLottieColor[0] === innerObject.s[0] &&
        sourceLottieColor[1] === innerObject.s[1] &&
        sourceLottieColor[2] === innerObject.s[2]
      ) {
        innerObject.s = [...targetLottieColor];
      }
    } else if (innerObject && innerObject.c && innerObject.c.k) {
      // Handling Solid Colors
      if (Array.isArray(innerObject.c.k) && typeof innerObject.c.k[0] !== 'number') {
        doReplace(sourceLottieColor, targetLottieColor, innerObject.c.k);
      } else if (
        Math.abs(sourceLottieColor[0] - round(innerObject.c.k[0])) < faultMargin &&
        Math.abs(sourceLottieColor[1] - round(innerObject.c.k[1])) < faultMargin &&
        Math.abs(sourceLottieColor[2] - round(innerObject.c.k[2])) < faultMargin
      ) {
        innerObject.c.k = targetLottieColor;
      }
    } else if (innerObject.g && innerObject.g.k && innerObject.g.k.k && innerObject.g.k.k.length % 4 === 0) {
      // Handling gradients
      for (let i = 0; i < innerObject.g.k.k.length; i += 4) {
        if (
          Math.abs(round(sourceLottieColor[0]) - round(innerObject.g.k.k[i + 1])) < faultMargin &&
          Math.abs(round(sourceLottieColor[1]) - round(innerObject.g.k.k[i + 2])) < faultMargin &&
          Math.abs(round(sourceLottieColor[2]) - round(innerObject.g.k.k[i + 3])) < faultMargin
        ) {
          innerObject.g.k.k[i + 1] = targetLottieColor[0];
          innerObject.g.k.k[i + 2] = targetLottieColor[1];
          innerObject.g.k.k[i + 3] = targetLottieColor[2];
          innerObject.g.k.k[i + 4] = targetLottieColor[3];
        }
      }
    } else {
      for (const key in innerObject) {
        if (typeof innerObject[key] === 'object') {
          doReplace(sourceLottieColor, targetLottieColor, innerObject[key]);
        }
      }
    }

    return innerObject;
  }

  return doReplace(genSourceLottieColor, genTargetLottieColor, immutable ? structuredClone(lottieObject) : lottieObject);
};
