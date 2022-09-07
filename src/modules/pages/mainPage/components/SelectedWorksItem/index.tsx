import { FC } from 'react';
import cn from 'classnames';

import messages from '@helpers/messages';

import s from './SelectedWorksItem.module.scss';

const SelectedWorksItem: FC<{
  title: string;
  description: string;
  poster: string;
  number: number;
  isReverseState?: boolean;
}> = ({ title, description, poster, number, isReverseState = false }) => {
  const splitTitle = title.split(' ');

  return (
    <li className={s.container}>
      <div className={s.poster}>
        <img src={poster} alt={`${title} ${messages.POSTER}`} />
      </div>
      <div className={cn(s.info, { [s[`info--reverse`]]: isReverseState })}>
        <p className={cn(s.number, { [s[`number--reverse`]]: isReverseState })}>{number}</p>
        <h3 className={s.title}>
          {splitTitle.map((item) => (
            <span>{item}</span>
          ))}
        </h3>
        <p className={s.description}>{description}</p>
      </div>
    </li>
  );
};
export default SelectedWorksItem;
