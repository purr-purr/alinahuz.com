import { forwardRef } from 'react';
import { MOBILE_BP } from '@helpers/const';
import { useMediaQuery } from '@modules/common/hooks';

import messages from '@helpers/messages';
import { certificatePicture } from '@helpers/data';
import SubHeading from '@modules/common/components/SubHeading';
import EducationList from '@modules/pages/mainPage/components/Education/EducationList';
import EducationDegree from '@modules/pages/mainPage/components/Education/EducationDegree';
import SimpleCarousel from '@modules/common/components/SimpleCarousel';

import s from './Education.module.scss';

interface IEducation {
  isActive: boolean;
}

const Education = forwardRef<HTMLDivElement, IEducation>((props, ref) => {
  const isMobile = useMediaQuery(MOBILE_BP);
  return (
    <article ref={ref} className={s.container} id="education">
      <aside>
        <SubHeading text={messages.EDUCATION} isWhiteColor />
        {!isMobile && <SimpleCarousel className={s.carousel} picturesData={certificatePicture} />}
      </aside>
      <div className={s.infoBlock}>
        <EducationList isActive={!isMobile && props.isActive} />
        <EducationDegree />
      </div>
    </article>
  );
});
export default Education;
