import { forwardRef } from 'react';
import useMediaQuery from '@modules/common/hooks/useMediaQuery';
import { MOBILE_BP } from '@helpers/const';
import messages from '@helpers/messages';
import MainHeading from '@modules/common/components/MainHeading';
import SelectedWorksList from '@modules/pages/mainPage/components/SelectedWorksList';

import s from './SelectedWorks.module.scss';

const SelectedWorks = forwardRef<HTMLDivElement>((props, ref) => {
  const isMobile = useMediaQuery(MOBILE_BP);
  return (
    <article ref={ref} className={s.container} id="works">
      {!isMobile && (
        <MainHeading
          text={messages.SELECTED_WORKS}
          isWhiteColor
          maxWidth={847}
          className={s.headingFigure}
        />
      )}
      <SelectedWorksList />
    </article>
  );
});
export default SelectedWorks;
