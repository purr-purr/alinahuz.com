import messages from '@helpers/messages';

import s from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={s.container}>
      <p>
        {messages.ALL_RIGHTS_RESERVED}
        <span>{currentYear}</span>
      </p>
    </footer>
  );
};

export default Footer;
