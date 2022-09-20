import { FC, useContext } from 'react';

import { menuLinks } from '@helpers/data';
import DecorativeLink from '@modules/common/components/DecorativeLink';

import s from './Navigation.module.scss';
import AppContext from '@modules/layout/context/AppContext';

const Navigation: FC = () => {
  const { handleSwitchNavigationMode } = useContext(AppContext);

  return (
    <ul className={s.container}>
      {menuLinks.map((item) => (
        <li key={item.title}>
          <DecorativeLink
            onClick={() => handleSwitchNavigationMode(false)}
            text={item.title}
            href={item.link}
            isBlackColorState
          />
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
