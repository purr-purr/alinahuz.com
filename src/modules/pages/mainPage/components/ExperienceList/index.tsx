import { FC } from 'react';
import ExperienceListItem from '@modules/pages/mainPage/components/ExperienceListItem';
import { experience } from '@helpers/data';

import s from './ExperienceList.module.scss';

const ExperienceList: FC = () => {
  return (
    <ul className={s.container}>
      {experience.map((item, index) => (
        <ExperienceListItem
          key={index}
          title={item.title}
          workInfo={item.workInfo}
          responsibilities={item.responsibilities}
          achievements={item.achievements}
        />
      ))}
    </ul>
  );
};
export default ExperienceList;
