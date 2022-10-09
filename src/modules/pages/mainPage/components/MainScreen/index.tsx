import { FC, useEffect, useState } from 'react';

import AsideIntroduce from '@modules/pages/mainPage/components/AsideIntroduce';
import messages from 'src/helpers/messages';

// @ts-ignore
import WAVES_VIDEO from '@assets/images/waves_video.mp4';
import ALINA_HUZ_LOGO_WHITE from '@assets/images/ALINA_HUZ--white.svg';

import s from './MainScreen.module.scss';

const MainScreen: FC = () => {
  const [scrollPosition, setPosition] = useState(0);

  useEffect(() => {
    function updatePosition() {
      setPosition(window.scrollY);
    }

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  const isSecondScreen = scrollPosition >= 700;

  // const { handleSwitchDarkMode } = useContext(AppContext);
  //
  // useEffect(() => {
  //   isSecondScreen ? handleSwitchDarkMode(true) : handleSwitchDarkMode(false);
  // }, [scrollPosition]);

  return (
    <article className={s.container}>
      <AsideIntroduce isOpen={isSecondScreen} />
      <div className={s.content}>
        <img className={s.logo} src={ALINA_HUZ_LOGO_WHITE} alt={messages.ALINA_HUZ_LOGO} />
        <div className={s.waves}>
          <video width="100%" height="100%" preload="auto" autoPlay loop controls={false} muted>
            <source src={WAVES_VIDEO} type="video/mp4" />
          </video>
        </div>
      </div>
    </article>
  );
};
export default MainScreen;
