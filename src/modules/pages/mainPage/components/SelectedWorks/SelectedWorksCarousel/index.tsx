import { FC } from 'react';
import Carousel from 'nuka-carousel';

import { useMediaQuery } from '@modules/common/hooks';
import { LAPTOP_BP } from '@helpers/const';
import { selectedWorks } from '@helpers/data';
import messages from '@helpers/messages';

import BurgerMenuIcon from '@modules/common/components/BurgerMenuIcon';
import TextLink from '@modules/common/components/TextLink';
import SimpleCarousel from '@modules/common/components/SimpleCarousel';

import s from './SelectedWorksCarousel.module.scss';

const SelectedWorksCarousel: FC<{
  isOpenState: boolean;
  burgerIconClick: () => void;
  activeSlide?: number;
}> = ({ isOpenState, burgerIconClick, activeSlide }) => {
  const isLaptop = useMediaQuery(LAPTOP_BP);

  return (
    <article className={s.container}>
      <Carousel adaptiveHeight className={s.carousel} withoutControls slideIndex={activeSlide}>
        {selectedWorks.map((item) => (
          <div className={s[`carousel-inner`]} key={item.number}>
            <header className={s.closeBtn}>
              <BurgerMenuIcon
                onClick={burgerIconClick}
                isOpenState={isOpenState}
                isBlackColor={isLaptop ? true : item.isBlackState}
              />
            </header>
            <div className={s[`carousel-item`]}>
              <div className={s.info}>
                <span className={s.number}>{item.number}</span>
                <h3 className={s.title}>{item.title}</h3>
                <div className={s[`info-inner`]}>
                  <TextLink text={messages.VIEW_PROJECT} inNewTab href={item.link} />
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
                <SimpleCarousel
                  isPauseOff
                  className={s.postersCarousel}
                  picturesData={item.screenShots}
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </article>
  );
};

export default SelectedWorksCarousel;
