import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import s from './TextLink.module.scss';

const TextLink: FC<{
  text: string;
  href?: string;
  isButtonType?: boolean;
  isBlackColorState?: boolean;
}> = ({ text, href, isButtonType = false, isBlackColorState = false }) => {
  return isButtonType ? (
    <button className={cn(s.container, { [s[`container--black`]]: isBlackColorState })}>
      {text}
    </button>
  ) : (
    <Link
      className={cn(s.container, { [s[`container--black`]]: isBlackColorState })}
      to={href ? href : ''}
    >
      {text}
    </Link>
  );
};
export default TextLink;
