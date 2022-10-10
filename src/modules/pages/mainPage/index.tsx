import { createRef, useContext, useEffect } from 'react';
import MainScreen from '@modules/pages/mainPage/components/MainScreen';
import SelectedWorks from '@modules/pages/mainPage/components/SelectedWorks';
import AboutMe from '@modules/pages/mainPage/components/AboutMe';
import Skills from '@modules/pages/mainPage/components/Skills';
import Experience from '@modules/pages/mainPage/components/Experience';
import Education from '@modules/pages/mainPage/components/Education';
import Contacts from '@modules/pages/mainPage/components/Contacts';
import AppContext from '@modules/layout/context/AppContext';
import useOnScreen from '../../common/hooks/useOnScreen';

const MainPage = () => {
  useEffect(() => {
    document.title = `Alina Huz`;
  }, []);

  const { handleSwitchDarkMode } = useContext(AppContext);

  const educationRef = createRef<HTMLDivElement>();
  const contactsRef = createRef<HTMLDivElement>();
  const aboutMeRef = createRef<HTMLDivElement>();
  const selectedWorksRef = createRef<HTMLDivElement>();
  const isEducationVisible = useOnScreen(educationRef);
  const isContactsVisible = useOnScreen(contactsRef);
  const isAboutMeVisible = useOnScreen(aboutMeRef);
  const isSelectedWorksVisible = useOnScreen(selectedWorksRef);

  useEffect(() => {
    if (isEducationVisible || isContactsVisible || isAboutMeVisible || isSelectedWorksVisible) {
      handleSwitchDarkMode(false);
    } else {
      handleSwitchDarkMode(true);
    }
  }, [isEducationVisible, isContactsVisible, isAboutMeVisible, isSelectedWorksVisible]);
  return (
    <div>
      <MainScreen />
      <SelectedWorks ref={selectedWorksRef} />
      <AboutMe ref={aboutMeRef} />
      <Skills />
      <Experience />
      <Education ref={educationRef} />
      <Contacts ref={contactsRef} />
    </div>
  );
};

export default MainPage;
