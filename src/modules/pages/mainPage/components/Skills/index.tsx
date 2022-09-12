import { FC } from 'react';
import { CV_PDF } from '@helpers/data';
import messages from '@helpers/messages';

import TextLink from '@modules/common/components/TextLink';
import SubHeading from '@modules/common/components/SubHeading';

import s from './Skills.module.scss';

const Skills: FC = () => {
  return (
    <article className={s.container} id="skills">
      <SubHeading text={messages.SKILLS} />
      <div className={s.infoBlock}>
        <p className={s.description}>{messages.MY_MAIN_TOOL_IS_FIGMA_I_HAVE_A_HIGH_LEVEL}</p>
        <TextLink text={messages.VIEW_CV} href={CV_PDF} />
      </div>
    </article>
  );
};
export default Skills;
