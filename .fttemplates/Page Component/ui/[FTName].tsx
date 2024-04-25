import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './[FTName | pascalcase].module.scss';

interface [FTName | pascalcase]Props {
   className?: string;
}

const [FTName | pascalcase] = (props: [FTName | pascalcase]Props) => {
   const { className } = props;
   const { t } = useTranslation()

   return (
      <div className={classNames(cls.[FTName | camelcase], {}, [className])}>
         {t('какой-то текст')}
      </div>
   );
}

export default memo([FTName | pascalcase])