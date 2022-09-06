import { FC } from 'react';
import messages from 'src/helpers/messages';

import MainHeading from '@modules/common/components/MainHeading';

import s from './SelectedWorks.module.scss';

const SelectedWorks: FC = () => {
  return (
    <div className={s.container}>
      <MainHeading text={messages.SELECTED_WORKS} />
      <ul>
        <li>234234 234234 234 2</li>
      </ul>
    </div>
  );
};
export default SelectedWorks;
