import { forwardRef } from 'react';

import SubHeading from '@modules/common/components/SubHeading';
import ExperienceListItem from '@modules/pages/home/components/ExperienceListItem';

import { experience } from '@utils/data';
import messages from '@utils/messages';

import s from './Experience.module.scss';

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<article ref={ref} className={s.container}>
			<SubHeading text={messages.EXPERIENCE} />
			<div className={s.infoBlock}>
				<p className={s.description}>
					{messages.I_HAVE_EXPERIENCE_DESIGNING_COMMERCE}
				</p>
				<ul className={s.list}>
					{experience.map((item, index) => (
						<ExperienceListItem
							key={index}
							title={item.title}
							workInfo={item.workInfo}
							responsibilities={item.responsibilities}
							achievements={item.achievements}
						/>
					))}
				</ul>
			</div>
		</article>
	);
});

export default Experience;
