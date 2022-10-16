import { forwardRef } from 'react';
import messages from '@helpers/messages';

import TextLink from '@modules/common/components/TextLink';
import SubHeading from '@modules/common/components/SubHeading';

import s from './Skills.module.scss';

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <article ref={ref} className={s.container} id="skills">
      <SubHeading text={messages.SKILLS} />
      <div className={s.infoBlock}>
        <p className={s.description}>{messages.MY_MAIN_TOOL_IS_FIGMA_I_HAVE_A_HIGH_LEVEL}</p>
        <TextLink inNewTab text={messages.VIEW_CV} href="/Alina_Huz_UI_UX_designer_CV.pdf" />
      </div>
    </article>
  );
});
export default Skills;
