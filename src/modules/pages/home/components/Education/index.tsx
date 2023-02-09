import { forwardRef } from 'react';

import SimpleCarousel from '@modules/common/components/SimpleCarousel';
import SubHeading from '@modules/common/components/SubHeading';
import EducationDegree from '@modules/pages/home/components/EducationDegree';
import EducationListItem from '@modules/pages/home/components/EducationListItem';

import { useMediaQuery } from '@modules/common/hooks';

import { MOBILE_BP } from '@utils/const';
import { certificatePicture, educationCourses } from '@utils/data';
import messages from '@utils/messages';

import s from './Education.module.scss';

interface IEducation {
	isActive: boolean;
}

const Education = forwardRef<HTMLDivElement, IEducation>((props, ref) => {
	const isMobile = useMediaQuery(MOBILE_BP);
	return (
		<article ref={ref} className={s.container} id="education">
			<aside>
				<SubHeading text={messages.EDUCATION} isWhiteColor />
				{!isMobile && (
					<SimpleCarousel className={s.carousel} picturesData={certificatePicture} />
				)}
			</aside>
			<div className={s.infoBlock}>
				<ul className={s.list}>
					{educationCourses.map((item, index) => (
						<EducationListItem
							isActive={!isMobile && props.isActive}
							id={index}
							key={item.title}
							title={item.title}
							platform={item.platform}
							date={item.date}
						/>
					))}
				</ul>
				<EducationDegree />
			</div>
		</article>
	);
});

export default Education;
