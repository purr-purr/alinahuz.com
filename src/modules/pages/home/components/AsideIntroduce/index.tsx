import { FC } from 'react';

import MainHeading from '@modules/common/components/MainHeading';
import NextBlockShadow from '@modules/common/components/NextBlockShadow';
import cn from 'classnames';

import { useMediaQuery } from '@modules/common/hooks';

import { MOBILE_BP } from '@utils/const';
import messages from '@utils/messages';

import s from './AsideIntroduce.module.scss';

const AsideIntroduce: FC<{
	isOpen?: boolean;
}> = ({ isOpen }) => {
	const isMobile = useMediaQuery(MOBILE_BP);

	return (
		<aside
			style={{ width: isOpen ? '100%' : isMobile && !isOpen ? '50px' : '79px' }}
			className={cn(s.container, {
				[s[`container--close`]]: !isOpen,
			})}
		>
			{isOpen ? (
				<>
					<article className={s.fullInfo}>
						<p className={cn(s[`fullInfo-hello`], s.appearance, s.step1)}>
							<i>{messages.HELLO}</i>
						</p>
						<p className={cn(s.appearance, s.step2)}>
							{messages.MY_NAME_IS_ALINA_HUZ_AND_I}
						</p>
						<MainHeading
							text={messages.UI_UX_DESIGNER}
							isH1Tag
							className={cn(s[`fullInfo-title`], s.appearance, s.step3)}
						/>
						<p className={cn(s[`fullInfo-about`], s.appearance, s.step4)}>
							{messages.DESIGN_FOR_ME_IS}
						</p>
						<p className={cn(s.appearance, s.step5)}>{messages.I_WANT_TO_HELP}</p>
					</article>

					<div className={cn(s.appearance, s.step6)}>
						<NextBlockShadow colorScheme="black" />
					</div>
				</>
			) : (
				<article className={s.shortHeading}>
					<p>{messages.UI_UX_DESIGNER}</p>
					<p>{messages.BASED_IN_IRELAND}</p>
				</article>
			)}
		</aside>
	);
};

export default AsideIntroduce;
