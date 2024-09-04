import { convertLottieColorToRgb } from '../converters/convertLottieColorToRgb';
import { convertLottieColorToRgba } from '../converters/convertLottieColorToRgba';
import { LottieObject, RgbColor, RgbaColor, LottieColor } from '../types';

/**
 * Get all the colors from a lottie object. It will return an array of rgba colors, not unique.
 * @param lottieObject
 * @returns array of rgb colors with a possible alpha channel
 */
export const getColors = (lottieObject: LottieObject): (RgbColor | RgbaColor)[] => {
  const res: (RgbColor | RgbaColor)[] = [];
  function doGet(innerObject: LottieObject) {
    if (
      innerObject.g &&
      innerObject.g.k &&
      innerObject.g.k.k &&
      Array.isArray(innerObject.g.k.k) &&
      innerObject.g.k.k.length % 4 === 0
    ) {
      if (Array.isArray(innerObject.g.k.k) && typeof innerObject.g.k.k[0] !== 'number') {
        doGet(innerObject.g.k.k);
      }
      const tmpColors = [...innerObject.g.k.k];
      while (tmpColors.length) {
        const color = [...tmpColors.splice(1, 3), tmpColors.shift()] as LottieColor;
        res.push(convertLottieColorToRgba(color));
      }
    } else if (innerObject.s && Array.isArray(innerObject.s) && innerObject.s.length === 4) {
      res.push(convertLottieColorToRgba(innerObject.s));
    } else if (innerObject.c && innerObject.c.k) {
      if (Array.isArray(innerObject.c.k) && typeof innerObject.c.k[0] !== 'number') {
        doGet(innerObject.c.k);
      } else {
        res.push(convertLottieColorToRgb(innerObject.c.k));
      }
    } else {
      for (const key in innerObject) {
        if (typeof innerObject[key] === 'object') {
          doGet(innerObject[key]);
        }
      }
    }

    return res;
  }
  doGet(lottieObject);
  return res;
};
