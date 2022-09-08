import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import s from './TextLink.module.scss';

const TextLink: FC<{
  text: string;
  href?: string;
  isTextType?: boolean;
  isBlackColorState?: boolean;
}> = ({ text, href, isTextType = false, isBlackColorState = false }) => {
  return isTextType ? (
    <p className={cn(s.container, { [s[`container--black`]]: isBlackColorState })}>{text}</p>
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
