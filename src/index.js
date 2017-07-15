const pipe = Object.create(null)

module.exports = value => {
  pipe.through = (...funcs) =>
    funcs.reduce((val, fn) => fn(val), value)

  return pipe
}
