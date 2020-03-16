import xs, { Stream } from 'xstream'
jest.setTimeout(10000)

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
        next: void 0,
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
      next: void 0,
      error: done,
      complete: done,
    })
  })
})

describe('marge', () => {
  it('number[]', done => {
    const stream1$ = xs.of(1, 2, 3, 4, 5)
    const stream2$ = xs.of(10, 11, 12, 13, 14)
    const master$ = Stream.merge(stream1$, stream2$).debug(console.log)

    master$.addListener({
      next: console.log,
      error: done,
      complete: done,
    })
  })
})
