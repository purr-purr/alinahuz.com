import { createElement, FC } from 'react';
import cn from 'classnames';

import s from './MainHeading.module.scss';

const MainHeading: FC<{
  text: string;
  className?: string;
  isH1Tag?: boolean;
  isWhiteColor?: boolean;
  maxWidth?: number;
}> = ({ text, className, isH1Tag = false, isWhiteColor = false, maxWidth }) => {
  const classNameList = cn(s.container, className, { [s[`container--white`]]: isWhiteColor });
  const styles = maxWidth ? { maxWidth: `${maxWidth}px` } : undefined;

  const element = createElement(
    isH1Tag ? 'h1' : 'h2',
    { className: classNameList, style: styles },
    text,
  );
  return element;
};
export default MainHeading;
