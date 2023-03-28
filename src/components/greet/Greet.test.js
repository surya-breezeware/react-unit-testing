/**
 * Greet should render the text hello and if a name is passed into the component
 * It should render hello followed by name
 */

import { render, screen } from '@testing-library/react'
import Greet from './Greet'

test('renders Greet component', () => {
  render(<Greet />)
  const linkElement = screen.getByText('Greet')
  expect(linkElement).toBeInTheDocument()
})

test('renders Greet component with name', () => {
  render(<Greet name="surya" />)
  const linkElement = screen.getByText('Greet surya')
  expect(linkElement).toBeInTheDocument()
})
