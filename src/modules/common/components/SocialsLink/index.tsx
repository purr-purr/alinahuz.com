import { FC } from 'react';

import s from './SocialsLink.module.scss';

const SocialsLink: FC<{
  text: string;
  href: string;
}> = ({ text, href }) => {
  return (
    <a className={s.container} href={href} target="_blank">
      {text}
    </a>
  );
};
export default SocialsLink;
