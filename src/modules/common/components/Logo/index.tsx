import { FC } from 'react';
import { Link } from 'react-router-dom';

import ALINA_HUZ_LOGO_BLACK from '@assets/images/ALINA_HUZ--black.svg';
import ALINA_HUZ_LOGO_WHITE from '@assets/images/ALINA_HUZ--white.svg';

import s from './Logo.module.scss';

const Logo: FC<{
  isBlackColor?: boolean;
}> = ({ isBlackColor = false }) => {
  const clickOnLogo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.reload();
  };
  return (
    <Link to="/" onClick={clickOnLogo}>
      <img
        className={s.container}
        src={isBlackColor ? ALINA_HUZ_LOGO_BLACK : ALINA_HUZ_LOGO_WHITE}
        alt="Alina Huz logo"
      />
    </Link>
  );
};

export default Logo;
