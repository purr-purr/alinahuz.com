import { FC } from 'react';
import { selectedWorks } from '@helpers/data';
import BurgerMenuIcon from '@modules/common/components/BurgerMenuIcon';
import Carousel from 'nuka-carousel';

import s from './FullScreenCarousel.module.scss';

const FullScreenCarousel: FC<{
  isOpenState: boolean;
  burgerIconClick: () => void;
  activeSlide?: number;
}> = ({ isOpenState, burgerIconClick, activeSlide }) => {
  return (
    <div className={s.container}>
      <div className={s.closeBtn}>
        <BurgerMenuIcon onClick={burgerIconClick} isOpenState={isOpenState} />
      </div>
      <Carousel className={s.carousel} withoutControls slideIndex={activeSlide}>
        {selectedWorks.map((item) => (
          <div key={item.number}>
            {item.title}
            {item.description}
            {item.number}
            {item.reverseState}
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default FullScreenCarousel;
