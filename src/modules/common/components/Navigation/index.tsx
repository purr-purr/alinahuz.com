import {FC} from 'react';

import {menuLinks} from '@helpers/data';
import DecorativeLink from '@modules/common/components/DecorativeLink';

import s from './Navigation.module.scss';

const Navigation: FC<{
    isBlackColor?: boolean;
}> = ({isBlackColor = false}) => {
    return (
        <ul className={s.container}>
            {menuLinks.map((item) => (
                <li>
                    <DecorativeLink text={item.title} href={item.link}
                                    isBlackColorState/>
                </li>
            ))}
        </ul>
    );
};

export default Navigation;
