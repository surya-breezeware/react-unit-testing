import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { server } from '../../mocks/server'
import Users from './Users'

test('renders a list of users', async () => {
  render(<Users />)
  const users = await screen.findAllByRole('listitem')
  expect(users).toHaveLength(2)
})

// test('renders a list of users', async () => {
//   render(<Users />)
//   const users = await screen.findByRole('heading', { level: 1 })
//   expect(users).toBeInTheDocument()
// })

test('renders error', async () => {
  server.use(
    rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
      return res(ctx.status(500))
    }),
  )
  render(<Users />)
  const error = await screen.findByRole('heading', { level: 1 })
  expect(error).toBeInTheDocument()
})
