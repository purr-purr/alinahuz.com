import messages from '@helpers/messages';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.container}>
      <p>
        {messages.ALL_RIGHTS_RESERVED}
        <span>{messages.CURRENT_YEAR}</span>
      </p>
    </footer>
  );
};

export default Footer;
