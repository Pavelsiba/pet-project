import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './[FTName | pascalcase].module.scss';

interface [FTName | pascalcase]Props {
   className?: string;
}

const [FTName | pascalcase]: FC<[FTName | pascalcase]Props> = (props) => {
   const { className } = props;
   const { t } = useTranslation()

   return (
      <div className={classNames(cls.[FTName | camelcase], {}, [className])}>

      </div>
   );
}

export default [FTName | pascalcase]