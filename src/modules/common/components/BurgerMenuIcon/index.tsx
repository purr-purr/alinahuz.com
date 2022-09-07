import { FC } from 'react';
import cn from 'classnames';

import s from './BurgerMenuIcon.module.scss';

const BurgerMenuIcon: FC<{
  isBlackColor?: boolean;
}> = ({ isBlackColor = false }) => {
  return <button className={cn(s.container, { [s.blackState]: isBlackColor })} />;
};

export default BurgerMenuIcon;
