import { FC } from 'react';
import messages from '@helpers/messages';
import SubHeading from '@modules/common/components/SubHeading';
import EducationList from '@modules/pages/mainPage/components/EducationList';
import EducationDegree from '@modules/pages/mainPage/components/EducationDegree';

import s from './Education.module.scss';

const Education: FC = () => {
  return (
    <article className={s.container}>
      <SubHeading text={messages.EDUCATION} isWhiteColor />
      <div className={s.infoBlock}>
        <EducationList />
        <EducationDegree />
      </div>
    </article>
  );
};
export default Education;
