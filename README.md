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
```shell
import Lottie from 'lottie-web';
import { colorify } from 'lottie-colorify';
import SomeAnimation from './SomeAnimation.json';

const animation = Lottie.loadAnimation({
  container: container.current,
  animationData: colorify(['#ef32d0', [50, 100, 200], '#fe0088'], SomeAnimation),
});
```
To see the current colors of a Lottie JSON, you can use getColors function:
```shell
import Lottie from 'lottie-web';
import { getColors } from 'lottie-colorify';
import SomeAnimation from './SomeAnimation.json';

console.log(getColors(SomeAnimation));
```

## Colorify function

colorify takes 2 arguments:

1. colors array (a color can be hex with and without #, an array of RGB values or undefined for using original color in the animation).
2. Lottie animation