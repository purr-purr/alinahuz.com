import { createRef, useContext, useEffect, useState } from 'react';
import { MOBILE_BP, STARTED_MOB_SECOND_SCREEN, STARTED_SECOND_SCREEN } from '@helpers/const';
import AppContext from '@modules/layout/context/AppContext';
import { useMediaQuery, useOnScreen } from '@modules/common/hooks';
import MainScreen from '@modules/pages/mainPage/components/MainScreen';
import SelectedWorks from '@modules/pages/mainPage/components/SelectedWorks';
import AboutMe from '@modules/pages/mainPage/components/AboutMe';
import Skills from '@modules/pages/mainPage/components/Skills';
import Experience from '@modules/pages/mainPage/components/Experience';
import Education from '@modules/pages/mainPage/components/Education';
import Contacts from '@modules/pages/mainPage/components/Contacts';

const MainPage = () => {
  const { handleSwitchDarkMode } = useContext(AppContext);
  const isMobile = useMediaQuery(MOBILE_BP);

  const mainScreenRef = createRef<HTMLDivElement>();
  const educationRef = createRef<HTMLDivElement>();
  const contactsRef = createRef<HTMLDivElement>();
  const aboutMeRef = createRef<HTMLDivElement>();
  const selectedWorksRef = createRef<HTMLDivElement>();
  const skillsRef = createRef<HTMLDivElement>();
  const experienceRef = createRef<HTMLDivElement>();

  const isEducationVisible = useOnScreen(educationRef);
  const isContactsVisible = useOnScreen(contactsRef);
  const isAboutMeVisible = useOnScreen(aboutMeRef);
  const isSelectedWorksVisible = useOnScreen(selectedWorksRef);
  const isSkillsVisible = useOnScreen(skillsRef);
  const isExperienceVisible = useOnScreen(experienceRef);

  const [mainScreenHeight, setMainScreenHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSecondScreen, setSecondScreen] = useState(false);

  const isDarkModeOn = isSkillsVisible || isSecondScreen || isExperienceVisible;
  const isDarkModeOff =
    isSelectedWorksVisible ||
    isAboutMeVisible ||
    isEducationVisible ||
    isContactsVisible ||
    !isSecondScreen;

  useEffect(() => {
    mainScreenRef.current && setMainScreenHeight(mainScreenRef.current.clientHeight);
  }, []);

  const newSecondScreenBp = isMobile ? STARTED_MOB_SECOND_SCREEN : STARTED_SECOND_SCREEN;

  useEffect(() => {
    function updatePosition() {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);
      scrollY >= newSecondScreenBp && scrollY < mainScreenHeight
        ? setSecondScreen(true)
        : setSecondScreen(false);
    }

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, [scrollPosition]);

  useEffect(() => {
    if (isDarkModeOff) {
      handleSwitchDarkMode(false);
    }
    if (isDarkModeOn) {
      handleSwitchDarkMode(true);
    }
  }, [
    isEducationVisible,
    isContactsVisible,
    isAboutMeVisible,
    isSelectedWorksVisible,
    isSkillsVisible,
    isExperienceVisible,
    isSecondScreen,
  ]);

  useEffect(() => {
    isEducationVisible
      ? (document.title = `Education | Alina Huz`)
      : isContactsVisible
      ? (document.title = `Contacts | Alina Huz`)
      : isAboutMeVisible
      ? (document.title = `About Me | Alina Huz`)
      : isSelectedWorksVisible
      ? (document.title = `Selected Works | Alina Huz`)
      : isSkillsVisible
      ? (document.title = `Skills | Alina Huz`)
      : isExperienceVisible
      ? (document.title = `Experience | Alina Huz`)
      : (document.title = `UI/UX Designer | Alina Huz`);
  }, [
    isEducationVisible,
    isContactsVisible,
    isAboutMeVisible,
    isSelectedWorksVisible,
    isExperienceVisible,
    isSkillsVisible,
  ]);
  return (
    <>
      <MainScreen ref={mainScreenRef} isSecondScreen={isSecondScreen} />
      <SelectedWorks ref={selectedWorksRef} />
      <AboutMe ref={aboutMeRef} isActive={isAboutMeVisible} />
      <Skills ref={skillsRef} />
      <Experience ref={experienceRef} />
      <Education ref={educationRef} isActive={isEducationVisible} />
      <Contacts ref={contactsRef} />
    </>
  );
};

export default MainPage;
