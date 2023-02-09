import { FC } from 'react';

import cn from 'classnames';

import messages from '@utils/messages';

import s from './SelectedWorksItem.module.scss';

const SelectedWorksItem: FC<{
	title: string;
	description: string;
	poster: string;
	number: number;
	isReverseState?: boolean;
	onClick?: () => void;
}> = ({
	title,
	description,
	poster,
	number,
	isReverseState = false,
	onClick,
}) => {
	const splitTitle = title.split(' ');

	return (
		<li className={s.container} onClick={onClick}>
			<figure className={cn(s.poster, { [s[`poster--reverse`]]: isReverseState })}>
				<img src={poster} alt={`${title} ${messages.POSTER}`} />
			</figure>
			<div className={cn(s.info, { [s[`info--reverse`]]: isReverseState })}>
				<p className={cn(s.number, { [s[`number--reverse`]]: isReverseState })}>
					{number}
				</p>
				<h3 className={s.title}>
					{splitTitle.map((item, index) => (
						<span key={index}>{item}</span>
					))}
				</h3>
				<p className={s.description}>{description}</p>
			</div>
		</li>
	);
};

export default SelectedWorksItem;
