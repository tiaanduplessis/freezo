import freezo from '../src'

test('should export a freeze and thaw function', () => {
  expect(freezo).toBeDefined()
  expect(freezo.freeze).toBeDefined()
  expect(freezo.thaw).toBeDefined()
})

test('should freeze and thaw an object', () => {
  const { freeze, thaw } = freezo
  const frozenObj = freeze({ foo: 1, bar: 2, baz: { foo: 1, bar: 2 } })
  expect(Object.isFrozen(frozenObj)).toBeTruthy()
  expect(Object.isFrozen(frozenObj.baz)).toBeTruthy()
  expect(Object.isFrozen(thaw(frozenObj))).toBeFalsy()
})

test('should freeze and thaw an array', () => {
  const { freeze, thaw } = freezo
  const frozenArr = freeze([1, 2, 3, { foo: 1, bar: 2 }, 5])
  expect(Object.isFrozen(frozenArr)).toBeTruthy()
  expect(Object.isFrozen(frozenArr[3])).toBeTruthy()
  expect(Object.isFrozen(thaw(frozenArr))).toBeFalsy()
})
