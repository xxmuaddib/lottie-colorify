import {expect, describe, it} from '@jest/globals'

import { getFixedAnimateLottie } from '../src/index';

const LottieJsonWithProblematicBackground = {
    v: '5.9.0',
    fr: 24,
    ip: 0,
    op: 28,
    w: 64,
    h: 64,
    nm: 'test-icon',
    ddd: 0,
    assets: [],
    layers: [
        {
            ddd: 0,
            ind: 1,
            ty: 4,
            nm: 'background-layer',
            sr: 1,
            ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [32, 32, 0], ix: 2, l: 2 },
                a: { a: 0, k: [32, 32, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
                {
                    ty: 'gr',
                    it: [
                        {
                            ty: 'rc',
                            p: { k: [0, 0] },
                            s: { k: [64, 64] },
                        },
                        {
                            ty: 'fl',
                            c: { k: [1, 1, 1, 1] },
                        },
                    ],
                },
            ],
            ip: 0,
            op: 29,
            st: 0,
            bm: 0,
        },
        {
            ddd: 0,
            ind: 2,
            ty: 4,
            nm: 'content-layer',
            sr: 1,
            ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [32, 32, 0], ix: 2, l: 2 },
                a: { a: 0, k: [32, 32, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
                {
                    ty: 'gr',
                    it: [
                        {
                            ty: 'sh',
                            ks: {
                                k: {
                                    i: [
                                        [0, 0],
                                        [0, 0],
                                    ],
                                    o: [
                                        [0, 0],
                                        [0, 0],
                                    ],
                                    v: [
                                        [10, 10],
                                        [20, 20],
                                    ],
                                    c: false,
                                },
                            },
                        },
                        {
                            ty: 'st',
                            c: { k: [0, 0, 0, 1] },
                        },
                    ],
                },
            ],
            ip: 0,
            op: 29,
            st: 0,
            bm: 0,
        },
    ],
    markers: [],
};

const LottieJsonWithLargerBackground = {
    v: '5.9.0',
    fr: 24,
    ip: 0,
    op: 28,
    w: 128,
    h: 128,
    nm: 'test-icon-large',
    ddd: 0,
    assets: [],
    layers: [
        {
            ddd: 0,
            ind: 1,
            ty: 4,
            nm: 'large-background',
            sr: 1,
            ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [64, 64, 0], ix: 2, l: 2 },
                a: { a: 0, k: [64, 64, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
                {
                    ty: 'gr',
                    it: [
                        {
                            ty: 'rc',
                            p: { k: [0, 0] },
                            s: { k: [65.5, 64] },
                        },
                        {
                            ty: 'fl',
                            c: { k: [1, 1, 1, 1] },
                        },
                    ],
                },
            ],
            ip: 0,
            op: 29,
            st: 0,
            bm: 0,
        },
    ],
    markers: [],
};

const LottieJsonWithValidContent = {
    v: '5.9.0',
    fr: 24,
    ip: 0,
    op: 28,
    w: 50,
    h: 50,
    nm: 'valid-icon',
    ddd: 0,
    assets: [],
    layers: [
        {
            ddd: 0,
            ind: 1,
            ty: 4,
            nm: 'icon-content',
            sr: 1,
            ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [25, 25, 0], ix: 2, l: 2 },
                a: { a: 0, k: [25, 25, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            shapes: [
                {
                    ty: 'gr',
                    it: [
                        {
                            ty: 'sh',
                            ks: {
                                k: {
                                    i: [
                                        [0, -7.732],
                                        [0, 0],
                                        [0, 12.691],
                                        [-7.732, 0],
                                    ],
                                    o: [
                                        [0, 12.417],
                                        [0, 0],
                                        [0, -7.732],
                                        [7.732, 0],
                                    ],
                                    v: [
                                        [14, -7],
                                        [0, 21],
                                        [-14, -7],
                                        [0, -21],
                                    ],
                                    c: true,
                                },
                            },
                        },
                        {
                            ty: 'fl',
                            c: { k: [0, 0.5, 1, 1] },
                        },
                    ],
                },
            ],
            ip: 0,
            op: 29,
            st: 0,
            bm: 0,
        },
    ],
    markers: [],
};

describe('getFixedAnimateLottie', () => {
    it('should remove layer with problematic white background rectangle', () => {
        const result = getFixedAnimateLottie(LottieJsonWithProblematicBackground);

        expect(result.layers).toHaveLength(1);
        expect(result.layers[0].nm).toBe('content-layer');

        const removedLayer = LottieJsonWithProblematicBackground.layers.find(
            (layer) => layer.nm === 'background-layer',
        );
        expect(removedLayer).toBeDefined();

        const resultHasBackgroundLayer = result.layers.some(
            (layer: any) => layer.nm === 'background-layer',
        );
        expect(resultHasBackgroundLayer).toBe(false);
    });

    it('should remove layer with larger background rectangle (>=64x64)', () => {
        const result = getFixedAnimateLottie(LottieJsonWithLargerBackground);

        expect(result.layers).toHaveLength(0);
    });

    it('should preserve layers with valid content', () => {
        const result = getFixedAnimateLottie(LottieJsonWithValidContent);

        expect(result.layers).toHaveLength(1);
        expect(result.layers[0].nm).toBe('icon-content');
    });

    it('should handle invalid input gracefully', () => {
        expect(getFixedAnimateLottie(null)).toBeNull();
        expect(() => getFixedAnimateLottie(undefined)).not.toThrow();
        expect(getFixedAnimateLottie('invalid')).toBe('invalid');
        expect(getFixedAnimateLottie({})).toEqual({});
    });
});
