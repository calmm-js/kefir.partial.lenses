const fs = require('fs')

const L = require('partial.lenses')

fs.writeFileSync(
  'src/kefir.partial.lenses.js',
  `// THIS FILE IS GENERATED

import * as L from 'partial.lenses'
import {liftFOF} from 'kefir.combines'

${Object.keys(L)
    .sort()
    .map(name => `export const ${name} = liftFOF(L.${name})`)
    .join('\n')}
`
)
