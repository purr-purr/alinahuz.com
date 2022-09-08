import { FC, useContext, useEffect, useState } from 'react';
import cn from 'classnames';

import s from './BurgerMenuIcon.module.scss';
import Navigation from '@modules/common/components/Navigation';
import AppContext from '@modules/layout/context/AppContext';

const BurgerMenuIcon: FC<{
  isBlackColor?: boolean;
}> = ({ isBlackColor = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { handleSwitchNavigationMode } = useContext(AppContext);

  useEffect(() => {
    menuOpen ? handleSwitchNavigationMode(true) : handleSwitchNavigationMode(false);
  }, [menuOpen]);

  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={cn(s.container, { [s[`container--black`]]: isBlackColor || menuOpen })}
      />
      {menuOpen && <Navigation />}
    </>
  );
};

export default BurgerMenuIcon;
