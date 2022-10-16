import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import messages from '@helpers/messages';
import { SIMPLE_CAROUSEL_DELAY } from '@helpers/const';

import s from './SimpleCarousel.module.scss';

const SimpleCarousel: FC<{
  picturesData: {
    path: string;
  }[];
  className?: string;
  isPauseOff?: boolean;
}> = ({ picturesData, className, isPauseOff = false }) => {
  const [curIndex, setCurIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      let timer = setTimeout(() => {
        setCurIndex((curIndex + 1) % picturesData.length);
      }, SIMPLE_CAROUSEL_DELAY);

      return () => clearTimeout(timer);
    }
  }, [curIndex, isPlaying]);

  const onPlay = () => {
    return !isPauseOff && setIsPlaying(!isPlaying);
  };

  return (
    <figure className={cn(s.container, className)}>
      <img
        onMouseEnter={onPlay}
        onMouseOut={onPlay}
        className={cn(s.item, isPauseOff && [s.hideMouseEvents])}
        key={curIndex}
        src={picturesData[curIndex].path}
        alt={messages.CERTIFICATE}
      />
    </figure>
  );
};
export default SimpleCarousel;
