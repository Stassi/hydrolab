import { describe, expect, it } from '@jest/globals'
import identity from '../identity.js'

describe('identity', () => {
  describe.each([
    1n,
    true,
    1,
    '1'
  ])('input: %p', (input: bigint | boolean | number | string) => {
    it('should return its input', () => {
      expect(identity(input)).toBe(input)
    })
  })
})
