import { createRef, memo, useContext, useEffect, useState } from 'react';

import AppContext from '@modules/layout/context/AppContext';
import AboutMe from '@modules/pages/home/components/AboutMe';
import Contacts from '@modules/pages/home/components/Contacts';
import Education from '@modules/pages/home/components/Education';
import Experience from '@modules/pages/home/components/Experience';
import MainScreen from '@modules/pages/home/components/MainScreen';
import SelectedWorks from '@modules/pages/home/components/SelectedWorks';
import Skills from '@modules/pages/home/components/Skills';

import { useMediaQuery, useOnScreen } from '@modules/common/hooks';

import {
	MOBILE_BP,
	STARTED_MOB_SECOND_SCREEN,
	STARTED_SECOND_SCREEN,
} from '@utils/const';
import messages from '@utils/messages';

const Home = () => {
	const { handleSwitchDarkMode, isNavigationMode } = useContext(AppContext);
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
		mainScreenRef.current &&
			setMainScreenHeight(mainScreenRef.current.clientHeight);
	}, []);

	const newSecondScreenBp = isMobile
		? STARTED_MOB_SECOND_SCREEN
		: STARTED_SECOND_SCREEN;

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

	// useEffect(() => {
	// 	if (isDarkModeOff) {
	// 		handleSwitchDarkMode(false);
	// 	}
	// 	if (isDarkModeOn) {
	// 		handleSwitchDarkMode(true);
	// 	}
	// }, [
	// 	isEducationVisible,
	// 	isContactsVisible,
	// 	isAboutMeVisible,
	// 	isSelectedWorksVisible,
	// 	isSkillsVisible,
	// 	isExperienceVisible,
	// 	isSecondScreen,
	// ]);
	useEffect(() => {
		isDarkModeOff && handleSwitchDarkMode(false);
		isDarkModeOn && handleSwitchDarkMode(true);
	}, [isDarkModeOff, isDarkModeOn]);

	useEffect(() => {
		const getTitle = () => {
			return isEducationVisible
				? messages.EDUCATION
				: isContactsVisible
				? messages.CONTACTS
				: isAboutMeVisible
				? messages.ABOUT_ME
				: isSelectedWorksVisible
				? messages.SELECTED_WORKS
				: isSkillsVisible
				? messages.SKILLS
				: isExperienceVisible
				? messages.EXPERIENCE
				: messages.UI_UX_DESIGNER;
		};
		document.title = `${getTitle()} | ${messages.ALINA_HUZ}`;
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

export default memo(Home);
