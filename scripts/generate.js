const fs = require('fs')

const L = require('partial.lenses')

const liftExplicitly = Object.assign(Object.create(null), {
  append: 0,
  children: 0,
  complement: 0,
  concatAs: 1,
  elems: 0,
  elemsTotal: 0,
  entries: 0,
  flatten: 0,
  foldl: 1,
  foldr: 1,
  forEachWith: 1,
  identity: 0,
  indexed: 0,
  joinAs: 1,
  keyed: 0,
  keys: 0,
  keysEverywhere: 0,
  last: 0,
  leafs: 0,
  multikeyed: 0,
  negate: 0,
  optional: 0,
  querystring: 0,
  removeOp: 0,
  reverse: 0,
  singleton: 0,
  traverse: 1,
  uri: 0,
  uriComponent: 0,
  values: 0,
  zero: 0
})

const doLift = name => liftExplicitly[name] === 1
const dontLift = name => liftExplicitly[name] === 0

fs.writeFileSync(
  'src/kefir.partial.lenses.js',
  `// THIS FILE IS GENERATED

import * as L from 'partial.lenses'
import * as K from 'karet.lift'

${Object.entries(L)
    .sort()
    .map(([name, value]) => {
      if (doLift(name) || (typeof value === 'function' && value.length < 4)) {
        return `export const ${name} = K.lift(L.${name})`
      } else if (dontLift(name) || typeof value !== 'function') {
        return `export {${name}} from 'partial.lenses'`
      } else {
        throw Error(`Lifting of '${name}' must be specified explicitly.`)
      }
    })
    .join('\n')}
`
)
