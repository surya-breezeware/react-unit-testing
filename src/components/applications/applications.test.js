import { render, screen } from '@testing-library/react'
import Applications from './Applications'

describe('application', () => {
  test('render component', () => {
    render(<Applications />)
    const nameEle = screen.getByRole('textbox', {
      name: 'Bio',
    })
    expect(nameEle).toBeInTheDocument()

    const jobEle = screen.getByRole('combobox')
    expect(jobEle).toBeInTheDocument()

    const pageHeading = screen.getByRole('heading', {
      level: 1,
    })
    expect(pageHeading).toBeInTheDocument()

    const nameElement = screen.getByLabelText('Name')
    expect(nameElement).toBeInTheDocument('Name')

    const placeholderElement = screen.getByPlaceholderText('name')
    expect(placeholderElement).toBeInTheDocument()

    const para = screen.getByText('paragraph')
    expect(para).toBeInTheDocument()

    const text = screen.getByDisplayValue('surya')
    expect(text).toBeInTheDocument()
  })
})
