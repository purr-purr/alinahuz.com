import { FC } from 'react';
import cn from 'classnames';

import s from './BurgerMenuIcon.module.scss';

const BurgerMenuIcon: FC<{
  isBlackColor?: boolean;
  onClick?: () => void;
  isOpenState: boolean;
}> = ({ isBlackColor = false, onClick, isOpenState = false }) => {
  return (
    <button onClick={onClick} className={cn(s.container, isOpenState && s[`container--short`])}>
      <svg className={s.icon} viewBox="0 0 53 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          className={s[`icon-line`]}
          x={isOpenState ? undefined : '0.697266'}
          transform={
            isOpenState
              ? 'matrix(0.995515 0.0946025 -0.0802869 0.996772 0.847656 0.21582)'
              : undefined
          }
          fill={isBlackColor ? '#0c0c0c' : 'white'}
        />
        <rect
          className={s[`icon-line`]}
          x={isOpenState ? undefined : '0.697266'}
          y={isOpenState ? undefined : '5.25'}
          transform={
            isOpenState
              ? 'matrix(0.995515 -0.0946025 0.0802869 0.996772 0.847656 4.91309)'
              : undefined
          }
          fill={isBlackColor ? '#0c0c0c' : 'white'}
        />
      </svg>
    </button>
  );
};

export default BurgerMenuIcon;
