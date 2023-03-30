import { act, renderHook } from '@testing-library/react'
import { useCounter } from './useCounter'

describe('custom hook', () => {
  test('should render initial count', () => {
    const { result } = renderHook(useCounter)
    expect(result.current.count).toBe(0)
  })

  test('should accept and render initial count', () => {
    const { result } = renderHook(() => useCounter({ initialCount: 10 }))
    expect(result.current.count).toBe(10)
  })

  test('should accept and render count after increment', () => {
    const { result } = renderHook(() => useCounter({ initialCount: 10 }))
    expect(result.current.count).toBe(10)

    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(11)
  })

  test('should accept and render render count after decrement', () => {
    const { result } = renderHook(() => useCounter({ initialCount: 10 }))
    expect(result.current.count).toBe(10)

    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toBe(9)
  })
})
