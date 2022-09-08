import { FC } from 'react';

import messages from '@helpers/messages';
import MainHeading from '@modules/common/components/MainHeading';

import s from './AboutMe.module.scss';

const AboutMe: FC = () => {
  return (
    <article className={s.container} id="about">
      <MainHeading text={messages.ABOUT_ME} isWhiteColor maxWidth={815} />
      <p className={s.description}>{messages.I_DECIDED_TO_BECOME_A_DESIGNER}</p>

      <ul className={s.columns}>
        <li>
          <p>{messages.I_HAVE_A_PHARMACEUTICAL_EDUCATION}</p>
        </li>
        <li>
          <p>{messages.THE_DECISION_TO_CHANGE_CAREERS_CAME_EASILY}</p>
        </li>
        <li>
          <p>{messages.DUE_TO_THE_WAR_IN_MY_COUNTY}</p>
        </li>
      </ul>
    </article>
  );
};
export default AboutMe;