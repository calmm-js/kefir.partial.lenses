const fs = require('fs')

const L = require('partial.lenses')

fs.writeFileSync(
  'src/kefir.partial.lenses.js',
  `// THIS FILE IS GENERATED

import * as L from 'partial.lenses'
import * as K from 'karet.lift'

${Object.keys(L)
    .sort()
    .map(name => `export const ${name} = K.lift(L.${name})`)
    .join('\n')}
`
)
