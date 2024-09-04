import { convertColorToLottieColor } from './converters/convertColorToLottieColor';
import { convertLottieColorToHex } from './converters/convertLottieColorToHex';
import { convertLottieColorToRgb } from './converters/convertLottieColorToRgb';
import { convertLottieColorToRgba } from './converters/convertLottieColorToRgba';
import { getColors } from './getters/getColors';
import { getUniqueColors } from './getters/getUniqueColors';
import { colorify } from './modifiers/colorify';
import { flatten } from './modifiers/flatten';
import { modifyColors } from './modifiers/modifyColors';
import { replaceColor } from './modifiers/replaceColor';
import { replaceColors } from './modifiers/replaceColors';
import { replaceColorsLoop } from './modifiers/replaceColorsLoop';
export {
  colorify,
  replaceColor,
  replaceColors,
  replaceColorsLoop,
  modifyColors,
  getColors,
  getUniqueColors,
  flatten,
  convertColorToLottieColor,
  convertLottieColorToRgb,
  convertLottieColorToRgba,
  convertLottieColorToHex,
};
