import { FC } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import s from './TextLink.module.scss';

const TextLink: FC<{
  text: string;
  href?: string;
  className?: string;
  type?: 'button' | 'link' | 'text';
  isWhiteColorState?: boolean;
  size?: 'sm' | 'md' | 'xs';
  onClick?: () => void;
}> = ({
  text,
  href,
  onClick,
  isWhiteColorState = false,
  size = 'sm',
  type = 'link',
  className,
}) => {
  const classNameList = cn(
    s.container,
    isWhiteColorState && s[`container--white`],
    size && s[`container--${size}`],
    className && className,
  );

  return type === 'button' ? (
    <button className={classNameList} onClick={onClick}>
      {text}
    </button>
  ) : type === 'text' ? (
    <p className={classNameList} onClick={onClick}>
      {text}
    </p>
  ) : (
    <Link className={classNameList} to={href ? href : ''} onClick={onClick}>
      {text}
    </Link>
  );
};
export default TextLink;
