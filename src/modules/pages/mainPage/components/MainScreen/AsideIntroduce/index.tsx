import { FC, SetStateAction, useEffect, useState } from 'react';
import cn from 'classnames';
import { MOBILE_BP } from '@helpers/const';
import { useMediaQuery } from '@modules/common/hooks';

import messages from '@helpers/messages';
import MainHeading from '@modules/common/components/MainHeading';
import NextBlockShadow from '@modules/common/components/NextBlockShadow';

import s from './AsideIntroduce.module.scss';

const AsideIntroduce: FC<{
  isOpen?: boolean;
}> = ({ isOpen }) => {
  const isMobile = useMediaQuery(MOBILE_BP);
  const initialShowText = {
    first: false,
    second: false,
    third: false,
    four: false,
    five: false,
    six: false,
  };

  const [showText, setShowText] = useState(initialShowText);

  const timeoutAnimation = (
    delay: number,
    value: SetStateAction<{
      first: boolean;
      second: boolean;
      third: boolean;
      four: boolean;
      five: boolean;
      six: boolean;
    }>,
  ) => {
    let timer = setTimeout(() => {
      setShowText(value);
    }, delay);

    return () => clearTimeout(timer);
  };

  const showTextDelay = () => {
    timeoutAnimation(1000, {
      first: false,
      second: false,
      third: true,
      four: false,
      five: false,
      six: false,
    });

    timeoutAnimation(2000, {
      first: true,
      second: false,
      third: true,
      four: false,
      five: false,
      six: false,
    });

    timeoutAnimation(2500, {
      first: true,
      second: true,
      third: true,
      four: false,
      five: false,
      six: false,
    });

    timeoutAnimation(3000, {
      first: true,
      second: true,
      third: true,
      four: true,
      five: false,
      six: false,
    });

    timeoutAnimation(3500, {
      first: true,
      second: true,
      third: true,
      four: true,
      five: true,
      six: false,
    });

    timeoutAnimation(4000, {
      first: true,
      second: true,
      third: true,
      four: true,
      five: true,
      six: true,
    });
  };

  useEffect(() => {
    isOpen ? showTextDelay() : setShowText(initialShowText);
  }, [isOpen]);

  const [loadAsideBar, setLoadAsideBar] = useState(false);

  useEffect(() => {
    setLoadAsideBar(true);
  }, [isOpen]);

  return (
    <aside
      style={{ width: isOpen ? '100%' : isMobile && !isOpen ? '50px' : '79px' }}
      className={cn(s.container, loadAsideBar && s.loadAsideBar, {
        [s[`container--close`]]: !isOpen,
      })}
    >
      {isOpen ? (
        <>
          <article className={cn(s.fullInfo, isOpen && s.active)}>
            <p className={cn(s[`fullInfo-hello`], s.appearance, showText.first && s.active)}>
              <i>{messages.HELLO}</i>
            </p>
            <p className={cn(s.appearance, showText.second && s.active)}>
              {messages.MY_NAME_IS_ALINA_HUZ_AND_I}
            </p>
            <MainHeading
              text={messages.UI_UX_DESIGNER}
              isH1Tag
              className={cn(s[`fullInfo-title`], s.appearance, showText.third && s.active)}
            />
            <p className={cn(s[`fullInfo-about`], s.appearance, showText.four && s.active)}>
              {messages.DESIGN_FOR_ME_IS}
            </p>
            <p className={cn(s.appearance, showText.five && s.active)}>{messages.I_WANT_TO_HELP}</p>
          </article>

          <div className={cn(s.appearance, showText.six && s.active)}>
            <NextBlockShadow colorScheme="black" />
          </div>
        </>
      ) : (
        <article className={s.shortHeading}>
          <p>{messages.UI_UX_DESIGNER}</p>
          <p>{messages.BASED_IN_IRELAND}</p>
        </article>
      )}
    </aside>
  );
};

export default AsideIntroduce;
