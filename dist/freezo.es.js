var isObject = function (val) {
  return (
    typeof val === 'object' &&
    val.constructor === Object &&
    Object.getPrototypeOf(val) === Object.prototype
  )
};

var isValidType = function (val) {
  return val && (Array.isArray(val) || isObject(val))
};

var map = function (val, iter) {
  if (Array.isArray(val)) {
    return val.forEach(function (val, index) { return iter(index, val); })
  }

  var keys = Object.keys(val);

  keys.forEach(function (key) {
    iter(key, val[key]);
  });
};

var freeze = function freeze (val) {
  map(val, function (key, prop) {
    if (isValidType(prop)) {
      freeze(prop);
    }
  });
  Object.freeze(val);
  return val
};

var thaw = function thaw (val) {
  if (!isValidType(val) || !Object.isFrozen(val)) {
    return val
  }

  var newVal = Array.isArray(val) ? new Array(val.length) : {};

  map(val, function (key, prop) {
    newVal[key] = thaw(prop);
  });

  return newVal
};

var index = {
  freeze: freeze,
  thaw: thaw
};

export default index;
