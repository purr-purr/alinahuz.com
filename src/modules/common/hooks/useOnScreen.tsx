import { useEffect, useState } from 'react';

import { useMediaQuery } from '@modules/common/hooks/index';

import { MOBILE_BP } from '@utils/const';

const useOnScreen = (ref: any, threshold?: number) => {
	const isMobile = useMediaQuery(MOBILE_BP);
	const [isIntersecting, setIntersecting] = useState(false);

	const windowMargin = isMobile ? 30 : 50;
	const windowHeight = window.innerHeight - windowMargin;
	const windowRootMargin = `0px 0px -${windowHeight}px 0px`;

	const observer = new IntersectionObserver(
		([entry]) => {
			setIntersecting(entry.isIntersecting);
		},
		{
			rootMargin: windowRootMargin,
			threshold: threshold,
		},
	);

	useEffect(() => {
		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	}, []);

	return isIntersecting;
};

useOnScreen.defaultProps = {
	threshold: 1,
};

export default useOnScreen;
