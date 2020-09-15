export const colorify = function (destColors: (string | number[] | undefined)[] = [], lottie: any) {
  const modifiedColors = [];
  for (let color of destColors) {
    modifiedColors.push(convertColorToLottieColor(color));
  }

  const newLottie = modifyColors(modifiedColors, lottie);
  return newLottie;
};

function convertColorToLottieColor(color: string | number[] | undefined) {
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
}

export function replaceColor(sourceColor: string | number[], targetColor: string | number[], obj: any) {
  const sourceLottieColor = convertColorToLottieColor(sourceColor);
  const targetLottieColor = convertColorToLottieColor(targetColor);
  if (!sourceLottieColor || !targetLottieColor) {
    throw new Error('Proper colors must be used for both source and target');
  }
  function doReplace(sourceLottieColor: number[], targetLottieColor: number[], obj: any) {
    if (obj.c) {
      if (
        sourceLottieColor[0] === obj.c.k[0] &&
        sourceLottieColor[1] === obj.c.k[1] &&
        sourceLottieColor[2] === obj.c.k[2]
      ) {
        obj.c.k = targetLottieColor;
      }
    }

    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        doReplace(sourceLottieColor, targetLottieColor, obj[key]);
      }
    }

    return obj;
  }
  return doReplace(sourceLottieColor, targetLottieColor, obj);
}

function modifyColors(colors: any, obj: any) {
  let i = 0;
  function doModify(colors: any, obj: any) {
    if (obj.c) {
      if (colors[i]) {
        obj.c.k = colors[i];
      }
      i++;
    }

    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        doModify(colors, obj[key]);
      }
    }

    return obj;
  }
  return doModify(colors, obj);
}

function convertLottieColorToRgb(lottieColor: number[]) {
  return [Math.round(lottieColor[0] * 255), Math.round(lottieColor[1] * 255), Math.round(lottieColor[2] * 255)];
}

export function getColors(obj: any): any {
  const res: any = [];
  function doGet(obj: any) {
    if (obj.c) {
      res.push(convertLottieColorToRgb(obj.c.k));
    }

    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        doGet(obj[key]);
      }
    }

    return res;
  }
  doGet(obj);
  return res;
}
