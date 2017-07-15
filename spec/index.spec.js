const pipe = require('./../src')

const hello = 'hello'
const duplicate = str => `${str}-${str}`

describe('pipe', () => {
  it('should process', () => {
    const result = pipe(hello).through(duplicate)

    expect(result).toBe('hello-hello')
  })
})
