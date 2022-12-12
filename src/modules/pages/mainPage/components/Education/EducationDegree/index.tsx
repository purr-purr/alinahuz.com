import { FC } from 'react';
import messages from '@helpers/messages';

import s from './EducationDegree.module.scss';

const EducationDegree: FC = () => {
  return (
    <>
      <h4 className={s.title}>{messages.DEGREE}</h4>

      <dl className={s.container}>
        <dt>{messages.LIMERICK_AND_CLARE_EDUCATION_AND_TRAINING_BOARD}</dt>
        <dd>
          {messages.ENGLISH_LANGUAGE}
          <span> {messages.ENGLISH_LANGUAGE_DATE}</span>
        </dd>
      </dl>

      <dl className={s.container}>
        <dt>{messages.ZAPORIZHZHIA_STATE_MEDICAL_UNIVERSITY}</dt>
        <dd>
          {messages.BACHELOR_PHARMACY}
          <span> {messages.BACHELOR_PHARMACY_DATE}</span>
        </dd>
      </dl>

      <dl className={s.container}>
        <dt>{messages.BERYSLAV_MEDICAL_COLLEGE}</dt>
        <dd>
          {messages.SECONDARY_VOCATIONAL_PHARMACY}
          <span> {messages.SECONDARY_VOCATIONAL_DATE}</span>
        </dd>
      </dl>
    </>
  );
};

export default EducationDegree;
