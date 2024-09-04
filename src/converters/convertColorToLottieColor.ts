import { Color, LottieColor } from '../types';

/**
 * Convert a rgb / rgba / hex color to a lottie color.
 * @param color
 * @returns lottie color array with alpha channel
 */
export const convertColorToLottieColor = (color?: Color): LottieColor => {
  if (typeof color === 'string') {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    if (!result) {
      throw new Error('Color does not match hex format');
    }
    return [
      Math.round((parseInt(result[1], 16) / 255) * 1000) / 1000,
      Math.round((parseInt(result[2], 16) / 255) * 1000) / 1000,
      Math.round((parseInt(result[3], 16) / 255) * 1000) / 1000,
      1,
    ];
  } else if (typeof color === 'object' && color.length === 3 && color.every((item) => item >= 0 && item <= 255)) {
    return [
      Math.round((color[0] / 255) * 1000) / 1000,
      Math.round((color[1] / 255) * 1000) / 1000,
      Math.round((color[2] / 255) * 1000) / 1000,
      1,
    ];
  } else if (
    typeof color === 'object' &&
    color.length === 4 &&
    color.every((item) => {
      return item >= 0 && item <= 255;
    })
  ) {
    return [
      Math.round((color[0] / 255) * 1000) / 1000,
      Math.round((color[1] / 255) * 1000) / 1000,
      Math.round((color[2] / 255) * 1000) / 1000,
      color[3],
    ];
  } else if (!color) {
    throw new Error('Color not defined');
  } else {
    throw new Error('Color can be only hex or rgb(a) array (ex. [10,20,30,1])');
  }
};
