import { FC, useState } from 'react';
import cn from 'classnames';

import s from './BurgerMenuIcon.module.scss';
import Navigation from '@modules/common/components/Navigation';

const BurgerMenuIcon: FC<{
  isBlackColor?: boolean;
}> = ({ isBlackColor = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={cn(
          s.container,
          { [s[`container--black`]]: isBlackColor },
          { [s.openState]: menuOpen },
        )}
      />
      {menuOpen && <Navigation />}
    </>
  );
};

export default BurgerMenuIcon;
