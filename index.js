const colorify = function(destColors = [], lottie) {
  const modifiedColors = [];
  for (let color of destColors) {
    modifiedColors.push(hexToRgb(color));
  }

  const newLottie = modifyColors(modifiedColors, "c", lottie);
  return newLottie;
};

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255,
      ]
    : null;
}

function modifyColors(colors, property, obj, i = 0) {
  if (obj[property]) {
    if (colors[i]) {
      obj[property].k = colors[i];
    }
    i++;
  }

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      modifyColors(colors, property, obj[key], i);
    }
  }

  return obj;
}

exports.colorify = colorify;
exports.default = colorify;
