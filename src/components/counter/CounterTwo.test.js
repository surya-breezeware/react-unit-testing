import {
  act,
  fireEvent,
  getByRole,
  render,
  screen,
} from '@testing-library/react'
import { CounterTwo } from './CounterTwo'
import user from '@testing-library/user-event'

test('counterTwo', async () => {
  const handleDecrementHandler = jest.fn()
  const handleIncrementHandler = jest.fn()

  render(
    <CounterTwo
      count={0}
      handleIncrement={handleIncrementHandler}
      handleDecrement={handleDecrementHandler}
    />,
  )

  const IncrementBtn = screen.getByRole('button', { name: 'Increment' })
  const DecrementBtn = screen.getByRole('button', { name: 'Decrement' })

  await user.click(IncrementBtn)
  await user.click(DecrementBtn)
  expect(handleDecrementHandler).toHaveBeenCalledTimes(1)
  expect(handleIncrementHandler).toHaveBeenCalledTimes(1)
})

// test('render Correctly', async () => {
//   user.setup()
//   const handleClick = jest.fn()

//   render(<CounterTwo />)

//   const button = screen.getByRole('button', { name: 'Increment' })
//   act(() => {
//     user.click(button)
//   })

//   expect(handleClick).toHaveBeenCalledWith('Button clicked!')
// })
