export function timeDelta(a, b) {
  return new Date(b.head.date) - new Date(a.head.date)
}
