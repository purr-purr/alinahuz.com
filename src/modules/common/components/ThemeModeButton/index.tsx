import { useContext } from 'react';

import AppContext from '@modules/layout/context/AppContext';
import themeModeIcon from '@assets/images/mode.png';
import themeModeIconLight from '@assets/images/mode_light.png';

import s from './ThemeModeButton.module.scss';

const ThemeModeButton = () => {
  const { handleSwitchLightMode, isLightMode } = useContext(AppContext);
  const SwitchLightMode = () => {
    isLightMode ? handleSwitchLightMode(false) : handleSwitchLightMode(true);
  };

  return (
    <button className={s.container} onClick={SwitchLightMode}>
      <img src={isLightMode ? themeModeIconLight : themeModeIcon} alt="Theme Mode Icon" />
    </button>
  );
};

export default ThemeModeButton;
