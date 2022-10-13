import { FC } from 'react';
import { educationCourses } from '@helpers/data';

import EducationListItem from '@modules/pages/mainPage/components/Education/EducationListItem';

import s from './EducationList.module.scss';

const EducationList: FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <ul className={s.container}>
      {educationCourses.map((item, index) => (
        <EducationListItem
          isActive={isActive}
          id={index}
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
