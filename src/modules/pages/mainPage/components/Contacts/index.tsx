import { FC } from 'react';
import messages from '@helpers/messages';
import DecorativeLink from '@modules/common/components/DecorativeLink';
import { contactsLinks } from '@helpers/data';

import s from './Contacts.module.scss';

const Contacts: FC = () => {
  return (
    <article className={s.container} id="contacts">
      <p className={s.description}>{messages.I_HAVE_A_GREAT_DESIRE_TO_DEVELOP}</p>

      <ul className={s.links}>
        {contactsLinks.map((item) => (
          <li key={item.title}>
            <DecorativeLink isExternalLink text={item.title} href={item.href} />
          </li>
        ))}
      </ul>
    </article>
  );
};
export default Contacts;
