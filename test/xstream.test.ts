import xs from 'xstream'
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
