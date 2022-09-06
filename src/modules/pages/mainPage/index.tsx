import { useEffect } from 'react';

import s from './MainPage.module.scss';
import MainScreen from '@modules/pages/mainPage/components/MainScreen';
import SelectedWorks from '@modules/pages/mainPage/components/SelectedWorks';

const MainPage = () => {
  useEffect(() => {
    document.title = `Main Page`;
  }, []);

  return (
    <article className={s.container}>
      <MainScreen />
      <SelectedWorks />
    </article>
  );
};

export default MainPage;
