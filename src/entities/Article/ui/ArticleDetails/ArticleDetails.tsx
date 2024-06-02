import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import cls from './ArticleDetails.module.scss'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById'
import { memo, useEffect, type ReactChild } from 'react'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsIsLoading,
  getArticleDetailsData,
  getArticleDetailsError
} from 'entities/Article/model/slectors/articleDetails'
import { Sceleton } from 'shared/ui/Sceleton/Sceleton'
import { Avatar } from 'shared/ui/avatar/Avatar'
import EyeIcon from 'shared/assets/icons/mdi_eye-outline.svg'
import CalendarIcon from 'shared/assets/icons/icon-calendar.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import {
  type ArticleBlock,
  ArticleBlockType
} from 'entities/Article/model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

interface ArticleDetailsProps {
  className?: string
  id?: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id = '1' } = props
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()

  const isLoading = useSelector(getArticleDetailsIsLoading)
  const article = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)

  console.log(article)
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      void dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  const renderBlock = (block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        )
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        )
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        )
      default:
        return null
    }
  }

  let content: ReactChild

  if (isLoading) {
    content = (
      <div>
        <Sceleton
          className={cls.avatar}
          width={200}
          height={200}
          border={'50%'}
        />
        <Sceleton className={cls.title} width={300} height={32} />
        <Sceleton className={cls.sceleton} width={600} height={24} />
        <Sceleton className={cls.sceleton} width={'100%'} height={200} />
        <Sceleton className={cls.sceleton} width={'100%'} height={200} />
      </div>
    )
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке статьи')}
      />
    )
  } else {
    content = (
      <>
        <div className={cls.avatar_wrapper}>
          <Avatar size={200} src={article?.img} className={cls.avatar} />
        </div>
        <Text
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div className={cls.article_info}>
          <Icon className={cls.icon} Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.article_info}>
          <Icon className={cls.icon} Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  )
})
