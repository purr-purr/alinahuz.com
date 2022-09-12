import { FC, useContext, useEffect } from 'react';
import cn from 'classnames';
import Navigation from '@modules/common/components/Navigation';
import AppContext from '@modules/layout/context/AppContext';

import s from './BurgerMenuIcon.module.scss';

const BurgerMenuIcon: FC<{
  isBlackColor?: boolean;
}> = ({ isBlackColor = false }) => {
  // const [menuOpen, setMenuOpen] = useState(false);

  const { handleSwitchNavigationMode, isNavigationMode } = useContext(AppContext);

  useEffect(() => {
    isNavigationMode ? handleSwitchNavigationMode(true) : handleSwitchNavigationMode(false);
  }, [isNavigationMode]);

  return (
    <>
      <button
        onClick={() => handleSwitchNavigationMode(!isNavigationMode)}
        className={cn(
          s.container,
          { [s[`container--black`]]: isBlackColor || isNavigationMode },
          { [s[`container--open`]]: isNavigationMode },
        )}
      />
      {isNavigationMode && <Navigation />}
    </>
  );
};

export default BurgerMenuIcon;
