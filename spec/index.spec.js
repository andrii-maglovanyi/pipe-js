const pipe = require('./../src')

const hello = 'hello'
const capitalize = str => str[0].toUpperCase() + str.substring(1)
const duplicate = str => `${str}-${str}`
const exclaim = str => str + '!'

describe('pipe', () => {
  it('should perform simple function call with given argument', () => {
    const result = pipe(hello).through(capitalize)
    expect(result).toBe('Hello')
  })

  it('should process prototype method call', () => {
    const result = pipe(hello).through([String.prototype.concat, ' world'])
    expect(result).toBe('hello world')
  })

  it('should process sequence of function calls with given argument', () => {
    const result = pipe(hello).through(
      duplicate,
      capitalize,
      [String.prototype.concat, ' world'],
      exclaim)
    expect(result).toBe('Hello-hello world!')
  })

  it('should collect functions in the queue for a pending call', () => {
    const p = pipe(hello).add(exclaim)
    p.add(exclaim).add(capitalize)

    expect(p.add(exclaim).run()).toBe('Hello!!!')
  })
})
