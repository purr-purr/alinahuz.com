import { FC } from 'react';
import cn from 'classnames';

import s from './MainHeading.module.scss';

const MainHeading: FC<{
  text: string;
  className?: string;
  isH1Tag?: boolean;
  isWhiteColor?: boolean;
  maxWidth?: number;
}> = ({ text, className, isH1Tag = false, isWhiteColor = false, maxWidth }) => {
  return isH1Tag ? (
    <h1
      style={maxWidth ? { maxWidth: `${maxWidth}px` } : undefined}
      className={cn(s.container, className, { [s[`container--white`]]: isWhiteColor })}
    >
      {text}
    </h1>
  ) : (
    <h2
      style={maxWidth ? { maxWidth: `${maxWidth}px` } : undefined}
      className={cn(s.container, className, { [s[`container--white`]]: isWhiteColor })}
    >
      {text}
    </h2>
  );
};
export default MainHeading;
