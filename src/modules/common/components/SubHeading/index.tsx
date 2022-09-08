import { FC } from 'react';
import cn from 'classnames';

import s from './SubHeading.module.scss';

const SubHeading: FC<{
  text: string;
  isWhiteColor?: boolean;
}> = ({ text, isWhiteColor = false }) => {
  return <h3 className={cn(s.container, { [s[`container--white`]]: isWhiteColor })}>{text}</h3>;
};
export default SubHeading;
