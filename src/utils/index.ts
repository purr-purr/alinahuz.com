export const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const getPosterPath = (path: string) => {
	return require(`@modules/pages/home/assets/selectedWorks/posters/poster_${path}.jpg`)
		.default;
};

export const getScreenShotsPath = (path: string) => {
	return require(`@modules/pages/home/assets/selectedWorks/screenShots/screenShots_${path}.jpg`)
		.default;
};

export const getCertificatePath = (path: string) => {
	return require(`@modules/pages/home/assets/certificate/certificate_${path}.jpg`)
		.default;
};
