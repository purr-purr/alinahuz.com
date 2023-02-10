import { useContext, useState } from 'react';

import DecorativeLink from '@modules/common/components/DecorativeLink';
import TextLink from '@modules/common/components/TextLink';
import AppContext from '@modules/layout/context/AppContext';
import SelectedWorksItem from '@modules/pages/home/components/SelectedWorksItem';

import { useMediaQuery } from '@modules/common/hooks';

import { MOBILE_BP } from '@utils/const';
import { selectedWorks, SOCIALS_LINKS } from '@utils/data';
import messages from '@utils/messages';

import s from './SelectedWorksList.module.scss';

const SelectedWorksList = () => {
	const isMobile = useMediaQuery(MOBILE_BP);
	const [fullView, setFullView] = useState(false);
	const sliceArray = fullView ? selectedWorks : selectedWorks.slice(0, 3);

	const {
		handleSwitchFullScreenCarouselMode,
		isFullScreenCarouselMode,
	} = useContext(AppContext);

	const seeMoreWorksButton = () => {
		setFullView(true);
	};

	return (
		<>
			<ul className={s.container}>
				{sliceArray.map((item) => (
					<SelectedWorksItem
						key={item.number}
						onClick={() =>
							handleSwitchFullScreenCarouselMode(
								item.number,
								!isFullScreenCarouselMode.isActive,
							)
						}
						title={item.title}
						description={item.description}
						number={item.number}
						poster={item.poster}
						isReverseState={!isMobile && item.reverseState}
					/>
				))}
			</ul>

			<div className={fullView ? s.findMore : s.seeMore}>
				{fullView ? (
					<>
						<p className={s[`findMore-text`]}>
							{messages.IF_YOU_WANT_YOU_CAN_FIND_MORE}
						</p>
						<div className={s[`findMore-links`]}>
							<DecorativeLink text={messages.DRIBBBLE} href={SOCIALS_LINKS.dribbble} />
							<DecorativeLink text={messages.BEHANCE} href={SOCIALS_LINKS.behance} />
						</div>
					</>
				) : (
					<TextLink
						className={s[`seeMore-item`]}
						onClick={() => seeMoreWorksButton()}
						text={messages.SEE_MORE_WORKS}
						type="button"
						isWhiteColorState
						size="md"
					/>
				)}
			</div>
		</>
	);
};
export default SelectedWorksList;
