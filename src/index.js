import { map, isValidType } from './utils'
const freeze = function freeze (val) {
  map(val, (key, prop) => {
    if (isValidType(prop)) {
      freeze(prop)
    }
  })
  Object.freeze(val)
  return val
}

const thaw = function thaw (val) {
  if (!isValidType(val) || !Object.isFrozen(val)) {
    return val
  }

  const newVal = Array.isArray(val) ? new Array(val.length) : {}

  map(val, (key, prop) => {
    newVal[key] = thaw(prop)
  })

  return newVal
}

export default {
  freeze,
  thaw
}
