export function add(number) {
  const label = `+${number}`
  const f = x => y => y + x

  return { label, func: f(number) }
}

export function sub(number) {
  const label = `-${number}`
  const f = x => y => y - x

  return { label, func: f(number) }
}

export function mul(number) {
  const label = `×${number}`
  const f = x => y => y * x

  return { label, func: f(number) }
}

export function neg(number) {
  const label = 'NEG'
  const f = () => x => 0 - x

  return { label, func: f(number) }
}

export default [add, sub, mul, neg]
