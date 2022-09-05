import { FC, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import AppContext from '../../context/AppContext';
import { LOCAL_STORAGE } from '@modules/common/const';
import Header from '@modules/layout/containers/Header';
import PageNotFound from '@modules/staticPages/PageNotFound';

import s from './Layout.module.scss';

const Layout: FC = ({ children }) => {
  const { pathname } = useLocation();
  const [isLightMode, setIsLightMode] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE.LIGHT_MODE) || 'false'),
  );
  const [isWalletModalVisible, setIsWalletModalVisible] = useState(false);

  const handleSwitchLightMode = useCallback((value: boolean) => {
    setIsLightMode(value);
    window.localStorage.setItem(LOCAL_STORAGE.LIGHT_MODE, value.toString());
  }, []);

  const context = {
    isLightMode,
    handleSwitchLightMode,
    isWalletModalVisible,
    setIsWalletModalVisible,
  };

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLightMode);
  }, [isLightMode]);

  return (
    <main className={s.container}>
      <AppContext.Provider value={context}>
        {pathname !== '/404' ? (
          <>
            <Header />
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
