import { describe, expect, it, vi } from 'vitest'

vi.mock('../../schema.sql', () => ({ default: '' }))

import worker from '../../worker/index'

describe('worker scheduled export', () => {
  it('exposes the cron handler on the default worker export', () => {
    expect(typeof worker.fetch).toBe('function')
    expect(typeof worker.scheduled).toBe('function')
  })
})
