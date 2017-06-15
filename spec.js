const {test} = require('tape')
const snapshot = require('snap-shot-core')

test('a test', (assert) => {
  function raiser({value, expected, specName, compare}) {
    assert.equal(value, expected, 'should be ' + expected)
  }
  snapshot({
    what: 43,
    __filename,
    specName: assert.name,
    raiser
  })
  assert.end()
})
