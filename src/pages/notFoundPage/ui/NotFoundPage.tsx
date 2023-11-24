import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'
import { useEffect, type FC, memo } from 'react'
import { useNavigate } from 'react-router-dom'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = memo((props) => {
  const { className = '' } = props
  const { t } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => { navigate('/') }, 3000)
    return () => { clearTimeout(timer) }
  }, [navigate])

  return (
    <div className={classNames(cls.not_found_page, {}, [className])}>
      <div>{t('Страница не найдена')}</div>
      <div>{t('Перевожу на главную')}</div>
    </div>
  )
})
