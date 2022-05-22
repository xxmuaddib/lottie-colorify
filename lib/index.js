"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColors = exports.flatten = exports.replaceColor = exports.colorify = void 0;
var lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
exports.colorify = function (destColors, lottieObj, immutable) {
    if (destColors === void 0) { destColors = []; }
    if (immutable === void 0) { immutable = true; }
    var modifiedColors = [];
    for (var _i = 0, destColors_1 = destColors; _i < destColors_1.length; _i++) {
        var color = destColors_1[_i];
        modifiedColors.push(convertColorToLottieColor(color));
    }
    var newLottie = modifyColors(modifiedColors, immutable ? lodash_clonedeep_1.default(lottieObj) : lottieObj);
    return newLottie;
};
var convertColorToLottieColor = function (color) {
    if (typeof color === 'string' && color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
        if (!result) {
            throw new Error('Color can be only hex or rgb array (ex. [10,20,30])');
        }
        return [
            Math.round((parseInt(result[1], 16) / 255) * 1000) / 1000,
            Math.round((parseInt(result[2], 16) / 255) * 1000) / 1000,
            Math.round((parseInt(result[3], 16) / 255) * 1000) / 1000,
        ];
    }
    else if (typeof color === 'object' && color.length === 3 && color.every(function (item) { return item >= 0 && item <= 255; })) {
        return [
            Math.round((color[0] / 255) * 1000) / 1000,
            Math.round((color[1] / 255) * 1000) / 1000,
            Math.round((color[2] / 255) * 1000) / 1000,
        ];
    }
    else if (!color) {
        return undefined;
    }
    else {
        throw new Error('Color can be only hex or rgb array (ex. [10,20,30])');
    }
};
var round = function (n) { return (Math.round(n * 1000) / 1000); };
exports.replaceColor = function (sourceColor, targetColor, lottieObj, immutable) {
    if (immutable === void 0) { immutable = true; }
    var genSourceLottieColor = convertColorToLottieColor(sourceColor);
    var genTargetLottieColor = convertColorToLottieColor(targetColor);
    if (!genSourceLottieColor || !genTargetLottieColor) {
        throw new Error('Proper colors must be used for both source and target');
    }
    function doReplace(sourceLottieColor, targetLottieColor, obj) {
        if (obj.s && Array.isArray(obj.s) && obj.s.length === 4) {
            if (sourceLottieColor[0] === obj.s[0] && sourceLottieColor[1] === obj.s[1] && sourceLottieColor[2] === obj.s[2]) {
                obj.s = __spreadArrays(targetLottieColor, [1]);
            }
        }
        else if (obj.c && obj.c.k) { // Object => C-Solid Color => K-Kolors[]
            if (Array.isArray(obj.c.k) && typeof obj.c.k[0] !== 'number') {
                doReplace(sourceLottieColor, targetLottieColor, obj.c.k);
            }
            else if (Math.abs(sourceLottieColor[0] - round(obj.c.k[0])) < 0.003 &&
                Math.abs(sourceLottieColor[1] - round(obj.c.k[1])) < 0.003 &&
                Math.abs(sourceLottieColor[2] - round(obj.c.k[2])) < 0.003) {
                obj.c.k = targetLottieColor;
            }
        }
        else if (obj.g && obj.g.k && obj.g.k.k && obj.g.k.k.length % 4 === 0) { // Object => G-Gradient => K-Something => K-Kolors[]
            for (var i = 0; i < obj.g.k.k.length; i += 4) {
                if (Math.abs(round(sourceLottieColor[0]) - round(obj.g.k.k[i + 1])) < 0.003 &&
                    Math.abs(round(sourceLottieColor[1]) - round(obj.g.k.k[i + 2])) < 0.003 &&
                    Math.abs(round(sourceLottieColor[2]) - round(obj.g.k.k[i + 3])) < 0.003) {
                    obj.g.k.k[i + 1] = targetLottieColor[0];
                    obj.g.k.k[i + 2] = targetLottieColor[1];
                    obj.g.k.k[i + 3] = targetLottieColor[2];
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
    return doReplace(genSourceLottieColor, genTargetLottieColor, immutable ? lodash_clonedeep_1.default(lottieObj) : lottieObj);
};
exports.flatten = function (targetColor, lottieObj, immutable) {
    if (immutable === void 0) { immutable = true; }
    var genTargetLottieColor = convertColorToLottieColor(targetColor);
    if (!genTargetLottieColor) {
        throw new Error('Proper colors must be used for target');
    }
    function doFlatten(targetLottieColor, obj) {
        if (obj.s && Array.isArray(obj.s) && obj.s.length === 4) {
            obj.s = __spreadArrays(targetLottieColor, [1]);
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
    return doFlatten(genTargetLottieColor, immutable ? lodash_clonedeep_1.default(lottieObj) : lottieObj);
};
var modifyColors = function (colorsArray, lottieObj) {
    var i = 0;
    function doModify(colors, obj) {
        if (obj.s && Array.isArray(obj.s) && obj.s.length === 4) {
            if (colors[i]) {
                obj.s = __spreadArrays(colors[i], [1]);
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
exports.getColors = function (lottieObj) {
    var res = [];
    function doGet(obj) {
        if (obj.g && obj.g.k && obj.g.k.k && Array.isArray(obj.g.k.k) && obj.g.k.k.length % 4 === 0) {
            if (Array.isArray(obj.g.k.k) && typeof obj.g.k.k[0] !== 'number') {
                doGet(obj.g.k.k);
            }
            var tmpColors = __spreadArrays(obj.g.k.k);
            while (tmpColors.length) {
                var color = __spreadArrays(tmpColors.splice(1, 3), [
                    tmpColors.shift()
                ]);
                res.push(convertLottieColorToRgba(color));
            }
        }
        else if (obj.s && Array.isArray(obj.s) && obj.s.length === 4) {
            res.push(convertLottieColorToRgba(obj.s));
        }
        else if (obj.c && obj.c.k) {
            if (Array.isArray(obj.c.k) && typeof obj.c.k[0] !== 'number') {
                doGet(obj.c.k);
            }
            else {
                res.push(convertLottieColorToRgb(obj.c.k));
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
