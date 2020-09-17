import cloneDeep from 'lodash.clonedeep';

export const colorify = (destColors: (string | number[] | undefined)[] = [], lottie: any) => {
  const modifiedColors = [];
  for (const color of destColors) {
    modifiedColors.push(convertColorToLottieColor(color));
  }

  const newLottie = modifyColors(modifiedColors, cloneDeep(lottie));
  return newLottie;
};

const convertColorToLottieColor = (color: string | number[] | undefined) => {
  if (typeof color === 'string' && color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    if (!result) {
      throw new Error('Color can be only hex or rgb array (ex. [10,20,30])');
    }
    return [
      Math.round((parseInt(result[1], 16) / 255) * 100) / 100,
      Math.round((parseInt(result[2], 16) / 255) * 100) / 100,
      Math.round((parseInt(result[3], 16) / 255) * 100) / 100,
    ];
  } else if (typeof color === 'object' && color.length === 3 && color.every((item) => item >= 0 && item <= 255)) {
    return [
      Math.round((color[0] / 255) * 100) / 100,
      Math.round((color[1] / 255) * 100) / 100,
      Math.round((color[2] / 255) * 100) / 100,
    ];
  } else if (!color) {
    return undefined;
  } else {
    throw new Error('Color can be only hex or rgb array (ex. [10,20,30])');
  }
};

export const replaceColor = (sourceColor: string | number[], targetColor: string | number[], lottieObj: any) => {
  const genSourceLottieColor = convertColorToLottieColor(sourceColor);
  const genTargetLottieColor = convertColorToLottieColor(targetColor);
  if (!genSourceLottieColor || !genTargetLottieColor) {
    throw new Error('Proper colors must be used for both source and target');
  }
  function doReplace(sourceLottieColor: number[], targetLottieColor: number[], obj: any) {
    if (obj.c && obj.c.k) {
      if (
        sourceLottieColor[0] === obj.c.k[0] &&
        sourceLottieColor[1] === obj.c.k[1] &&
        sourceLottieColor[2] === obj.c.k[2]
      ) {
        obj.c.k = targetLottieColor;
      }
    }

    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        doReplace(sourceLottieColor, targetLottieColor, obj[key]);
      }
    }

    return obj;
  }
  return doReplace(genSourceLottieColor, genTargetLottieColor, cloneDeep(lottieObj));
};

export const flatten = (targetColor: string | number[], lottieObj: any) => {
  const genTargetLottieColor = convertColorToLottieColor(targetColor);
  if (!genTargetLottieColor) {
    throw new Error('Proper colors must be used for target');
  }
  function doFlatten(targetLottieColor: number[], obj: any) {
    if (obj.c && obj.c.k) {
      obj.c.k = targetLottieColor;
    }

    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        doFlatten(targetLottieColor, obj[key]);
      }
    }

    return obj;
  }
  return doFlatten(genTargetLottieColor, cloneDeep(lottieObj));
};

const modifyColors = (colorsArray: any, lottieObj: any) => {
  let i = 0;
  function doModify(colors: any, obj: any) {
    if (obj.c && obj.c.k) {
      if (colors[i]) {
        obj.c.k = colors[i];
      }
      i++;
    }

    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        doModify(colors, obj[key]);
      }
    }

    return obj;
  }
  return doModify(colorsArray, lottieObj);
};

const convertLottieColorToRgb = (lottieColor: number[]) => {
  return [Math.round(lottieColor[0] * 255), Math.round(lottieColor[1] * 255), Math.round(lottieColor[2] * 255)];
};

export const getColors = (lottieObj: any): any => {
  const res: any = [];
  function doGet(obj: any) {
    if (obj.c && obj.c.k) {
      res.push(convertLottieColorToRgb(obj.c.k));
    }

    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        doGet(obj[key]);
      }
    }

    return res;
  }
  doGet(lottieObj);
  return res;
};
