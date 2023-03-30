import { render, screen } from '../../test.utils'
import { MuiMode } from './MuiMode'

test('check dark or light mode', () => {
  render(<MuiMode />)
  const mode = screen.getByRole('heading')
  expect(mode).toHaveTextContent('dark mode')
})
