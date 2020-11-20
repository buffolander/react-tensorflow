import * as tf from '@tensorflow/tfjs'
import { renderHook } from '@testing-library/react-hooks'

import usePrediction from '../usePrediction'

describe('usePrediction', () => {
  it('should return null and print an error if there is no model available', async () => {
    const { result } = renderHook(() => usePrediction())

    expect(result.current[1]).toBe(null)
  })

  it('should return a prediction if given a tensor', async () => {
    const expected = tf.tensor([1, 2, 3, 4])

    const { result, waitForNextUpdate } = renderHook(() => {
      const arr = usePrediction({
        modelUrl:
          'https://tfhub.dev/google/tfjs-model/imagenet/inception_v3/classification/3/default/1'
      })

      arr[0].current = expected

      return arr
    })

    await waitForNextUpdate()

    expect(result.current[1]).toBe(expected.dataSync())
  })

  it('should use .predict if a predict boolean is passed', async () => {
    const mockExecute = jest.fn().mockImplementation(v => v)

    const expected = tf.tensor([1, 2, 3, 4])
    const promise = new Promise(resolve =>
      resolve({
        execute: mockExecute
      })
    )

    const { waitForNextUpdate } = renderHook(() => {
      const arr = usePrediction({
        model: {
          load: async () => await promise
        },
        useExecute: true,
        outputName: 'test'
      })
      arr[0].current = expected
      return arr
    })

    await waitForNextUpdate()
    expect(mockExecute).toHaveBeenCalled()
  })
})
