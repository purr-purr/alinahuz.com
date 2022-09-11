import messages from '@helpers/messages';

export const posterPath = (path: string) => {
  return require(`@assets/images/selectedWorks/posters/poster_${path}.jpg`).default;
};

export const screenShotsPath = (path: string) => {
  return require(`@assets/images/selectedWorks/screenShots/screenShots_${path}.jpg`).default;
};

export const selectedWorks = [
  {
    poster: `${posterPath('web')}`,
    number: 1,
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
    link: '#',
    screenShots: [
      { image: `${screenShotsPath('web-1')}` },
      { image: `${screenShotsPath('web-2')}` },
      { image: `${screenShotsPath('web-3')}` },
    ],
  },
  {
    poster: `${posterPath('poland')}`,
    number: 2,
    reverseState: true,
    title: 'Delivery International Poland',
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
    link: '#',
    screenShots: [
      { image: `${screenShotsPath('poland-1')}` },
      { image: `${screenShotsPath('poland-2')}` },
      { image: `${screenShotsPath('poland-3')}` },
    ],
  },
  {
    poster: `${posterPath('delivery')}`,
    number: 3,
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
    link: '#',
    screenShots: [
      { image: `${screenShotsPath('delivery-1')}` },
      { image: `${screenShotsPath('delivery-2')}` },
      { image: `${screenShotsPath('delivery-3')}` },
    ],
  },
  {
    poster: `${posterPath('fund')}`,
    number: 4,
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
    link: '#',
    screenShots: [
      { image: `${screenShotsPath('fund-1')}` },
      { image: `${screenShotsPath('fund-2')}` },
      { image: `${screenShotsPath('fund-3')}` },
    ],
  },
  {
    poster: `${posterPath('blash')}`,
    number: 5,
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
    link: '#',
    screenShots: [
      { image: `${screenShotsPath('blash-1')}` },
      { image: `${screenShotsPath('blash-2')}` },
      { image: `${screenShotsPath('blash-3')}` },
    ],
  },
  {
    poster: `${posterPath('jewelry')}`,
    number: 6,
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
      { image: `${screenShotsPath('jewelry-1')}` },
      { image: `${screenShotsPath('jewelry-2')}` },
      { image: `${screenShotsPath('jewelry-3')}` },
    ],
  },
  {
    poster: `${posterPath('astramed')}`,
    number: 7,
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
    link: '#',
    screenShots: [
      { image: `${screenShotsPath('astramed-1')}` },
      { image: `${screenShotsPath('astramed-2')}` },
      { image: `${screenShotsPath('astramed-3')}` },
    ],
  },
  {
    poster: `${posterPath('new-year')}`,
    number: 8,
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
    link: '#',
    screenShots: [
      { image: `${screenShotsPath('new-year-1')}` },
      { image: `${screenShotsPath('new-year-2')}` },
      { image: `${screenShotsPath('new-year-3')}` },
    ],
  },
];

export const menuLinks = [
  { title: `${messages.MAIN}`, link: '/' },
  { title: `${messages.WORKS}`, link: '/#works' },
  { title: `${messages.ABOUT_ME}`, link: '/#about' },
  { title: `${messages.SKILLS}`, link: '/#skills' },
  { title: `${messages.EDUCATION}`, link: '/#education' },
  { title: `${messages.CONTACTS}`, link: '/#contacts' },
];

export const experience = [
  {
    title: `${messages.UI_UX_DESIGNER}`,
    workInfo: `${messages.WORK_EXPERIENCE_1}`,
    responsibilities: [
      `${messages.WORK_EXPERIENCE_1_RESPONSIBILITIES_ITEM_1}`,
      `${messages.WORK_EXPERIENCE_1_RESPONSIBILITIES_ITEM_2}`,
      `${messages.WORK_EXPERIENCE_1_RESPONSIBILITIES_ITEM_3}`,
      `${messages.WORK_EXPERIENCE_1_RESPONSIBILITIES_ITEM_4}`,
    ],
    achievements: `${messages.WORK_EXPERIENCE_1_ACHIEVEMENTS}`,
  },
  {
    title: `${messages.UI_UX_DESIGNER}`,
    workInfo: `${messages.WORK_EXPERIENCE_2}`,
    responsibilities: [
      `${messages.WORK_EXPERIENCE_2_RESPONSIBILITIES_ITEM_1}`,
      `${messages.WORK_EXPERIENCE_2_RESPONSIBILITIES_ITEM_2}`,
      `${messages.WORK_EXPERIENCE_2_RESPONSIBILITIES_ITEM_3}`,
      `${messages.WORK_EXPERIENCE_2_RESPONSIBILITIES_ITEM_4}`,
      `${messages.WORK_EXPERIENCE_2_RESPONSIBILITIES_ITEM_5}`,
    ],
    achievements: `${messages.WORK_EXPERIENCE_2_ACHIEVEMENTS}`,
  },
  {
    title: `${messages.UI_UX_DESIGNER}`,
    workInfo: `${messages.WORK_EXPERIENCE_3}`,
    responsibilities: [
      `${messages.WORK_EXPERIENCE_3_RESPONSIBILITIES_ITEM_1}`,
      `${messages.WORK_EXPERIENCE_3_RESPONSIBILITIES_ITEM_2}`,
      `${messages.WORK_EXPERIENCE_3_RESPONSIBILITIES_ITEM_3}`,
    ],
    achievements: `${messages.WORK_EXPERIENCE_3_ACHIEVEMENTS}`,
  },
];

export const educationCourses = [
  {
    title: 'Digital Skills: User Experienc',
    platform: 'FutureLearn',
    date: '2022',
  },
  {
    title: 'Design Basics',
    platform: 'Mate Academy',
    date: '2022',
  },
  {
    title: 'UX from scratch: how to become a UI designer',
    platform: 'Udemy',
    date: '2022',
  },
  {
    title: 'UX Crash Course: Fundamental',
    platform: 'Information resource "Medium"',
    date: '2019',
  },
  {
    title: 'Web designer course ',
    platform: 'Educational platform "WayUp"',
    date: '2019',
  },
];
