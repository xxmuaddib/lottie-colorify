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

```shell
import Lottie from 'lottie-web';
import colorify from 'lottie-colorify';
import SomeAnimation from './SomeAnimation.json'

const animation = Lottie.loadAnimation({
  container: container.current,
  animationData: colorify(['#ef32d0', [50, 100, 200], '#fe0088'], SomeAnimation),
});
```

## Colorify function

colorify takes 2 arguments:

1. colors array (a color can be hex with and without # or an array of RGB values)
2. Lottie animation
