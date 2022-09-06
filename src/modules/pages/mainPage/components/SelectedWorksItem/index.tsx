import { FC } from 'react';

import messages from '../../../../../helpers/messages';

import s from './SelectedWorksItem.module.scss';

const SelectedWorksItem: FC<{
  title: string;
  description: string;
  poster: string;
  number: number;
  isLeftSideState?: boolean;
}> = ({ title, description, poster, number, isLeftSideState = false }) => {
  return (
    <li className={s.container}>
      <div className={s.poster}>
        <img src={poster} alt={`${title} ${messages.POSTER}`} />
      </div>
      <div className={s.info}>
        <p className={s.number}>{number}</p>
        <h3 className={s.title}>{title}</h3>
        <p className={s.description}>{description}</p>
      </div>
    </li>
  );
};
export default SelectedWorksItem;
