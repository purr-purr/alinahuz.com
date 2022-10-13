import messages from '@helpers/messages';

export const openCvPdf = () => {
  window.open('../Alina_Huz_UI_UX_designer_CV.pdf');
};

export const posterPath = (path: string) => {
  return require(`@assets/images/selectedWorks/posters/poster_${path}.jpg`).default;
};

export const screenShotsPath = (path: string) => {
  return require(`@assets/images/selectedWorks/screenShots/screenShots_${path}.jpg`).default;
};

export const certificatePicturePath = (path: string) => {
  return require(`@assets/images/certificate/certificate_${path}.jpg`).default;
};

export const certificatePicture = [
  { path: certificatePicturePath('first') },
  { path: certificatePicturePath('second') },
  { path: certificatePicturePath('third') },
  { path: certificatePicturePath('four') },
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
    poster: posterPath('web'),
    number: 1,
    isBlackState: true,
    reverseState: false,
    title: 'Web-dev portfolio',
    description:
      'Portfolio landing page for a front-end developer who specializes in React.js with a focus on UI development. ',
    implementation:
      'As a result of research, it turned out that the target audience ' +
      'of the site is young progressive people and interior designers' +
      ' interested in buying vintage and designer items for comfort and ' +
      'to complement their home decor. Therefore, it was decided to make' +
      ' a website with a modern minimalistic clean design.\n' +
      'The corporate colors of the project - blue and orange - were ' +
      'chosen as accent colors for the landing page.',
    link: '',
    screenShots: [
      { path: screenShotsPath('web-1') },
      { path: screenShotsPath('web-2') },
      { path: screenShotsPath('web-3') },
    ],
  },
  {
    poster: posterPath('poland'),
    number: 2,
    isBlackState: false,
    reverseState: true,
    title: 'Delivery Poland',
    description:
      'A multi-page site for a logistics company whose main specialization' +
      ' is the provision of transport and logistics services for the B2B' +
      ' sector between Poland and Ukraine.',
    implementation:
      'As a result of research, it turned out that the target audience of' +
      ' the site is young progressive people and interior designers ' +
      'interested in buying vintage and designer items for comfort' +
      ' and to complement their home decor. Therefore, it was decided ' +
      'to make a website with a modern minimalistic clean design.\n' +
      'The corporate colors of the project - blue and orange - were chosen' +
      ' as accent colors for the landing page.',
    link: '',
    screenShots: [
      { path: screenShotsPath('poland-1') },
      { path: screenShotsPath('poland-2') },
      { path: screenShotsPath('poland-3') },
    ],
  },
  {
    poster: posterPath('delivery'),
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
      'As a result of research, it turned out that the target audience of the' +
      ' site is young progressive people and interior designers interested ' +
      'in buying vintage and designer items for comfort and to complement ' +
      'their home decor. Therefore, it was decided to make a website with' +
      ' a modern minimalistic clean design.\n' +
      'The corporate colors of the project - blue and orange - were chosen ' +
      'as accent colors for the landing page.',
    link: '',
    screenShots: [
      { path: screenShotsPath('delivery-1') },
      { path: screenShotsPath('delivery-2') },
      { path: screenShotsPath('delivery-3') },
    ],
  },
  {
    poster: posterPath('fund'),
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
      'As a result of research, it turned out that the target audience of ' +
      'the site is young progressive people and interior designers' +
      ' interested in buying vintage and designer items for comfort' +
      ' and to complement their home decor. Therefore, it was decided ' +
      'to make a website with a modern minimalistic clean design.\n' +
      'The corporate colors of the project - blue and orange - were ' +
      'chosen as accent colors for the landing page.',
    link: '',
    screenShots: [
      { path: screenShotsPath('fund-1') },
      { path: screenShotsPath('fund-2') },
      { path: screenShotsPath('fund-3') },
    ],
  },
  {
    poster: posterPath('blash'),
    number: 5,
    isBlackState: true,
    reverseState: false,
    title: 'Blash Vintage',
    description:
      'Portfolio landing page for a front-end developer who specializes' +
      ' in React.js with a focus on UI development. ',
    implementation:
      'As a result of research, it turned out that the target audience of' +
      ' the site is young progressive people and interior designers' +
      ' interested in buying vintage and designer items for comfort ' +
      'and to complement their home decor. Therefore, it was decided' +
      ' to make a website with a modern minimalistic clean design.\n' +
      'The corporate colors of the project - blue and orange - were' +
      ' chosen as accent colors for the landing page.',
    link: '',
    screenShots: [
      { path: screenShotsPath('blash-1') },
      { path: screenShotsPath('blash-2') },
      { path: screenShotsPath('blash-3') },
    ],
  },
  {
    poster: posterPath('jewelry'),
    number: 6,
    isBlackState: false,
    reverseState: true,
    title: 'Jewelry.UA',
    description:
      'A multi-page site for a jewelry company located in Ukraine that ' +
      'manufactures and sells jewelry made of precious stones and' +
      ' precious metals. Personal study project.',
    implementation:
      'As a result of research, it turned out that the target audience ' +
      'of the site is young progressive people and interior designers ' +
      'interested in buying vintage and designer items for comfort' +
      ' and to complement their home decor. Therefore, it was ' +
      'decided to make a website with a modern minimalistic clean design.\n' +
      'The corporate colors of the project - blue and orange - were' +
      ' chosen as accent colors for the landing page.',
    link: '#',
    screenShots: [
      { path: screenShotsPath('jewelry-1') },
      { path: screenShotsPath('jewelry-2') },
      { path: screenShotsPath('jewelry-3') },
    ],
  },
  {
    poster: posterPath('astramed'),
    number: 7,
    isBlackState: true,
    reverseState: false,
    title: 'Astramed',
    description:
      'A multi-page site for an insurance company that specializes' +
      ' in traditional: insurance, coinsurance, reinsurance.',
    implementation:
      'As a result of research, it turned out that the target audience of ' +
      'the site is young progressive people and interior designers ' +
      'interested in buying vintage and designer items for comfort ' +
      'and to complement their home decor. Therefore, it was decided' +
      ' to make a website with a modern minimalistic clean design.\n' +
      'The corporate colors of the project - blue and orange - were' +
      ' chosen as accent colors for the landing page.',
    link: '',
    screenShots: [
      { path: screenShotsPath('astramed-1') },
      { path: screenShotsPath('astramed-2') },
      { path: screenShotsPath('astramed-3') },
    ],
  },
  {
    poster: posterPath('new-year'),
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
      'As a result of research, it turned out that the target audience' +
      ' of the site is young progressive people and interior' +
      ' designers interested in buying vintage and designer' +
      ' items for comfort and to complement their home decor. ' +
      'Therefore, it was decided to make a website with a modern' +
      ' minimalistic clean design.\n' +
      'The corporate colors of the project - blue and orange - were' +
      ' chosen as accent colors for the landing page.',
    link: '',
    screenShots: [
      { path: screenShotsPath('new-year-1') },
      { path: screenShotsPath('new-year-2') },
      { path: screenShotsPath('new-year-3') },
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
    workInfo: '“Delivery group” (Kyiv, Ukraine) Contract / July 2020 - February 2021 ',
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
      'Development of design for landing pages, banners, multi-page sites,' + ' redesign;',
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
