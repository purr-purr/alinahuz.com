import { FC, useContext, useEffect } from 'react';
import Navigation from '@modules/common/components/Navigation';
import AppContext from '@modules/layout/context/AppContext';
import Logo from '@modules/common/components/Logo';
import BurgerMenuIcon from '@modules/common/components/BurgerMenuIcon';

import s from './Header.module.scss';

const Header: FC<{
  isDarkModeActive?: boolean;
  isHideLogo?: boolean;
}> = ({ isHideLogo = false, isDarkModeActive = false }) => {
  const { handleSwitchNavigationMode, isNavigationMode } = useContext(AppContext);

  useEffect(() => {
    isNavigationMode ? handleSwitchNavigationMode(true) : handleSwitchNavigationMode(false);
  }, [isNavigationMode]);

  return (
    <header className={s.container}>
      {isHideLogo && <Logo isBlackColor={isDarkModeActive} />}
      <BurgerMenuIcon
        isOpenState={isNavigationMode}
        isBlackColor={isDarkModeActive}
        onClick={() => handleSwitchNavigationMode(!isNavigationMode)}
      />
      {isNavigationMode && <Navigation />}
    </header>
  );
};

export default Header;
