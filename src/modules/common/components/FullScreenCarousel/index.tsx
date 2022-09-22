import { FC } from 'react';
import Carousel from 'nuka-carousel';

import { selectedWorks } from '@helpers/data';
import messages from '@helpers/messages';
import BurgerMenuIcon from '@modules/common/components/BurgerMenuIcon';
import TextLink from '@modules/common/components/TextLink';
import SimpleCarousel from '@modules/common/components/SimpleCarousel';

import s from './FullScreenCarousel.module.scss';

const FullScreenCarousel: FC<{
  isOpenState: boolean;
  burgerIconClick: () => void;
  activeSlide?: number;
}> = ({ isOpenState, burgerIconClick, activeSlide }) => {
  return (
    <div className={s.container}>
      <Carousel className={s.carousel} withoutControls slideIndex={activeSlide}>
        {selectedWorks.map((item) => (
          <div className={s[`carousel-inner`]} key={item.number}>
            <div className={s.closeBtn}>
              <BurgerMenuIcon
                onClick={burgerIconClick}
                isOpenState={isOpenState}
                isBlackColor={item.isBlackState}
              />
            </div>
            <div className={s[`carousel-item`]}>
              <div className={s.info}>
                <span className={s.number}>{item.number}</span>
                <h3 className={s.title}>{item.title}</h3>
                <div className={s[`info-inner`]}>
                  <TextLink text={messages.VIEW_CV} href={item.link} />
                  <dl className={s.textGroup}>
                    <dt className={s[`textGroup-subtitle`]}>{messages.ABOUT}</dt>
                    <dd className={s[`textGroup-desc`]}>{item.description}</dd>
                    <dt className={s[`textGroup-subtitle`]}>{messages.IMPLEMENTATION}</dt>
                    <dd className={s[`textGroup-desc`]}>{item.implementation}</dd>
                  </dl>
                </div>
              </div>
              <div className={s.posters}>
                <img className={s[`posters-item`]} src={item.poster} alt={messages.POSTER} />
                <SimpleCarousel className={s.postersCarousel} picturesData={item.screenShots} />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default FullScreenCarousel;
