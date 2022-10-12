import { forwardRef } from 'react';
import messages from 'src/helpers/messages';
import AsideIntroduce from '@modules/pages/mainPage/components/AsideIntroduce';

// @ts-ignore
import WAVES_VIDEO from '@assets/images/waves_video.mp4';
import ALINA_HUZ_LOGO_WHITE from '@assets/images/ALINA_HUZ--white.svg';

import s from './MainScreen.module.scss';

interface IMainScreen {
  isSecondScreen?: boolean;
}

const MainScreen = forwardRef<HTMLDivElement, IMainScreen>((props, ref) => {
  return (
    <article ref={ref} className={s.container}>
      <AsideIntroduce isOpen={props.isSecondScreen} />
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
});
export default MainScreen;
