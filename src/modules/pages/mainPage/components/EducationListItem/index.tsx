import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import s from './EducationListItem.module.scss';

const EducationListItem: FC<{
  title: string;
  platform: string;
  date: number;
  isActive: boolean;
  id: number;
}> = ({ title, platform, date, isActive, id }) => {
  const [animationActive, setAnimationActive] = useState(false);
  const delayTime = Number(id + 1 + '000');

  const timeoutAnimation = (delay: number) => {
    let timer = setTimeout(() => {
      setAnimationActive(true);
    }, delay);

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    isActive && timeoutAnimation(delayTime);
  }, [isActive]);

  return (
    <li className={cn(s.container, animationActive && s.active)}>
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
