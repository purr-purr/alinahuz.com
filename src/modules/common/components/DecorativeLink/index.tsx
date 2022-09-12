import { FC } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import cn from 'classnames';

import s from './DecorativeLink.module.scss';

const DecorativeLink: FC<{
  text: string;
  href: string;
  isExternalLink?: boolean;
  isBlackColorState?: boolean;
  onClick?: () => void;
}> = ({ text, href, isExternalLink = false, isBlackColorState = false, onClick }) => {
  return isExternalLink ? (
    <a
      className={cn(s.container, { [s[`container--black`]]: isBlackColorState })}
      href={href}
      target="_blank"
      onClick={onClick}
    >
      {text}
    </a>
  ) : (
    <Link
      className={cn(s.container, { [s[`container--black`]]: isBlackColorState })}
      to={href}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};
export default DecorativeLink;
