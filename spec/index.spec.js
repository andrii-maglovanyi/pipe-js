const pipe = require('./../src')

const hello = 'hello'
const capitalize = str => str[0].toUpperCase() + str.substring(1)

describe('pipe', () => {
  it('should perform simple function call with given argument', () => {
    const result = pipe(hello).through(capitalize)
    expect(result).toBe('Hello')
  })

  it('should process prototype method call', () => {
    const result = pipe(hello).through([String.prototype.concat, ' world'])
    expect(result).toBe('hello world')
  })
})
