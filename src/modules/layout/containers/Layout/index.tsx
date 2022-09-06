import { FC, useCallback, useState } from 'react';
import { useLocation } from 'react-router';
import AppContext from '../../context/AppContext';
import Header from '@modules/layout/containers/Header';
import PageNotFound from '@modules/staticPages/PageNotFound';

import s from './Layout.module.scss';

const Layout: FC<{}> = ({ children }) => {
  const { pathname } = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSwitchLightMode = useCallback((value: boolean) => {
    setIsDarkMode(value);
  }, []);

  const context = {
    isDarkMode,
    handleSwitchLightMode,
  };

  return (
    <main className={s.container}>
      <AppContext.Provider value={context}>
        {pathname !== '/404' ? (
          <>
            <Header isDarkModeActive={isDarkMode} isHideLogo={isDarkMode} />
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
