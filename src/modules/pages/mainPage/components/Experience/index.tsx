import { FC } from 'react';

import s from './Experience.module.scss';
import messages from '@helpers/messages';
import TextLink from '@modules/common/components/TextLink';
import SubHeading from '@modules/common/components/SubHeading';

const Experience: FC = () => {
  return (
    <article className={s.container} id="skills">
      <SubHeading text={messages.SKILLS} />
      <div className={s.infoBlock}>
        <p className={s.description}>{messages.MY_MAIN_TOOL_IS_FIGMA_I_HAVE_A_HIGH_LEVEL}</p>
        <TextLink text={messages.VIEW_CV} href={'#'} isButtonType />
      </div>
    </article>
  );
};
export default Experience;
