import {Observable, constant as C} from 'kefir'

import * as R from 'ramda'

import * as L from '../dist/kefir.partial.lenses.cjs'

function show(x) {
  switch (typeof x) {
    case 'string':
    case 'object':
      return JSON.stringify(x)
    default:
      return `${x}`
  }
}

const toExpr = f =>
  f
    .toString()
    .replace(/\s+/g, ' ')
    .replace(/^\s*function\s*\(\s*\)\s*{\s*(return\s*)?/, '')
    .replace(/\s*;?\s*}\s*$/, '')
    .replace(/function\s*(\([a-zA-Z]*\))\s*/g, '$1 => ')
    .replace(/{\s*return\s*([^{;]+)\s*;\s*}/g, '$1')
    .replace(/\(0, _kefir.constant\)/g, 'C')

const testEq = (expect, thunk) =>
  it(`${toExpr(thunk)} => ${show(expect)}`, done => {
    const actual = thunk()
    function check(actual) {
      if (!R.equals(actual, expect))
        throw new Error(`Expected: ${show(expect)}, actual: ${show(actual)}`)
      done()
    }
    if (actual instanceof Observable) {
      actual.take(1).onValue(check)
    } else {
      check(actual)
    }
  })

describe('Lifted Partial Lenses', () => {
  testEq(2, () => L.get('x')(C({x: 2})))
  testEq(2, () => L.get('x', C({x: 2})))
  testEq(2, () => L.get([C('x')], C({x: 2})))
})
