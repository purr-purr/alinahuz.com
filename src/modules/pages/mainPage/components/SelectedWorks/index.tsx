import { forwardRef } from 'react';
import messages from '@helpers/messages';
import MainHeading from '@modules/common/components/MainHeading';
import SelectedWorksList from '@modules/pages/mainPage/components/SelectedWorks/SelectedWorksList';

import s from './SelectedWorks.module.scss';

const SelectedWorks = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <article ref={ref} className={s.container} id="works">
      <MainHeading text={messages.SELECTED_WORKS} isWhiteColor className={s.heading} />
      <SelectedWorksList />
    </article>
  );
});

export default SelectedWorks;
