import { forwardRef } from 'react';
import messages from '@helpers/messages';
import SubHeading from '@modules/common/components/SubHeading';
import ExperienceList from '@modules/pages/mainPage/components/ExperienceList';

import s from './Experience.module.scss';

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <article ref={ref} className={s.container}>
      <SubHeading text={messages.EXPERIENCE} />
      <div className={s.infoBlock}>
        <p className={s.description}>{messages.MY_MAIN_TOOL_IS_FIGMA_I_HAVE_A_HIGH_LEVEL}</p>
        <ExperienceList />
      </div>
    </article>
  );
});
export default Experience;
