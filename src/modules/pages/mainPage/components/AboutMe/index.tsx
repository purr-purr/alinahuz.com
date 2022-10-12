import { forwardRef } from 'react';
import cn from 'classnames';

import messages from '@helpers/messages';
import MainHeading from '@modules/common/components/MainHeading';

import s from './AboutMe.module.scss';

interface IAboutMe {
  isActive: boolean;
}

const AboutMe = forwardRef<HTMLDivElement, IAboutMe>((props, ref) => {
  return (
    <article ref={ref} className={cn(s.container, props.isActive && s.active)} id="about">
      <MainHeading className={s.heading} text={messages.ABOUT_ME} isWhiteColor maxWidth={815} />
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
});
export default AboutMe;
