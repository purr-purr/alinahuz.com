import { FC } from 'react';
import { educationCourses } from '@helpers/data';

import EducationListItem from '@modules/pages/mainPage/components/EducationListItem';

import s from './EducationList.module.scss';

const EducationList: FC = () => {
  return (
    <ul className={s.container}>
      {educationCourses.map((item) => (
        <EducationListItem
          key={item.title}
          title={item.title}
          platform={item.platform}
          date={item.date}
        />
      ))}
    </ul>
  );
};
export default EducationList;
