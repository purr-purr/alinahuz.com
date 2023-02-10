import { FC } from 'react';

import { scrollToTop } from '@utils/index';
import messages from '@utils/messages';

import ALINA_HUZ_LOGO_BLACK from '@assets/images/ALINA_HUZ--black.svg';
import ALINA_HUZ_LOGO_WHITE from '@assets/images/ALINA_HUZ--white.svg';

import s from './Logo.module.scss';

const Logo: FC<{
	isBlackColor?: boolean;
}> = ({ isBlackColor = false }) => {
	const clickOnLogo = () => {
		scrollToTop();
		window.location.reload();
	};
	return (
		<a href="/" onClick={clickOnLogo}>
			<img
				className={s.container}
				src={isBlackColor ? ALINA_HUZ_LOGO_BLACK : ALINA_HUZ_LOGO_WHITE}
				alt={messages.ALINA_HUZ}
			/>
		</a>
	);
};

export default Logo;
