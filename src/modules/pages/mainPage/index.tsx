import { useEffect } from 'react';
import MainScreen from '@modules/pages/mainPage/components/MainScreen';
import SelectedWorks from '@modules/pages/mainPage/components/SelectedWorks';
import AboutMe from '@modules/pages/mainPage/components/AboutMe';
import Skills from '@modules/pages/mainPage/components/Skills';
import Experience from '@modules/pages/mainPage/components/Experience';
import Education from '@modules/pages/mainPage/components/Education';
import Contacts from '@modules/pages/mainPage/components/Contacts';

const MainPage = () => {
  useEffect(() => {
    document.title = `Alina Huz`;
  }, []);

  return (
    <>
      <MainScreen />
      <SelectedWorks />
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <Contacts />
    </>
  );
};

export default MainPage;
