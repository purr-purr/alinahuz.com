import React, { useEffect } from 'react';

import s from './MainPage.module.scss';
import MainScreen from '@modules/pages/mainPage/components/MainScreen';

const MainPage = () => {
  useEffect(() => {
    document.title = `Main Page`;
  }, []);

  return (
    <article className={s.container}>
      <MainScreen />
    </article>
  );
};

export default MainPage;
