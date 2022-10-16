import { createElement, FC } from 'react';
import cn from 'classnames';

import s from './TextLink.module.scss';

const TextLink: FC<{
  text: string;
  href?: string;
  className?: string;
  type?: 'button' | 'link' | 'text';
  inNewTab?: boolean;
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
  inNewTab = false,
}) => {
  const classNameList = cn(
    s.container,
    isWhiteColorState && s[`container--white`],
    size && s[`container--${size}`],
    className && className,
  );

  const element = createElement(
    type === 'button' ? 'button' : type === 'text' ? 'p' : 'a',
    {
      className: classNameList,
      onClick: onClick,
      target: inNewTab ? '_blank' : '_self',
      href: href,
    },
    text,
  );

  return element;
};
export default TextLink;
