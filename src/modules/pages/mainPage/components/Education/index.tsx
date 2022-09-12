import { FC } from 'react';
import messages from '@helpers/messages';
import SubHeading from '@modules/common/components/SubHeading';
import EducationList from '@modules/pages/mainPage/components/EducationList';
import EducationDegree from '@modules/pages/mainPage/components/EducationDegree';

import s from './Education.module.scss';
import NextBlockShadow from '@modules/common/components/NextBlockShadow';

const Education: FC = () => {
  return (
    <article className={s.container} id="education">
      <SubHeading text={messages.EDUCATION} isWhiteColor />
      <div className={s.infoBlock}>
        <EducationList />
        <EducationDegree />
      </div>
      <NextBlockShadow colorScheme="white" />
    </article>
  );
};
export default Education;
