import * as tf from '@tensorflow/tfjs-node'

describe('work', () => {
  it('tf.tensor', () => {
    const a = tf.tensor([
      [1, 2],
      [3, 4],
    ])

    const b = tf.tensor([
      [
        [1, 2],
        [3, 4],
      ],
      [
        [5, 6],
        [7, 8],
      ],
    ])

    a.mul(b).print()

    a.pow(a).print()
  })
})
