import {
	getCertificatePath,
	getPosterPath,
	getScreenShotsPath,
} from '@utils/index';

import messages from './messages';

export const certificatePicture = [
	{ path: getCertificatePath('first') },
	{ path: getCertificatePath('second') },
	{ path: getCertificatePath('third') },
	{ path: getCertificatePath('four') },
];

export const menuLinks = [
	{ title: messages.MAIN, link: '/' },
	{ title: messages.WORKS, link: '/#works' },
	{ title: messages.ABOUT_ME, link: '/#about' },
	{ title: messages.SKILLS, link: '/#skills' },
	{ title: messages.EDUCATION, link: '/#education' },
	{ title: messages.CONTACTS, link: '/#contacts' },
];

export const educationCourses = [
	{
		title: 'Digital Skills: User Experience',
		platform: 'FutureLearn',
		date: 2022,
	},
	{
		title: 'Design Basics',
		platform: 'Mate Academy',
		date: 2022,
	},
	{
		title: 'UX from scratch: how to become a UI designer',
		platform: 'Udemy',
		date: 2022,
	},
	{
		title: 'UX Crash Course: Fundamental',
		platform: 'Information resource "Medium"',
		date: 2019,
	},
	{
		title: 'Web designer course ',
		platform: 'Educational platform "WayUp"',
		date: 2019,
	},
];

export const SOCIALS_LINKS = {
	linkedin: 'https://www.linkedin.com/in/alina-huz-design/',
	behance: 'https://www.behance.net/alinahuz',
	dribbble: 'https://dribbble.com/Adelhaid',
	mail: 'mailto:alina.huz.design@gmail.com',
};

export const contactsLinks = [
	{
		title: messages.MAIL_ME,
		href: SOCIALS_LINKS.mail,
	},
	{
		title: messages.LINKEDIN,
		href: SOCIALS_LINKS.linkedin,
	},
	{
		title: messages.BEHANCE,
		href: SOCIALS_LINKS.behance,
	},
	{
		title: messages.DRIBBBLE,
		href: SOCIALS_LINKS.dribbble,
	},
];

