import { useContext, useState } from 'react';
import AppContext from '@modules/layout/context/AppContext';
import { useAnalyticsEventTracker, useMediaQuery } from '@modules/common/hooks';
import { MOBILE_BP } from '@helpers/const';
import messages from '@helpers/messages';
import { selectedWorks, SOCIALS_LINKS } from '@helpers/data';

import SelectedWorksItem from '@modules/pages/mainPage/components/SelectedWorks/SelectedWorksItem';
import DecorativeLink from '@modules/common/components/DecorativeLink';
import TextLink from '@modules/common/components/TextLink';

import s from './SelectedWorksList.module.scss';

const SelectedWorksList = () => {
  const isMobile = useMediaQuery(MOBILE_BP);
  const [fullView, setFullView] = useState(false);
  const sliceArray = fullView ? selectedWorks : selectedWorks.slice(0, 3);

  const { handleSwitchFullScreenCarouselMode, isFullScreenCarouselMode } = useContext(AppContext);

  const gaEventTracker = useAnalyticsEventTracker(`${messages.SELECTED_WORKS} ${messages.BLOCK}`);

  const seeMoreWorksButton = () => {
    setFullView(true);
    gaEventTracker(`${messages.CLICK}: ${messages.SEE_MORE_WORKS}`);
  };

  return (
    <>
      <ul className={s.container}>
        {sliceArray.map((item) => (
          <SelectedWorksItem
            key={item.number}
            onClick={() =>
              handleSwitchFullScreenCarouselMode(item.number, !isFullScreenCarouselMode.isActive)
            }
            title={item.title}
            description={item.description}
            number={item.number}
            poster={item.poster}
            isReverseState={!isMobile && item.reverseState}
          />
        ))}
      </ul>
      {fullView ? (
        <div className={s.findMore}>
          <p className={s[`findMore-text`]}>{messages.IF_YOU_WANT_YOU_CAN_FIND_MORE}</p>
          <div className={s[`findMore-links`]}>
            <DecorativeLink text={messages.DRIBBBLE} href={SOCIALS_LINKS.dribbble} />
            <DecorativeLink text={messages.BEHANCE} href={SOCIALS_LINKS.behance} />
          </div>
        </div>
      ) : (
        <div className={s.seeMore}>
          <TextLink
            className={s[`seeMore-item`]}
            onClick={() => seeMoreWorksButton()}
            text={messages.SEE_MORE_WORKS}
            type="button"
            isWhiteColorState
            size="md"
          />
        </div>
      )}
    </>
  );
};
export default SelectedWorksList;
