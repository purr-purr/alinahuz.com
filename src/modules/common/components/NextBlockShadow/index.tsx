import { FC } from 'react';
import cn from 'classnames';
import ARROW_DOWN from '@assets/images/arrow_down_icon--white.svg';

import s from './NextBlockShadow.module.scss';

const NextBlockShadow: FC<{
  colorScheme?: 'white' | 'black' | 'transparent';
}> = ({ colorScheme = 'black' }) => {
  return (
    <div className={cn(s.container, s[`container--${colorScheme}`])}>
      <img className={s.scrollDownIcon} src={ARROW_DOWN} alt="scroll down icon" />
    </div>
  );
};

export default NextBlockShadow;
