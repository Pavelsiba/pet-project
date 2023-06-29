import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'

interface PageErrorProps {
  className?: string
}

export const PageError: React.FC<PageErrorProps> = (props) => {
  const { className = '' } = props
  const { t } = useTranslation()
  // eslint-disable-next-line no-restricted-globals
  const reloadPage = () => { window.location.reload() }

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <button onClick={reloadPage} >{t('Обновить страницу')}</button>
    </div>
  )
}
