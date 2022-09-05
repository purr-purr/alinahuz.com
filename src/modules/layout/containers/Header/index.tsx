import { FC } from 'react';
import Logo from '@modules/common/components/Logo';
import BurgerMenuIcon from '@modules/common/components/BurgerMenuIcon';

import s from './Header.module.scss';

const Header: FC<{ isHideLogo?: boolean }> = ({ isHideLogo = false }) => {
  console.log('1');
  return (
    <header className={s.container}>
      {isHideLogo && <Logo />}
      <BurgerMenuIcon />
    </header>
  );
};

export default Header;
