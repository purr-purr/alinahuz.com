import { FC, useEffect, useState } from 'react';
import { certificatePicture } from '@helpers/data';
import messages from '@helpers/messages';

import s from './SimpleCarousel.module.scss';

const SimpleCarousel: FC = () => {
  const [curIndex, setCurIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      let timer = setTimeout(() => {
        setCurIndex((curIndex + 1) % certificatePicture.length);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [curIndex, isPlaying]);

  const onPlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={s.container}>
      <img
        onMouseEnter={onPlay}
        onMouseOut={onPlay}
        key={curIndex}
        src={certificatePicture[curIndex].path}
        alt={messages.CERTIFICATE}
      />
    </div>
  );
};
export default SimpleCarousel;
