import { forwardRef } from 'react';
import { MOBILE_BP } from '@helpers/const';
import useMediaQuery from '@modules/common/hooks/useMediaQuery';

import messages from '@helpers/messages';
import { certificatePicture } from '@helpers/data';
import SubHeading from '@modules/common/components/SubHeading';
import EducationList from '@modules/pages/mainPage/components/EducationList';
import EducationDegree from '@modules/pages/mainPage/components/EducationDegree';
import SimpleCarousel from '@modules/common/components/SimpleCarousel';

import s from './Education.module.scss';

interface IEducation {
  isActive: boolean;
}

const Education = forwardRef<HTMLDivElement, IEducation>((props, ref) => {
  const isMobile = useMediaQuery(MOBILE_BP);
  return (
    <article ref={ref} className={s.container} id="education">
      <div>
        <SubHeading text={messages.EDUCATION} isWhiteColor />
        {!isMobile && <SimpleCarousel className={s.carousel} picturesData={certificatePicture} />}
      </div>
      <div className={s.infoBlock}>
        <EducationList isActive={props.isActive} />
        <EducationDegree />
      </div>
    </article>
  );
});
export default Education;
