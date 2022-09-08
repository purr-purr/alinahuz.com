import { FC } from 'react';

import messages from '@helpers/messages';
import MainHeading from '@modules/common/components/MainHeading';
import SelectedWorksList from '@modules/pages/mainPage/components/SelectedWorksList';

import s from './SelectedWorks.module.scss';

const SelectedWorks: FC = () => {
  return (
    <div className={s.container}>
      <MainHeading
        text={messages.SELECTED_WORKS}
        isWhiteColor
        maxWidth={847}
        className={s.headingFigure}
      />
      <SelectedWorksList />
    </div>
  );
};
export default SelectedWorks;
