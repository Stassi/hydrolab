import type { NumberCallback } from '../addN.js'
import { describe, expect, it } from '@jest/globals'
import addN from '../addN.js'

describe('addN', () => {
  describe.each([
    {
      input: -1,
      expected: {
        decremented: -2,
        incremented: 0
      }
    },
    {
      input: 0,
      expected: {
        decremented: -1,
        incremented: 1
      }
    },
    {
      input: 1,
      expected: {
        decremented: 0,
        incremented: 2
      }
    }
  ])('input: %i', ({ input, expected: { decremented, incremented } }: {
    input: number;
    expected: {
      decremented: number,
      incremented: number
    }
  }) => {
    describe('decrement', () => {
      const decrement: NumberCallback = addN(-1)

      it('should return the decremented input: (x - 1)', () => {
        expect(decrement(input)).toBe(decremented)
      })
    })

    describe('increment', () => {
      const increment: NumberCallback = addN(1)

      it('should return the incremented input: (x + 1)', () => {
        expect(increment(input)).toBe(incremented)
      })
    })
  })
})
