/* global describe, test, expect */

import { add, sub, mul, neg } from '../Operators'

describe('Operators', () => {
  test('Add', () => {
    const add3 = add(3)

    expect(add3.label).toBe('+3')
    expect(typeof add3.func).toBe('function')
    expect(add3.func(4)).toBe(7)
  })

  test('Sub', () => {
    const sub6 = sub(6)

    expect(sub6.label).toBe('-6')
    expect(typeof sub6.func).toBe('function')
    expect(sub6.func(10)).toBe(4)
  })

  test('Mul', () => {
    const mul4 = mul(4)

    expect(mul4.label).toBe('×4')
    expect(typeof mul4.func).toBe('function')
    expect(mul4.func(10)).toBe(40)
  })

  test('Neg', () => {
    const neg1 = neg(1)

    expect(neg1.label).toBe('NEG')
    expect(typeof neg1.func).toBe('function')
    expect(neg1.func(10)).toBe(-10)
    expect(neg1.func(-10)).toBe(10)
  })
})
