import { FC } from 'react';
import { HashLink } from 'react-router-hash-link';
import cn from 'classnames';

import s from './DecorativeLink.module.scss';

const DecorativeLink: FC<{
  text: string;
  href: string;
  isExternalLink?: boolean;
  isBlackColorState?: boolean;
  onClick?: () => void;
  className?: string;
}> = ({ text, href, isExternalLink = true, isBlackColorState = false, onClick, className }) => {
  const classNameList = cn(
    s.container,
    { [s[`container--black`]]: isBlackColorState },
    className && className,
  );

  return isExternalLink ? (
    <a className={classNameList} href={href} onClick={onClick} target="_blank">
      {text}
    </a>
  ) : (
    <HashLink className={classNameList} to={href} onClick={onClick}>
      {text}
    </HashLink>
  );
};

export default DecorativeLink;
