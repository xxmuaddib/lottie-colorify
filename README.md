# lottie-colorify

## Note
> I am sorry for leaving this package for a while. currently I am actively maintaining it, so will be happy to review your PRs and merge.
> Also, I will be doing a heavy refactor of the package in the coming 2 months. So if you have any ideas, feel free to write them up in the issues.

Change colors of your lottie animations easily from code.

## Installation

using npm

```shell
npm install lottie-colorify
```

using yarn

```shell
yarn add lottie-colorify
```

## Usage

To change colors of a Lottie JSON:

```jsx static
import Lottie from 'lottie-web';
import { colorify } from 'lottie-colorify';
import SomeAnimation from './SomeAnimation.json';

const animation = Lottie.loadAnimation({
  container: container.current,
  animationData: colorify(['#ef32d0', [50, 100, 200], '#fe0088'], SomeAnimation),
});
```

To replace a single color of a Lottie JSON:

```jsx static
import Lottie from 'lottie-web';
import { replaceColor } from 'lottie-colorify';
import SomeAnimation from './SomeAnimation.json';

const animation = Lottie.loadAnimation({
  container: container.current,
  animationData: replaceColor('#ef32d0', '#fe0088', SomeAnimation),
});
```

To replace multiple colors of a Lottie JSON:

```jsx static
import Lottie from 'lottie-web';
import { replaceColors } from 'lottie-colorify';
import SomeAnimation from './SomeAnimation.json';

const animation = Lottie.loadAnimation({
  container: container.current,
  animationData: replaceColors(
    [
      ['#ff0071', '#cccccc'],
      ['#f6f6f6', '#000000'],
    ],
    LoadingAnimation,
  ),
});
```

To flatten a Lottie JSON and use only one color:

```jsx static
import Lottie from 'lottie-web';
import { flatten } from 'lottie-colorify';
import SomeAnimation from './SomeAnimation.json';

const animation = Lottie.loadAnimation({
  container: container.current,
  animationData: flatten('#fe0088', SomeAnimation),
});
```

To see the current colors of a Lottie JSON, you can use getColors function:

```jsx static
import Lottie from 'lottie-web';
import { getColors } from 'lottie-colorify';
import SomeAnimation from './SomeAnimation.json';

console.log(getColors(SomeAnimation));
```

## colorify function

colorify takes 2 arguments:

1. colors array (a color can be hex with and without #, an array of RGB values or undefined for using original color in the animation).
2. Lottie animation

## replaceColor function

replaceColor takes 3 arguments

1. source color (the color to look for in a Lottie JSON)
2. target color (the replacement color)
3. Lottie animation

## replaceColors function

replaceColors takes 2 arguments

1. an array of elements containing a `[sourceColor, targetColor]` pair
2. Lottie animation

## flatten function

flatten takes 2 arguments

1. target color (the replacement color)
2. Lottie animation

## getFixedAnimateLottie function

If you encounter issues with coloring animations that have a solid white or black background covering the entire animation, use the `getFixedAnimateLottie` function first to remove problematic background layers.

Some Lottie files are exported with unnecessary white or black rectangle backgrounds (usually 64x64 pixels or larger) that cover the entire animation area. These background layers interfere with color replacement functions, resulting in animations with unwanted colored rectangles.

```jsx static
import Lottie from 'lottie-web';
import { getFixedAnimateLottie, colorify } from 'lottie-colorify';
import SomeAnimation from './SomeAnimation.json';

// First remove problematic background layers, then apply colors
const cleanedAnimation = getFixedAnimateLottie(SomeAnimation);
const animation = Lottie.loadAnimation({
  container: container.current,
  animationData: colorify(['#ef32d0', '#fe0088'], cleanedAnimation),
});
```

**Note:** This function specifically targets rectangle shapes at position (0,0) with dimensions ≥64x64 pixels that have pure white fills (RGB: 1,1,1,1). It safely preserves all other layers and content in your animation.
