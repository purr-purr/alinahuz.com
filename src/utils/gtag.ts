import { GA_TRACKING_ID } from '@utils/const';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (page: string): void => {
	if (typeof window !== 'undefined') {
		window.gtag('config', `${GA_TRACKING_ID}`, {
			page_path: page,
		});
	}
};
