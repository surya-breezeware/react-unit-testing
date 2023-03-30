import { logRoles, render, screen } from '@testing-library/react'
import { Skills } from './Skills'

const skills = ['a', 'b', 'c']
test('renders list', () => {
  render(<Skills skills={skills} />)
  const list = screen.getByRole('list')
  expect(list).toBeInTheDocument()
})

test('renders listItem', () => {
  render(<Skills skills={skills} />)

  const listItem = screen.getAllByRole('listitem')
  expect(listItem).toHaveLength(skills.length)
})

test('renders login button', () => {
  render(<Skills skills={skills} />)
  const loginButton = screen.getByRole('button', {
    name: 'Login',
  })
  expect(loginButton).toBeInTheDocument()
})

test('start learning button', () => {
  render(<Skills skills={skills} />)
  const startLearning = screen.queryByRole('button', {
    name: 'Start learning',
  })
  expect(startLearning).not.toBeInTheDocument()
})

test('start learning button renders after timout', async () => {
  render(<Skills skills={skills} />)
  // screen.debug()
  logRoles(render(<Skills skills={skills} />).container)
  const startLearning = await screen.findByRole(
    'button',
    {
      name: 'Start learning',
    },
    { timeout: 3000 },
  )
  expect(startLearning).toBeInTheDocument()
})
