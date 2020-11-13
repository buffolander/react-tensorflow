# React-Tensorflow

[![github-watch-badge]][github-watch]
[![github-star-badge]][github-star]
[![twitter-badge]][twitter]
![Typed with TypeScript][typescript]
[![codecov](https://codecov.io/gh/joshuaellis/react-tensorflow/branch/master/graph/badge.svg)](https://codecov.io/gh/joshuaellis/react-tensorflow)

> A library of React hooks and HOCs written in Typescript to use Tensorflow models in your application! 🤖🧠

## Installation

```sh
yarn add react-tensorflow
```

```sh
npm i react-tensorflow -S
```

### Peer dependencies

- [react](https://www.npmjs.com/package/react) >=16.8.0
- [@tensorflow/tfjs](https://www.npmjs.com/package/@tensorflow/tfjs) >=2.0.0

## Basic usage

```js
import { useModel } from 'react-tensorflow'

const MyModelComponent = () => {
  const model = useModel(`${PATH_TO_MODEL}`)

  // ...do something with the model

  return null
}
```

## API

### useModel

```js
useModel(url?: string, opts?: { layers: boolean }): GraphModel | LayersModel | null
```

If url is omitted useModel will look to find the ModelProvider as it's context for returning the model. When loading a model with this hook, the `opts.layers` boolean is passed if your TF model should be loaded with the function `tf.loadLayersModel` otherwise it is assumed the model should be loaded with `tf.loadGraphModel`.

### ModelProvider

```js
<ModelProvider url={string} layers={boolean}>
  <App />
</ModelProvider>
```

Wraps the children in a React Provider to be consumed by Context's in either the `useModel` hook or `withModel` HOC. The props passed to this provider are the same as the documented props for `useModel`.

### withModel

```js
withModel(Component: React.ComponentType): JSX.Element
```

Wraps the provided component in a React Context, passing the model give to the provider as a prop.

## Roadmap

So far there is only one hook to include the model in your react-app. As this library goes the plan would be to add more specific hooks to use with specific models e.g `usePredicition` as well as other helper hooks such as `useWebcam`.

- [x] useModel as hook and HOX
- [ ] useWebcam
- [ ] usePrediction
- [ ] useClassifier
- [ ] useObjects
- [ ] usePoses

Suggestions should be made through the issues tab.

[typescript]: https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555
[github-watch-badge]: https://img.shields.io/github/watchers/joshuaellis/react-tensorflow.svg?style=social
[github-watch]: https://github.com/joshuaellis/react-tensorflow/watchers
[github-star-badge]: https://img.shields.io/github/stars/joshuaellis/react-tensorflow.svg?style=social
[github-star]: https://github.com/joshuaellis/react-tensorflow/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20react-tensorflow%20by%20@Josh%20Ellis%20https://github.com/joshuaellis/react-tensorflow%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/kentcdodds/testing-workshop.svg?style=social
