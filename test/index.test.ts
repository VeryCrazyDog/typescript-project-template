import type { TestFn } from 'ava'
import anyTest from 'ava'

import { add } from '../src/index'

interface TestContext {
  // Added for the purpose of demonstration
  previousResult: number
}

const test = anyTest as TestFn<TestContext>

test('should produce correct add result', t => {
  const addResult = add(1, 2)
  t.context.previousResult = addResult
  t.deepEqual(addResult, 3)
})
