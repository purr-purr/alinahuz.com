import { FC, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import Footer from '@modules/layout/components/Footer';
import Header from '@modules/layout/components/Header';
import AppContext from '@modules/layout/context/AppContext';
import FullScreenCarousel from '@modules/pages/home/components/SelectedWorksCarousel';
import PageNotFound from '@modules/staticPages/components/NotFound';

import { useMediaQuery } from '@modules/common/hooks';

import {
	MOBILE_BP,
	STARTED_MOB_SECOND_SCREEN,
	STARTED_SECOND_SCREEN,
} from '@utils/const';

import s from './Layout.module.scss';

const Layout: FC = ({ children }) => {
	const isMobile = useMediaQuery(MOBILE_BP);
	const { pathname } = useLocation();
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isNavigationMode, setIsNavigationMode] = useState(false);
	const [isFullScreenCarouselMode, setIsFullScreenCarouselMode] = useState({
		index: 0,
		isActive: false,
	});

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'auto' });
	}, []);

	const handleSwitchDarkMode = useCallback((value: boolean) => {
		setIsDarkMode(value);
	}, []);

	const handleSwitchNavigationMode = useCallback((value: boolean) => {
		setIsNavigationMode(value);
	}, []);

	const handleSwitchFullScreenCarouselMode = useCallback(
		(index: number, isActive: boolean) => {
			setIsFullScreenCarouselMode({ index: index, isActive: isActive });
		},
		[],
	);

	const context = {
		isDarkMode,
		isNavigationMode,
		isFullScreenCarouselMode,
		handleSwitchDarkMode,
		handleSwitchNavigationMode,
		handleSwitchFullScreenCarouselMode,
	};

	useEffect(() => {
		if (isNavigationMode || isFullScreenCarouselMode.isActive)
			document.body.style.overflow = 'hidden';
		else document.body.style.overflow = 'visible';
	}, [isNavigationMode, isFullScreenCarouselMode.isActive]);

	const secondScreenPoint = isMobile
		? STARTED_MOB_SECOND_SCREEN
		: STARTED_SECOND_SCREEN;

	return (
		<main className={s.container}>
			<AppContext.Provider value={context}>
				<Header
					isHideLogo={
						pathname === '/404' ? false : window.scrollY < secondScreenPoint
					}
				/>

				{pathname !== '/404' ? (
					<>
						<section className={s.section}>{children}</section>

						{isFullScreenCarouselMode.isActive && (
							<FullScreenCarousel
								isOpenState={isFullScreenCarouselMode.isActive}
								burgerIconClick={() =>
									handleSwitchFullScreenCarouselMode(
										0,
										!isFullScreenCarouselMode.isActive,
									)
								}
								activeSlide={isFullScreenCarouselMode.index - 1}
							/>
						)}
						<Footer />
					</>
				) : (
					<PageNotFound />
				)}
			</AppContext.Provider>
		</main>
	);
};

export default Layout;
