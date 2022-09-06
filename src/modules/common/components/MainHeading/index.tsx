import { FC } from 'react';
import cn from 'classnames';

import s from './MainHeading.module.scss';

const MainHeading: FC<{ text: string; className?: string; isH1Tag?: boolean }> = ({
  text,
  className,
  isH1Tag = false,
}) => {
  return isH1Tag ? (
    <h1 className={cn(s.container, className)}>{text}</h1>
  ) : (
    <h2 className={cn(s.container, className)}>{text}</h2>
  );
};
export default MainHeading;
