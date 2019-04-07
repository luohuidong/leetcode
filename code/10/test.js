import foo from '.'

test('aa', () => {
  expect(foo('aa', 'a*')).toBe(true)
})

test('ab', () => {
  expect(foo('ab', '.*')).toBe(true)
})

test('ab', () => {
  expect(foo('', '')).toBe(true)
})

test('ab', () => {
  expect(foo('abc', '')).toBe(false)
})