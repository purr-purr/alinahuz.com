import { FC, useState } from 'react';

import messages from '@helpers/messages';
import { selectedWorks } from '@helpers/data';
import SelectedWorksItem from '@modules/pages/mainPage/components/SelectedWorksItem';
import SocialsLink from '@modules/common/components/SocialsLink';

import ARROW_DOWN from '@assets/images/arrow_down_icon--white.svg';

import s from './SelectedWorksList.module.scss';

const SelectedWorksList: FC = () => {
  const [fullView, setFullView] = useState(false);
  const sliceArray = fullView ? selectedWorks : selectedWorks.slice(0, 3);

  return (
    <>
      <ul className={s.container}>
        {sliceArray.map((item) => (
          <SelectedWorksItem
            key={item.number}
            title={item.title}
            description={item.description}
            number={item.number}
            poster={item.poster}
            isReverseState={item.reverseState}
          />
        ))}
      </ul>

      <div className={s.blockFooter}>
        {fullView ? (
          <div className={s.findMore}>
            <p className={s[`findMore-text`]}>{messages.IF_YOU_WANT_YOU_CAN_FIND_MORE}</p>
            <div className={s[`findMore-links`]}>
              <SocialsLink text={messages.DRIBBBLE} href={'#'} />
              <SocialsLink text={messages.BEHANCE} href={'#'} />
            </div>
          </div>
        ) : (
          <div className={s.seeMore}>
            <button className={s[`seeMore-item`]} onClick={() => setFullView(true)}>
              {messages.SEE_MORE_WORKS}
            </button>
          </div>
        )}
        <img className={s.scrollDownIcon} src={ARROW_DOWN} alt="scroll down icon" />
      </div>
    </>
  );
};
export default SelectedWorksList;
