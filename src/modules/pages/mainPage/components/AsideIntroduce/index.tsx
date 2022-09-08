import { FC } from 'react';
import cn from 'classnames';

import messages from 'src/helpers/messages';
import MainHeading from '@modules/common/components/MainHeading';

import s from './AsideIntroduce.module.scss';

const AsideIntroduce: FC<{
  isOpen?: boolean;
}> = ({ isOpen }) => {
  return (
    <aside
      style={{ width: isOpen ? '100%' : '79px' }}
      className={cn(s.container, { [s[`container--close`]]: !isOpen })}
    >
      {isOpen ? (
        <div className={s.fullInfo}>
          <p className={s[`fullInfo-hello`]}>
            <i>{messages.HELLO}</i>
          </p>
          <p>{messages.MY_NAME_IS_ALINA_HUZ_AND_I}</p>
          <MainHeading text={messages.UI_UX_DESIGNER} isH1Tag className={s[`fullInfo-title`]} />
          <p className={s[`fullInfo-about`]}>{messages.DESIGN_FOR_ME_IS}</p>
          <p>{messages.I_WANT_TO_HELP}</p>
        </div>
      ) : (
        <div className={s.shortHeading}>
          <p>{messages.UI_UX_DESIGNER}</p>
          <p>{messages.BASED_IN_IRELAND}</p>
        </div>
      )}
    </aside>
  );
};

export default AsideIntroduce;
