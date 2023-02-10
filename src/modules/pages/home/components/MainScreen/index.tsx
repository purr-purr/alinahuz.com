import { forwardRef } from 'react';

import AsideIntroduce from '@modules/pages/home/components/AsideIntroduce';
import cn from 'classnames';
import messages from 'src/utils/messages';

import ALINA_HUZ_LOGO_WHITE from '@assets/images/ALINA_HUZ--white.svg';
// @ts-ignore
import WAVES_VIDEO from '@modules/pages/home/assets/waves_video.mp4';

import s from './MainScreen.module.scss';

interface IMainScreen {
	isSecondScreen?: boolean;
}

const MainScreen = forwardRef<HTMLDivElement, IMainScreen>((props, ref) => {
	return (
		<article ref={ref} className={s.container}>
			<AsideIntroduce isOpen={props.isSecondScreen} />
			<figure className={s.content}>
				<img
					className={cn(s.logo, props.isSecondScreen && s.hide)}
					src={ALINA_HUZ_LOGO_WHITE}
					alt={messages.ALINA_HUZ}
				/>
				<div className={s.waves}>
					<video
						width="100%"
						height="100%"
						preload="auto"
						playsInline
						muted
						autoPlay
						loop
						controls={false}
					>
						<source src={WAVES_VIDEO} type="video/mp4" />
					</video>
				</div>
			</figure>
		</article>
	);
});

export default MainScreen;
