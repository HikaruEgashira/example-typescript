import xs from 'xstream'

const stream = xs
  .periodic(500)
  .filter(i => i % 2 === 0)
  .map(i => i * i)
  .endWhen(xs.periodic(5000).take(1))
  .debug(console.log)

export const mapFilterTake = async () => {
  await new Promise(done => {
    stream.addListener({
      next: void 0,
      error: console.error,
      complete: done,
    })
  })
}