export const selectedWorks = [
	{
		poster: getPosterPath('web'),
		number: 1,
		isBlackState: true,
		reverseState: false,
		title: 'Web-dev portfolio',
		description:
			'Portfolio landing page for a front-end developer who specializes in React.js with a focus on UI development. ',
		implementation:
			'From the information that I collected during the UX research and person analysis, I can conclude that' +
			' it is necessary to create a site that would distinguish the developer, immediately show the high' +
			' level of his skills, provide users with the most relevant data that they could find in a short time.' +
			' And even a person who does not have much experience in the selection of IT specialists will easily find' +
			' and understand the strengths of the developer.\n' +
			'The design concept is to display screen by screen and have two color themes (dark and light) ' +
			'with inversion of contrasting colors.',
		link:
			'https://www.behance.net/gallery/149560407/Landing-page-portfolio-for-WEB-DEVELOPER',
		screenShots: [
			{ path: getScreenShotsPath('web-1') },
			{ path: getScreenShotsPath('web-2') },
			{ path: getScreenShotsPath('web-3') },
		],
	},
	{
		poster: getPosterPath('poland'),
		number: 2,
		isBlackState: false,
		reverseState: true,
		title: 'Delivery Poland',
		description:
			'A multi-page site for a logistics company whose main specialization' +
			' is the provision of transport and logistics services for the B2B' +
			' sector between Poland and Ukraine.',
		implementation:
			'The new site should be simple and clean, as well as similar in appearance to existing "Delivery Group" sites.' +
			' One of the main requirements was to create a design that the client himself could later supplement ' +
			'with information blocks, images, or other information. As a result, the site had to be easily maintained' +
			' and easily scalable. The client also chose blue as the main color.',
		link:
			'https://www.behance.net/gallery/149550087/Website-for-a-DELIVERY-INTERNATIONAL-POLAND',
		screenShots: [
			{ path: getScreenShotsPath('poland-1') },
			{ path: getScreenShotsPath('poland-2') },
			{ path: getScreenShotsPath('poland-3') },
		],
	},
	{
		poster: getPosterPath('delivery'),
		number: 3,
		isBlackState: true,
		reverseState: false,
		title: 'Delivery Group',
		description:
			'A multi-page website for a logistic company, the main specialization of' +
			' which is the provision of transport and logistics services for the' +
			' B2B sector (business entities and the corporate sector) both in' +
			' Ukraine and abroad.',
		implementation:
			'The task of this project was to redesign and create one user-friendly site from two old, oversized sites, ' +
			'with many pages leading nowhere. Provided that the first screen and company news pages have already' +
			' been created and approved. \n' +
			'My main goal was to follow an almost ready-made style guide when creating new pages, conduct research,' +
			' identify the weaknesses of previous versions of the site, interview company employees who were also ' +
			'part of the target audience of the site, and based on the results of this search, create a design for ' +
			'a new site without losing information. \n' +
			'As a result, my redesign helped not only improve the appearance of the site, but also create a truly ' +
			'functional service for all users. The conversion has increased and the new version of the site has ' +
			'received a lot of positive feedback from regular users.',
		link: 'https://delivery-auto.com/en-us',
		screenShots: [
			{ path: getScreenShotsPath('delivery-1') },
			{ path: getScreenShotsPath('delivery-2') },
			{ path: getScreenShotsPath('delivery-3') },
		],
	},
	{
		poster: getPosterPath('fund'),
		number: 4,
		isBlackState: false,
		reverseState: true,
		title: 'Charity Fund',
		description:
			'A site for a charitable organization that has existed since 2016, ' +
			'and since the beginning of a full-scale war in Ukraine, ' +
			'the foundation has started activities to help all those' +
			' who suffer from the severe aggression of the enemy.',
		implementation:
			'The task of the project was to create a simple website with clear functionality- accepting charitable payments.\n' +
			'After analyzing competitors, and identifying the purpose of the company, I came to the conclusion that the ' +
			'design of the site should be clean, informative, and understandable to any user because donations can come' +
			' from both people and large organizations.\n' +
			'In the design, I used light colors, and blue and yellow, the traditional colors of the Ukrainian flag, became' +
			' accents.',
		link: 'https://whih.com.ua/index_en.html',
		screenShots: [
			{ path: getScreenShotsPath('fund-1') },
			{ path: getScreenShotsPath('fund-2') },
			{ path: getScreenShotsPath('fund-3') },
		],
	},
	{
		poster: getPosterPath('blash'),
		number: 5,
		isBlackState: true,
		reverseState: false,
		title: 'Blash Vintage',
		description:
			'Landing page for a store that combines beautiful and high-quality things for the home. Personal study project.',
		implementation:
			'As a result of research, it turned out that the target audience of the site is young progressive people ' +
			'and interior designers interested in buying vintage and designer items for comfort and to complement ' +
			'their home decor. Therefore, it was decided to make a website with a modern minimalistic clean design.\n' +
			'The corporate colors of the project - blue and orange - were chosen as accent colors for the landing page.',
		link: 'https://www.behance.net/gallery/144175041/Landing-for-Blash-Vintage',
		screenShots: [
			{ path: getScreenShotsPath('blash-1') },
			{ path: getScreenShotsPath('blash-2') },
			{ path: getScreenShotsPath('blash-3') },
		],
	},
	{
		poster: getPosterPath('jewelry'),
		number: 6,
		isBlackState: false,
		reverseState: true,
		title: 'Jewelry.UA',
		description:
			'A multi-page site for a jewelry company located in Ukraine that ' +
			'manufactures and sells jewelry made of precious stones and' +
			' precious metals. Personal study project.',
		implementation:
			"I conducted an analysis of the site's potential customers and researched competitors. Since it turned " +
			'out that the target audience of the site is mainly women who are looking for new jewelry for themselves ' +
			'and men who are looking for a gift for women, it was decided to create a minimalistic design with a clear' +
			' structure where using the advanced search tool, you can quickly select jewelry for every taste. \n' +
			'The color palette includes pastel colors, and accent colors in shades of burgundy, which evokes in users ' +
			'associations with high cost and sophistication, and also instills a sense of prestige of the company.\n' +
			'During the work, the main page, catalog pages, product page, and 404 page were created.',
		link:
			'https://www.behance.net/gallery/101989775/Online-store-for-a-jewelry-company-JEWELRYUA',
		screenShots: [
			{ path: getScreenShotsPath('jewelry-1') },
			{ path: getScreenShotsPath('jewelry-2') },
			{ path: getScreenShotsPath('jewelry-3') },
		],
	},
	{
		poster: getPosterPath('astramed'),
		number: 7,
		isBlackState: true,
		reverseState: false,
		title: 'Astramed',
		description:
			'A multi-page site for an insurance company that specializes' +
			' in traditional: insurance, coinsurance, reinsurance.',
		implementation:
			'I conducted an analysis of the target audience of the site, as well as an analysis of the business ' +
			'environment of the customer company. It turned out that for sites that are even indirectly related' +
			' to healthcare, the law provides for the need for a design with the implementation of a version for' +
			' people with visual impairments, I worked on such functionality for the first time.\n' +
			'This version includes the ability to view the site in black and white, a dark version with increased' +
			' concentration, and a version with varying degrees of the increased font size. You can conveniently' +
			' manage these versions through an additional pop-up panel.\n' +
			'It was decided to make the design simple and user-friendly, in light colors with green accents.',
		link: 'https://astramed-ic.com/',
		screenShots: [
			{ path: getScreenShotsPath('astramed-1') },
			{ path: getScreenShotsPath('astramed-2') },
			{ path: getScreenShotsPath('astramed-3') },
		],
	},
	{
		poster: getPosterPath('new-year'),
		number: 8,
		isBlackState: false,
		reverseState: true,
		title: 'New-Year Company',
		description:
			'Landing page for an event agency that organizes meetings with' +
			' fairy-tale characters Ded Moroz and Snegurochka\n' +
			'(Santa Claus and Snow Maiden) with children from December' +
			' 14 to December 27. Personal study project.',
		implementation:
			'After analyzing the target audience, I realized that the landing page has a very narrow focus, since ' +
			'its potential customers are parents or a group of parents of preschool and school children. \n' +
			"The task was to create a selling site that could impress and motivate users to order the company's services.\n" +
			"I decided to create a design that conveys the atmosphere of the magic of New Year's Eve. " +
			"Used bright contrasting colors to guide users' attention.\n" +
			'I wanted to remind a potential client - a parent of a child about his childhood and forgotten ' +
			'faith in miracles.',
		link:
			'https://www.behance.net/gallery/111236373/landing-page-for-event-agency',
		screenShots: [
			{ path: getScreenShotsPath('new-year-1') },
			{ path: getScreenShotsPath('new-year-2') },
			{ path: getScreenShotsPath('new-year-3') },
		],
	},
];

