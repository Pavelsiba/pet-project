import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations/renderWithTranslations'

describe('Sidebar', () => {
  test('test render sidebar', () => {
    renderWithTranslations(<Sidebar />)
    const sidebarComponent = screen.getByTestId('sidebar')
    expect(sidebarComponent).toBeInTheDocument()
  })

  test('test toggle button', () => {
    renderWithTranslations(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(toggleBtn).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
