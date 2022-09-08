import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import s from './DecorativeLink.module.scss';

const DecorativeLink: FC<{
  text: string;
  href: string;
  isExternalLink?: boolean;
  isBlackColorState?: boolean;
}> = ({ text, href, isExternalLink = false, isBlackColorState = false }) => {
  return isExternalLink ? (
    <a
      className={cn(s.container, { [s[`container--black`]]: isBlackColorState })}
      href={href}
      target="_blank"
    >
      {text}
    </a>
  ) : (
    <Link className={cn(s.container, { [s[`container--black`]]: isBlackColorState })} to={href}>
      {text}
    </Link>
  );
};
export default DecorativeLink;
