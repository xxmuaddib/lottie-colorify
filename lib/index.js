"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColors = exports.flatten = exports.replaceColor = exports.colorify = void 0;
var lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
var colorify = function (destColors, lottieObj, immutable) {
    if (destColors === void 0) { destColors = []; }
    if (immutable === void 0) { immutable = true; }
    var modifiedColors = [];
    for (var _i = 0, destColors_1 = destColors; _i < destColors_1.length; _i++) {
        var color = destColors_1[_i];
        modifiedColors.push(convertColorToLottieColor(color));
    }
    var newLottie = modifyColors(modifiedColors, immutable ? (0, lodash_clonedeep_1.default)(lottieObj) : lottieObj);
    return newLottie;
};
exports.colorify = colorify;
var convertColorToLottieColor = function (color) {
    if (typeof color === 'string' && color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i)) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(color);
        if (!result) {
            throw new Error('Color can be only hex or rgba format (ex. [10,20,30,0.5])');
        }
        var colorArray = [
            Math.round((parseInt(result[1], 16) / 255) * 1000) / 1000,
            Math.round((parseInt(result[2], 16) / 255) * 1000) / 1000,
            Math.round((parseInt(result[3], 16) / 255) * 1000) / 1000,
        ];
        if (result[4]) {
            colorArray.push(parseInt(result[4], 16) / 255);
        }
        return colorArray;
    }
    else if (typeof color === 'object' &&
        color.length >= 3 &&
        color.length <= 4 &&
        color.every(function (item) { return item >= 0 && item <= 255; })) {
        var colorArray = [
            Math.round((color[0] / 255) * 1000) / 1000,
            Math.round((color[1] / 255) * 1000) / 1000,
            Math.round((color[2] / 255) * 1000) / 1000,
        ];
        if (color.length === 4) {
            colorArray.push(color[3]);
        }
        return colorArray;
    }
    else if (!color) {
        return undefined;
    }
    else {
        throw new Error('Color can be only hex or rgba format (ex. [10,20,30,0.5])');
    }
};
var round = function (n) { return Math.round(n * 1000) / 1000; };
var replaceColor = function (sourceColor, targetColor, lottieObj, immutable) {
    if (immutable === void 0) { immutable = true; }
    var genSourceLottieColor = convertColorToLottieColor(sourceColor);
    var genTargetLottieColor = convertColorToLottieColor(targetColor);
    if (!genSourceLottieColor || !genTargetLottieColor) {
        throw new Error('Proper colors must be used for both source and target');
    }
    function doReplace(sourceLottieColor, targetLottieColor, obj) {
        if (obj.s && Array.isArray(obj.s) && obj.s.length === 4) {
            if (sourceLottieColor[0] === round(obj.s[0]) &&
                sourceLottieColor[1] === round(obj.s[1]) &&
                sourceLottieColor[2] === round(obj.s[2])) {
                if ((sourceLottieColor.length < 4 && obj.s[3] === 1) ||
                    (sourceLottieColor.length === 4 && sourceLottieColor[3] === obj.s[3])) {
                    obj.s = [
                        targetLottieColor[0],
                        targetLottieColor[1],
                        targetLottieColor[2],
                        targetLottieColor[3] ? targetLottieColor[3] : 1,
                    ];
                }
            }
        }
        else if (obj.c && obj.c.k) {
            if (Array.isArray(obj.c.k) && typeof obj.c.k[0] !== 'number') {
                doReplace(sourceLottieColor, targetLottieColor, obj.c.k);
            }
            else if (sourceLottieColor[0] === round(obj.c.k[0]) &&
                sourceLottieColor[1] === round(obj.c.k[1]) &&
                sourceLottieColor[2] === round(obj.c.k[2])) {
                if ((sourceLottieColor.length < 4 && obj.c.k.length < 4) ||
                    (sourceLottieColor.length < 4 && obj.c.k.length === 4 && obj.c.k[3] === 1) ||
                    (sourceLottieColor.length === 4 && obj.c.k.length === 4 && sourceLottieColor[3] === obj.c.k[3])) {
                    obj.c.k = [
                        targetLottieColor[0],
                        targetLottieColor[1],
                        targetLottieColor[2],
                    ];
                    if (sourceLottieColor.length === 4) {
                        obj.c.k.push(targetLottieColor[3] ? targetLottieColor[3] : 1);
                    }
                }
            }
        }
        else {
            for (var key in obj) {
                if (typeof obj[key] === 'object') {
                    doReplace(sourceLottieColor, targetLottieColor, obj[key]);
                }
            }
        }
        return obj;
    }
    return doReplace(genSourceLottieColor, genTargetLottieColor, immutable ? (0, lodash_clonedeep_1.default)(lottieObj) : lottieObj);
};
exports.replaceColor = replaceColor;
var flatten = function (targetColor, lottieObj, immutable) {
    if (immutable === void 0) { immutable = true; }
    var genTargetLottieColor = convertColorToLottieColor(targetColor);
    if (!genTargetLottieColor) {
        throw new Error('Proper colors must be used for target');
    }
    function doFlatten(targetLottieColor, obj) {
        if (obj.s && Array.isArray(obj.s) && obj.s.length === 4) {
            obj.s = __spreadArray(__spreadArray([], targetLottieColor, true), [1], false);
        }
        else if (obj.c && obj.c.k) {
            if (Array.isArray(obj.c.k) && typeof obj.c.k[0] !== 'number') {
                doFlatten(targetLottieColor, obj.c.k);
            }
            else {
                obj.c.k = targetLottieColor;
            }
        }
        else {
            for (var key in obj) {
                if (typeof obj[key] === 'object') {
                    doFlatten(targetLottieColor, obj[key]);
                }
            }
        }
        return obj;
    }
    return doFlatten(genTargetLottieColor, immutable ? (0, lodash_clonedeep_1.default)(lottieObj) : lottieObj);
};
exports.flatten = flatten;
var modifyColors = function (colorsArray, lottieObj) {
    var i = 0;
    function doModify(colors, obj) {
        if (obj.s && Array.isArray(obj.s) && obj.s.length === 4) {
            if (colors[i]) {
                obj.s = __spreadArray(__spreadArray([], colors[i], true), [1], false);
            }
            i++;
        }
        else if (obj.c && obj.c.k) {
            if (Array.isArray(obj.c.k) && typeof obj.c.k[0] !== 'number') {
                doModify(colors, obj.c.k);
            }
            else {
                if (colors[i]) {
                    obj.c.k = colors[i];
                }
                i++;
            }
        }
        for (var key in obj) {
            if (typeof obj[key] === 'object') {
                doModify(colors, obj[key]);
            }
        }
        return obj;
    }
    return doModify(colorsArray, lottieObj);
};
var convertLottieColorToRgb = function (lottieColor) {
    return [Math.round(lottieColor[0] * 255), Math.round(lottieColor[1] * 255), Math.round(lottieColor[2] * 255)];
};
var convertLottieColorToRgba = function (lottieColor) {
    return [
        Math.round(lottieColor[0] * 255),
        Math.round(lottieColor[1] * 255),
        Math.round(lottieColor[2] * 255),
        lottieColor[3],
    ];
};
var getColors = function (lottieObj) {
    var res = [];
    function doGet(obj) {
        if (obj.s && Array.isArray(obj.s) && obj.s.length === 4) {
            if (obj.s[3] !== 1) {
                res.push(convertLottieColorToRgba(obj.s));
            }
            else {
                res.push(convertLottieColorToRgb(obj.s));
            }
        }
        else if (obj.c && obj.c.k) {
            if (Array.isArray(obj.c.k) && typeof obj.c.k[0] !== 'number') {
                doGet(obj.c.k);
            }
            else {
                if (obj.c.k.length === 4 && obj.c.k[3] !== 1) {
                    res.push(convertLottieColorToRgba(obj.c.k));
                }
                else {
                    res.push(convertLottieColorToRgb(obj.c.k));
                }
            }
        }
        else {
            for (var key in obj) {
                if (typeof obj[key] === 'object') {
                    doGet(obj[key]);
                }
            }
        }
        return res;
    }
    doGet(lottieObj);
    return res;
};
exports.getColors = getColors;
