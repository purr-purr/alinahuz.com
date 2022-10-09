import { FC } from 'react';

import s from './EducationListItem.module.scss';

const EducationListItem: FC<{
  title: string;
  platform: string;
  date: number;
}> = ({ title, platform, date }) => {
  return (
    <li className={s.container}>
      <svg height="280" width="262" xmlns="http://www.w3.org/2000/svg">
        <rect className={s.shape1} height="280" width="262" />
        <rect className={s.shape2} height="280" width="262" />
      </svg>
      <div className={s.inner}>
        <h5 className={s.title}>{title}</h5>
        <p className={s.description}>
          {platform}
          <br />
          {date}
        </p>
      </div>
    </li>
  );
};
export default EducationListItem;
