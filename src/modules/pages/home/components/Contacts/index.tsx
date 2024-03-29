import { forwardRef } from 'react';

import DecorativeLink from '@modules/common/components/DecorativeLink';

import { contactsLinks } from '@utils/data';
import messages from '@utils/messages';

import s from './Contacts.module.scss';

const Contacts = forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<article ref={ref} className={s.container} id="contacts">
			<p className={s.description}>{messages.I_HAVE_A_GREAT_DESIRE_TO_DEVELOP}</p>

			<ul className={s.links}>
				{contactsLinks.map((item) => (
					<li key={item.title}>
						<DecorativeLink
							className={s[`links-item`]}
							text={item.title}
							href={item.href}
						/>
					</li>
				))}
			</ul>
		</article>
	);
});

export default Contacts;
