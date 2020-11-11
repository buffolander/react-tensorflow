import * as React from 'react'

import { ReactTensorFlow } from 'types/index'

import { ModelCtx } from './ModelProvider'

interface WithModelProps {
  model: ReactTensorFlow.ModelContextInterface
}

const withModel = <T extends WithModelProps = WithModelProps>(
  Component: React.ComponentType<T>
) => {
  const ComponentWithModel = (props: Omit<T, keyof WithModelProps>) => (
    <ModelCtx.Consumer>
      {model => <Component {...(props as T)} model={model} />}
    </ModelCtx.Consumer>
  )

  ComponentWithModel.displayName = `withModel(${Component.displayName ||
    Component.name ||
    'Component'})`

  return ComponentWithModel
}

export default withModel
