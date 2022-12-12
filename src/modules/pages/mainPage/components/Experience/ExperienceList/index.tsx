import { experience } from '@helpers/data';
import ExperienceListItem from '@modules/pages/mainPage/components/Experience/ExperienceListItem';

import s from './ExperienceList.module.scss';

const ExperienceList = () => {
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
