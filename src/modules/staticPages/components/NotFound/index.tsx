import { useEffect } from 'react';

import TextLink from '@modules/common/components/TextLink';

import messages from '@utils/messages';

import s from './NotFound.module.scss';

const PageNotFound = () => {
	useEffect(() => {
		document.title = `404 | Alina Huz`;
	}, []);

	return (
		<section className={s.container}>
			<h1 className={s.title}>{messages.ERROR_CODE}</h1>
			<p className={s.description}>{messages.IM_SORRY_BUT_PAGE_NOT_AVAILABLE}</p>
			<TextLink isWhiteColorState text={messages.GO_TO_MAIN} href="/" size="xs" />
		</section>
	);
};

export default PageNotFound;