export const experience = [
	{
		title: messages.JUNIOR_UI_UX_DESIGNER,
		workInfo: 'Freelance / February 2021 - April 2022',
		responsibilities: [
			'Communication with clients, briefing, analysis of the received data, implementation of personas, ' +
				'user flow cards, prediction of interaction scenarios, analysis of the target audience and competitors,' +
				' determination of the goals and objectives of the project;',
			'Creation of moodboards and concepts, prototyping and quick sketching;',
			'Development of design of landings, banners, multi-page sites, logos;\n',
			'Presentation of your work, preparation of files for layout, collaboration ' +
				'with Frontend developer.',
		],
		achievements:
			'During this period of time, I developed completely different types' +
			' of sites for different business areas. I can say that I am proud ' +
			'of myself, because my clients are people to whom I was advised as a ' +
			'good specialist by my previous clients. Also, for the first time, I ' +
			'showed myself as a mentor for a novice designer.',
	},
	{
		title: messages.JUNIOR_UI_UX_DESIGNER,
		workInfo:
			'“Delivery group” (Kyiv, Ukraine) Contract / July 2020 - February 2021 ',
		responsibilities: [
			'Communication with clients, briefing, analysis of the received data, ' +
				'analysis of the target audience and competitors, determination of' +
				' the goals and objectives of the project, development of site' +
				' architecture, interaction scenarios;\n',
			'Collection of information among employees of the main office of the' +
				' company, who were also part of the target audience;\n',
			'Development and testing of ' + 'a prototype;\n',
			'Development of design of multi-page sites, banners, redesign;\n',
			'Presentation of your work directly to the product owner, preparation ' +
				'of files for layout, collaboration with Frontend developer and digital manager.',
		],
		achievements:
			'I am proud of myself, because in this position I was able to make one ' +
			'site, which can be characterized as modern, convenient, and' +
			' user-friendly, from two old, too voluminous sites, with many' +
			' pages that lead nowhere. The number of pages has decreased several' +
			' times without losing information.\n' +
			'Despite the fact that the site has about 20 thousand visits per' +
			' day, the office has a whole service department whose main task is ' +
			'to answer questions from all customers, support VIP customers and ' +
			'create orders over the phone. Therefore, my redesign helped not' +
			' only to improve the appearance of the site, but also to create ' +
			'a truly functional service for all users.\n' +
			'The conversion increased and he got a lot of positive feedback from' +
			' regular users. This site was not only informational, but also had' +
			' significant functionality (business area - delivery of goods ' +
			'throughout the country, therefore there were various types of ' +
			'delivery order forms), which I managed to improve with the help of ' +
			'UX research.',
	},
	{
		title: messages.WEB_DESIGNER,
		workInfo: 'Freelance / March 2020 - July 2020',
		responsibilities: [
			'Communication with clients, briefing, analysis of the received data,' +
				' analysis of the target audience and competitors, determination of' +
				' the goals and objectives of the project;',
			'Development of design for landing pages, banners, multi-page sites,' +
				' redesign;',
			'Presentation of your work, preparation of files for layout, ' +
				'collaboration with Frontend developer.',
		],
		achievements:
			'I redesigned the website of a logistics company, doing a complete ' +
			'rethinking of the old design. As a result, the company received' +
			' an updated user-friendly website with clear functionality for ' +
			'ordering auto transportation; and my work was evaluated after ' +
			'the completion of the project, I was offered a contract to ' +
			'redesign two more company sites.',
	},
];
