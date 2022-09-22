import { FC } from 'react';
import cn from 'classnames';

import s from './BurgerMenuIcon.module.scss';

const BurgerMenuIcon: FC<{
  isBlackColor?: boolean;
  onClick?: () => void;
  isOpenState: boolean;
}> = ({ isBlackColor = false, onClick, isOpenState = false }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        s.container,
        { [s[`container--black`]]: isBlackColor },
        { [s[`container--open`]]: isOpenState },
      )}
    />
  );
};

export default BurgerMenuIcon;
