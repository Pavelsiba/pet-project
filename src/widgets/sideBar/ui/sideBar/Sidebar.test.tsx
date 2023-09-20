import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './sideBar'
import { ComponentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('Sidebar', () => {
  test('test render sidebar', () => {
    ComponentRender(<Sidebar />)
    const sidebarComponent = screen.getByTestId('sidebar')
    expect(sidebarComponent).toBeInTheDocument()
  })

  test('test toggle button', () => {
    ComponentRender(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(toggleBtn).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
