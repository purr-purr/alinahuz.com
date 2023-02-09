import messages from '@utils/messages';

import ARROW_TOP from '@modules/layout/assets/footer/arrow_top_icon--gray.svg';

import s from './Footer.module.scss';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className={s.container}>
			<button className={s.scrollTop} onClick={scrollToTop}>
				<img src={ARROW_TOP} alt={messages.SCROLL_TOP} />
			</button>
			<p>
				{messages.ALL_RIGHTS_RESERVED}
				<span>{currentYear}</span>
			</p>
		</footer>
	);
};

export default Footer;
