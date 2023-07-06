import { Button } from 'shared/ui/button/Button'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface BugButtonProps {
  className?: string
}

// Test button to simulate an error for ErrorBoundery

export const BugButton: React.FC<BugButtonProps> = () => {
  const [error, setError] = useState(false)
  const onThrow = () => { setError(true) }
  const { t } = useTranslation()

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <Button
      type='button'
      onClick={onThrow}>
      {t('Создать ошибку')}
    </Button>
  )
}
