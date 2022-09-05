import { FC } from 'react';

import s from './AsideIntroduce.module.scss';
import cn from 'classnames';
import messages from 'src/helpers/messages';

const AsideIntroduce: FC<{
  isOpen?: boolean;
}> = ({ isOpen }) => {
  return (
    <aside
      style={{ width: isOpen ? '100%' : '79px' }}
      className={cn(s.container, { [s.isClose]: !isOpen })}
    >
      {isOpen ? (
        <div className={s.fullInfo}>
          <p>
            <i>{messages.HELLO}</i>
          </p>
          <p>{messages.MY_NAME_IS_ALINA_HUZ_AND_I}</p>
          <h1>{messages.UI_UX_DESIGNER}</h1>
          <p>{messages.DESIGN_FOR_ME_IS}</p>
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
