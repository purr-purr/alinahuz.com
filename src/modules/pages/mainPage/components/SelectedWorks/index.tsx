import { FC } from 'react';

import messages from '@helpers/messages';
import MainHeading from '@modules/common/components/MainHeading';
import SelectedWorksList from '@modules/pages/mainPage/components/SelectedWorksList';

import s from './SelectedWorks.module.scss';
import NextBlockShadow from '@modules/common/components/NextBlockShadow';

const SelectedWorks: FC = () => {
  return (
    <article className={s.container} id="works">
      <MainHeading
        text={messages.SELECTED_WORKS}
        isWhiteColor
        maxWidth={847}
        className={s.headingFigure}
      />
      <SelectedWorksList />
      <NextBlockShadow colorScheme="white" />
    </article>
  );
};
export default SelectedWorks;
