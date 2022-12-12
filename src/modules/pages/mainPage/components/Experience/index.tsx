import { forwardRef } from 'react';
import messages from '@helpers/messages';
import SubHeading from '@modules/common/components/SubHeading';
import ExperienceList from '@modules/pages/mainPage/components/Experience/ExperienceList';

import s from './Experience.module.scss';

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <article ref={ref} className={s.container}>
      <SubHeading text={messages.EXPERIENCE} />
      <div className={s.infoBlock}>
        <p className={s.description}>{messages.I_HAVE_EXPERIENCE_DESIGNING_COMMERCE}</p>
        <ExperienceList />
      </div>
    </article>
  );
});

export default Experience;
