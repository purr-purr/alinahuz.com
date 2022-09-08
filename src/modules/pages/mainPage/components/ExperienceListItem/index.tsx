import { FC } from 'react';
import messages from '@helpers/messages';
import TextLink from '@modules/common/components/TextLink';

import s from './ExperienceListItem.module.scss';

const ExperienceListItem: FC<{
  title: string;
  workInfo: string;
  responsibilities: string[];
  achievements: string;
}> = ({ title, workInfo, responsibilities, achievements }) => {
  return (
    <li className={s.container}>
      <h4 className={s.title}>{title}</h4>
      <p className={s.workInfo}>{workInfo}</p>

      <details className={s.desc}>
        <summary className={s[`desc-heading`]}>
          <TextLink text={messages.RESPONSIBILITIES_AND_ACHIEVEMENTS} isTextType />
        </summary>

        <dl className={s[`desc-list`]}>
          <dt className={s[`desc-title`]}>{messages.MAIN_RESPONSIBILITIES}</dt>
          <dd>
            <ul>
              {responsibilities.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </dd>
        </dl>

        <dl className={s[`desc-list`]}>
          <dt className={s[`desc-title`]}>{messages.MAIN_ACHIEVEMENTS}</dt>
          <dd>{achievements}</dd>
        </dl>
      </details>
    </li>
  );
};
export default ExperienceListItem;
