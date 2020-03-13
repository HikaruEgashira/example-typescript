import xs from 'xstream'
jest.setTimeout(10000)

const noop = () => {}

describe('stream', () => {
  it('works', async () => {
    const stream = xs
      .periodic(500)
      .filter(i => i % 2 === 0)
      .map(i => i * i)
      .endWhen(xs.periodic(5000).take(1))
      .debug(console.log)

    await new Promise(done => {
      stream.addListener({
        next: noop,
        error: console.error,
        complete: done,
      })
    })
  })

  it('jest special', done => {
    const stream = xs
      .periodic(500)
      .filter(i => i % 2 === 0)
      .map(i => i * i)
      .endWhen(xs.periodic(5000).take(1))
      .debug(console.log)

    stream.addListener({
      next: noop,
      error: done,
      complete: done,
    })
  })
})
