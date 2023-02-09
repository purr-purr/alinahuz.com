import { FC } from 'react';

import cn from 'classnames';

import messages from '@utils/messages';

import ARROW_DOWN from '@modules/common/assets/nextBlockShadow/arrow_down_icon--white.svg';

import s from './NextBlockShadow.module.scss';

const NextBlockShadow: FC<{
	colorScheme?: 'white' | 'black' | 'transparent';
}> = ({ colorScheme = 'black' }) => {
	return (
		<figure className={cn(s.container, s[`container--${colorScheme}`])}>
			<img
				className={s.scrollDownIcon}
				src={ARROW_DOWN}
				alt={messages.SCROLL_DOWN}
			/>
		</figure>
	);
};

export default NextBlockShadow;
