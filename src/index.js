const pipe = Object.create(null)

const invoke = (arg, val) =>
  Array.isArray(arg) ?
    arg.shift().apply(val, arg) :
    arg(val)

module.exports = value => {
  const funcs = []
  
  pipe.through = (...funcs) =>
    funcs.reduce((val, fn) => invoke(fn, val), value)

  pipe.add = fn => {
    funcs.push(fn)
    return pipe
  }

  pipe.run = () => pipe.through(...funcs)

  return pipe
}
