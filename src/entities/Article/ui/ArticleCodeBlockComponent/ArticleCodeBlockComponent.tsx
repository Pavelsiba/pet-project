// import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleCodeBlockComponent.module.scss'
import { memo } from 'react'
import { type IArticleCodeBlock } from '../../model/types/article'
import { Code } from 'shared/ui/Code/Code'

interface ArticleCodeBlockComponentProps {
  className?: string
  block: IArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(
  (props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props
    // const { t } = useTranslation('article')

    return (
      <div
        className={classNames(cls.articleCodeBlockComponent, {}, [className])}
      >
        <Code text={block.code}/>
      </div>
    )
  }
)
