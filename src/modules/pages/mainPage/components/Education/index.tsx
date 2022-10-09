import { FC, useContext, useEffect, useRef } from 'react';
import messages from '@helpers/messages';
import { certificatePicture } from '@helpers/data';
import SubHeading from '@modules/common/components/SubHeading';
import EducationList from '@modules/pages/mainPage/components/EducationList';
import EducationDegree from '@modules/pages/mainPage/components/EducationDegree';
import SimpleCarousel from '@modules/common/components/SimpleCarousel';
import AppContext from '@modules/layout/context/AppContext';
import useOnScreen from '../../../../common/hooks/useOnScreen';

import s from './Education.module.scss';

const Education: FC = () => {
  const { handleSwitchDarkMode } = useContext(AppContext);

  const educationRef = useRef<HTMLDivElement>(null);
  const isEducationVisible = useOnScreen(educationRef);

  useEffect(() => {
    if (isEducationVisible) {
      handleSwitchDarkMode(false);
    } else {
      handleSwitchDarkMode(true);
    }
  }, [isEducationVisible]);
  return (
    <article ref={educationRef} className={s.container} id="education">
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
