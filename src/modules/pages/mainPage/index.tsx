import React, { useEffect } from 'react';

import s from './MainPage.module.scss';

const MainPage = () => {
  useEffect(() => {
    document.title = `Main Page`;
  }, []);

  return (
    <article className={s.container}>
      <h1>Main Page 12</h1>
    </article>
  );
};

export default MainPage;
