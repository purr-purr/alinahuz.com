import { FC } from 'react';
import cn from 'classnames';

import s from './AsideBar.module.scss';

const AsideBar: FC<{
  className?: string;
  title: string;
}> = ({ className, title }) => {
  return <aside className={cn(s.container, className)}>12</aside>;
};

export default AsideBar;
