import { FC } from 'react';

import s from './EducationListItem.module.scss';

const EducationListItem: FC<{
  title: string;
  platform: string;
  date: string;
}> = ({ title, platform, date }) => {
  return (
    <li className={s.container}>
      <h5 className={s.title}>{title}</h5>
      <p className={s.description}>
        {platform}
        <br />
        {date}
      </p>
    </li>
  );
};
export default EducationListItem;
