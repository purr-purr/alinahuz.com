import { FC, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import AppContext from '../../context/AppContext';
import Header from '@modules/layout/containers/Header';
import Footer from '@modules/layout/containers/Footer';
import PageNotFound from '@modules/staticPages/PageNotFound';
import FullScreenCarousel from '@modules/common/components/FullScreenCarousel';

import s from './Layout.module.scss';

const Layout: FC = ({ children }) => {
  const { pathname } = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNavigationMode, setIsNavigationMode] = useState(false);
  const [isFullScreenCarouselMode, setIsFullScreenCarouselMode] = useState({
    index: 0,
    isActive: false,
  });

  const handleSwitchDarkMode = useCallback((value: boolean) => {
    setIsDarkMode(value);
  }, []);

  const handleSwitchNavigationMode = useCallback((value: boolean) => {
    setIsNavigationMode(value);
  }, []);

  const handleSwitchFullScreenCarouselMode = useCallback((index: number, isActive: boolean) => {
    setIsFullScreenCarouselMode({ index: index, isActive: isActive });
  }, []);

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

  return (
    <main className={s.container}>
      <AppContext.Provider value={context}>
        <Header
          isDarkModeActive={isDarkMode || isNavigationMode}
          isHideLogo={window.scrollY > 700 || pathname === '/404'}
        />
        {pathname !== '/404' ? (
          <>
            <section className={s.section}>{children}</section>

            {isFullScreenCarouselMode.isActive && (
              <FullScreenCarousel
                isOpenState={isFullScreenCarouselMode.isActive}
                burgerIconClick={() =>
                  handleSwitchFullScreenCarouselMode(0, !isFullScreenCarouselMode.isActive)
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
