import { useSelector } from 'react-redux'
import { Button } from 'shared/ui/button/button'
import { counterActions } from '../modal/slice/counterSlice'
import { getCounterValue } from '../modal/selectors/getCounterValue/getCounterValue'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

export const Counter = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const counterValue = useSelector(getCounterValue)
  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1 data-testid = "value-title">{ counterValue }</h1>
      <Button
        onClick={increment}
        data-testid = "increment-button"
      >
        {t('increment')}
      </Button>
      <Button
        onClick={decrement}
        data-testid = "decrement-button"
      >
        {t('decrement')}
      </Button>
    </div>)
}
