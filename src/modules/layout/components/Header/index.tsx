import { FC, useContext } from 'react';

import BurgerMenuIcon from '@modules/common/components/BurgerMenuIcon';
import Logo from '@modules/common/components/Logo';
import AppContext from '@modules/layout/context/AppContext';
import Navigation from '@modules/navigation/components/Navigation';

import s from './Header.module.scss';

const Header: FC<{
	isHideLogo?: boolean;
}> = ({ isHideLogo = false }) => {
	const {
		handleSwitchNavigationMode,
		isNavigationMode,
		isDarkMode,
	} = useContext(AppContext);

	const isDarkModeActive = isNavigationMode || isDarkMode;

	return (
		<header className={s.container}>
			{!isHideLogo && <Logo isBlackColor={isDarkModeActive} />}
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
