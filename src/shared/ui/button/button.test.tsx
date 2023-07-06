import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './button'

describe('Button', () => {
  test('test render', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('test clear theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
    screen.debug()
  })

  test('test outline theme', () => {
    render(<Button theme={ThemeButton.OUTLINE}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('outline')
    screen.debug()
  })
})
