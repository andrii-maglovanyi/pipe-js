const pipe = Object.create(null)

const invoke = (arg, val) =>
  Array.isArray(arg) ?
    arg.shift().apply(val, arg) :
    arg(val)

module.exports = value => {
  pipe.through = (...funcs) =>
    funcs.reduce((val, fn) => invoke(fn, val), value)

  return pipe
}
