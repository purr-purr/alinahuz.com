import { FC } from 'react';
import messages from '@helpers/messages';

import s from './EducationDegree.module.scss';

const EducationDegree: FC = () => {
  return (
    <>
      <h4 className={s.title}>{messages.DEGREE}</h4>
      <dl className={s.container}>
        <dt>{messages.ZAPORIZHZHIA_STATE_MEDICAL_UNIVERSITY}</dt>
        <dd>
          {messages.BACHELOR_PHARMACY}
          <span> {messages.BACHELOR_PHARMACY_DATE}</span>
        </dd>
      </dl>

      <dl className={s.container}>
        <dt>{messages.PUBLIC_INSTITUTION_BERYSLAV}</dt>
        <dd>
          {messages.SECONDARY_VOCATIONAL_PHARMACY}
          <span> {messages.SECONDARY_VOCATIONAL_DATE}</span>
        </dd>
      </dl>
    </>
  );
};
export default EducationDegree;
