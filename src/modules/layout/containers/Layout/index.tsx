import { FC, useCallback, useState } from 'react';
import { useLocation } from 'react-router';
import AppContext from '../../context/AppContext';
import Header from '@modules/layout/containers/Header';
import PageNotFound from '@modules/staticPages/PageNotFound';

import s from './Layout.module.scss';

const Layout: FC<{}> = ({ children }) => {
  const { pathname } = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNavigationMode, setIsNavigationMode] = useState(false);

  const handleSwitchDarkMode = useCallback((value: boolean) => {
    setIsDarkMode(value);
  }, []);

  const handleSwitchNavigationMode = useCallback((value: boolean) => {
    setIsNavigationMode(value);
  }, []);

  const context = {
    isDarkMode,
    isNavigationMode,
    handleSwitchDarkMode,
    handleSwitchNavigationMode,
  };

  return (
    <main className={s.container} style={isNavigationMode ? { overflowX: 'hidden' } : undefined}>
      <AppContext.Provider value={context}>
        {pathname !== '/404' ? (
          <>
            <Header
              isDarkModeActive={isDarkMode || isNavigationMode}
              isHideLogo={window.scrollY > 700}
            />
            <section className={s.section}>{children}</section>
          </>
        ) : (
          <PageNotFound />
        )}
      </AppContext.Provider>
    </main>
  );
};

export default Layout;
