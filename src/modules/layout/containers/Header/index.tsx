import { FC } from 'react';
import Logo from '@modules/common/components/Logo';
import BurgerMenuIcon from '@modules/common/components/BurgerMenuIcon';

import s from './Header.module.scss';

const Header: FC<{
  isDarkModeActive?: boolean;
  isHideLogo?: boolean;
}> = ({ isHideLogo = false, isDarkModeActive = false }) => {
  return (
    <header className={s.container}>
      {isHideLogo && <Logo isBlackColor={isDarkModeActive} />}
      <BurgerMenuIcon isBlackColor={isDarkModeActive} />
    </header>
  );
};

export default Header;
