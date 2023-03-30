import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'
import user from '@testing-library/user-event'

test('render Correctly', () => {
  render(<Counter />)
  const button = screen.getByRole('button', { name: 'Increment' })
  expect(button).toBeInTheDocument()
})

test('render count', () => {
  render(<Counter />)
  const count = screen.getByRole('heading', { level: 1 })
  expect(count).toHaveTextContent('0')
})

test('renders count correctly after clicking increment button', async () => {
  user.setup()
  render(<Counter />)
  const button = screen.getByRole('button', { name: 'Increment' })
  await user.click(button)
  const count = screen.getByRole('heading', { level: 1 })
  expect(count).toHaveTextContent('1')
})

test('renders count of 10 after clicking set button', async () => {
  user.setup()
  render(<Counter />)
  const input = screen.getByRole('spinbutton')
  await user.type(input, '10')

  //   const count = screen.getByRole('heading', { level: 1 })
  expect(input).toHaveValue(10)
  const button = screen.getByRole('button', { name: 'Set' })
  await user.click(button)
  const count = screen.getByRole('heading', { level: 1 })
  expect(count).toHaveTextContent('10')
})
