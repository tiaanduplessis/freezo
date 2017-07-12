const isObject = function (val) {
  return (
    typeof val === 'object' &&
    val.constructor === Object &&
    Object.getPrototypeOf(val) === Object.prototype
  )
}

const isValidType = function (val) {
  return val && (Array.isArray(val) || isObject(val))
}

const map = function (val, iter) {
  if (Array.isArray(val)) {
    return val.forEach((val, index) => iter(index, val))
  }

  const keys = Object.keys(val)

  keys.forEach(key => {
    iter(key, val[key])
  })
}

export { isValidType, map }
