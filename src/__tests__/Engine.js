/* global describe, test, expect */

import { applyOp, isGameEnded, isWon, newGame } from '../Engine'
import { add } from '../Operators'

describe('Engine', () => {
  test('generate a new game', () => {
    const initResult = 4
    const game = newGame(initResult)

    expect(game.initResult).toBe(initResult)
  })

  test('apply operator to the current result', () => {
    const add3 = add(3)

    expect(applyOp(10, add3)).toBe(13)
    expect(applyOp(15, add3)).toBe(18)
  })

  test('check if a game ended based on the current moves', () => {
    expect(isGameEnded(0)).toBe(true)
    expect(isGameEnded(8)).toBe(false)
  })

  test('check a game result', () => {
    const game = {
      goal: 12,
      steps: 4,
      initResult: 1
    }

    expect(isWon(game, 0, 12)).toBe(true)
    expect(isWon(game, 0, 1)).toBe(false)
    expect(isWon(game, 1, 12)).toBe(false)
  })
})
