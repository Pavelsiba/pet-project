import { screen } from '@testing-library/react'
import { Counter } from './Counter'
import { ComponentRender } from 'shared/lib/tests/componentRender/componentRender'
import userEvent from '@testing-library/user-event'

describe('Counter', () => {
  test('test render', () => {
    ComponentRender(<Counter />,
      { initialState: { counter: { value: 10 } } })
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  })

  test('increment', async () => {
    ComponentRender(<Counter />,
      { initialState: { counter: { value: 10 } } })
    await userEvent.click(screen.getByTestId('increment-button'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })

  test('decrement', async () => {
    ComponentRender(<Counter />,
      { initialState: { counter: { value: 10 } } })
    await userEvent.click(screen.getByTestId('decrement-button'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })
})
