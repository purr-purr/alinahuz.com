import { FC } from 'react';
import messages from '@helpers/messages';
import { certificatePicture } from '@helpers/data';
import SubHeading from '@modules/common/components/SubHeading';
import EducationList from '@modules/pages/mainPage/components/EducationList';
import EducationDegree from '@modules/pages/mainPage/components/EducationDegree';
import SimpleCarousel from '@modules/common/components/SimpleCarousel';

import s from './Education.module.scss';

const Education: FC = () => {
  return (
    <article className={s.container} id="education">
      <div>
        <SubHeading text={messages.EDUCATION} isWhiteColor />
        <SimpleCarousel className={s.carousel} picturesData={certificatePicture} />
      </div>
      <div className={s.infoBlock}>
        <EducationList />
        <EducationDegree />
      </div>
    </article>
  );
};
export default Education;
