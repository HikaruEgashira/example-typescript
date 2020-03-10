import { mapFilterTake } from '../src'

jest.setTimeout(10000)

describe('blah', () => {
  it('works', async () => {
    await mapFilterTake()
    expect(1).toEqual(1)
  })
})
