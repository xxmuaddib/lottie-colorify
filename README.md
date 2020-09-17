# lottie-colorify

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

## flatten function

flatten takes 2 arguments

1. target color (the replacement color)
2. Lottie animation
