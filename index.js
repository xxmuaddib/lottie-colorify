const colorify = function(destColors = [], lottie) {
  const modifiedColors = [];
  for (let color of destColors) {
    modifiedColors.push(convertColorToLottieColor(color));
  }

  const newLottie = modifyColors(modifiedColors, lottie);
  return newLottie;
};

function convertColorToLottieColor(color) {
  if (
    typeof color === "string" &&
    color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)
  ) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return [
      Math.round(parseInt(result[1], 16) / 255 * 100) / 100,
      Math.round(parseInt(result[2], 16) / 255 * 100) / 100,
      Math.round(parseInt(result[3], 16) / 255 * 100) / 100,
    ];
  } else if (
    typeof color === "object" &&
    color.length === 3 &&
    color.every((item) => item >= 0 && item <= 255)
  ) {
    return [Math.round(color[0] / 255 * 100) / 100, Math.round(color[1] / 255 * 100) / 100, Math.round(color[2] / 255 * 100) / 100];
  } else if (!color) {
    return undefined;
  } else {
    throw new Error("Color can be only hex or rgb array (ex. [10,20,30])");
  }
}

function replaceColor(sourceColor, targetColor, obj) {
  const sourceLottieColor = convertColorToLottieColor(sourceColor);
  const targetLottieColor = convertColorToLottieColor(targetColor);
  function doReplace(sourceLottieColor, targetLottieColor, obj) {
    if (obj.c) {
      if (sourceLottieColor[0] === obj.c.k[0] && sourceLottieColor[1] === obj.c.k[1] && sourceLottieColor[2] === obj.c.k[2]) {
        obj.c.k = targetLottieColor;
      }
    }

    for (let key in obj) {
      if (typeof obj[key] === "object") {
        doReplace(sourceLottieColor, targetLottieColor, obj[key]);
      }
    }

    return obj;
  }
  return doReplace(sourceLottieColor, targetLottieColor, obj);
}

function modifyColors(colors, obj) {
  let i = 0;
  function doModify(colors, obj) {
    if (obj.c) {
      if (colors[i]) {
        obj.c.k = colors[i];
      }
      i++;
    }

    for (let key in obj) {
      if (typeof obj[key] === "object") {
        doModify(colors, obj[key]);
      }
    }

    return obj;
  }
  return doModify(colors, obj);
}

function convertLottieColorToRgb(lottieColor) {
  return [
    parseInt(lottieColor[0] * 255),
    parseInt(lottieColor[1] * 255),
    parseInt(lottieColor[2] * 255),
  ]
}

function getColors(obj) {
  let res = [];
  function doGet(obj) {
    if (obj.c) {
      res.push(convertLottieColorToRgb(obj.c.k));
    }

    for (let key in obj) {
      if (typeof obj[key] === "object") {
        doGet(obj[key]);
      }
    }

    return res;
  }
  doGet(obj);
  return res;
}

module.exports = { colorify, getColors, replaceColor };
