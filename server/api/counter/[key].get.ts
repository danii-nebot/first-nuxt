// persisted in DB
let counter:Map<string, number> = new Map()
// JS Node
export default defineEventHandler((event) => {
  const key = event.context.params.key
  let current = counter.get(key) || 0
  counter.set(key, ++current)

  return {
    counter: counter.get(key)
  }
})