import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import s from './TextLink.module.scss';

const TextLink: FC<{
  text: string;
  href?: string;
  isTextType?: boolean;
  isWhiteColorState?: boolean;
  size?: 'sm' | 'md';
}> = ({ text, href, isTextType = false, isWhiteColorState = false, size = 'sm' }) => {
  return isTextType ? (
    <p
      className={cn(
        s.container,
        isWhiteColorState && s[`container--white`],
        size && s[`container--${size}`],
      )}
    >
      {text}
    </p>
  ) : (
    <Link
      className={cn(
        s.container,
        isWhiteColorState && s[`container--white`],
        size && s[`container--${size}`],
      )}
      to={href ? href : ''}
    >
      {text}
    </Link>
  );
};
export default TextLink;
