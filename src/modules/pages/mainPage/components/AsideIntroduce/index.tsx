import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import messages from 'src/helpers/messages';
import MainHeading from '@modules/common/components/MainHeading';

import s from './AsideIntroduce.module.scss';
import NextBlockShadow from '@modules/common/components/NextBlockShadow';

const AsideIntroduce: FC<{
  isOpen?: boolean;
}> = ({ isOpen }) => {
  const initialShowText = {
    first: false,
    second: false,
    third: false,
    four: false,
    five: false,
  };

  const [showText, setShowText] = useState(initialShowText);

  const showTextDelay = () => {
    setTimeout(() => {
      setShowText({
        first: false,
        second: false,
        third: true,
        four: false,
        five: false,
      });
    }, 1000);

    setTimeout(() => {
      setShowText({
        first: true,
        second: false,
        third: true,
        four: false,
        five: false,
      });
    }, 2000);

    setTimeout(() => {
      setShowText({
        first: true,
        second: true,
        third: true,
        four: false,
        five: false,
      });
    }, 2500);

    setTimeout(() => {
      setShowText({
        first: true,
        second: true,
        third: true,
        four: true,
        five: false,
      });
    }, 3000);

    setTimeout(() => {
      setShowText({
        first: true,
        second: true,
        third: true,
        four: true,
        five: true,
      });
    }, 3500);
  };

  useEffect(() => {
    isOpen ? showTextDelay() : setShowText(initialShowText);
  }, [isOpen]);

  const [loadAsideBar, setLoadAsideBar] = useState(false);

  useEffect(() => {
    setLoadAsideBar(true);
  }, []);

  return (
    <aside
      style={{ width: isOpen ? '100%' : '79px' }}
      className={cn(s.container, loadAsideBar && s.loadAsideBar, {
        [s[`container--close`]]: !isOpen,
      })}
    >
      {isOpen ? (
        <>
          <div className={s.fullInfo}>
            <p
              className={cn(s[`fullInfo-hello`], s.appearance, showText.first && s.appearanceShow)}
            >
              <i>{messages.HELLO}</i>
            </p>
            <p className={cn(s.appearance, showText.second && s.appearanceShow)}>
              {messages.MY_NAME_IS_ALINA_HUZ_AND_I}
            </p>
            <MainHeading
              text={messages.UI_UX_DESIGNER}
              isH1Tag
              className={cn(s[`fullInfo-title`], s.appearance, showText.third && s.appearanceShow)}
            />
            <p className={cn(s[`fullInfo-about`], s.appearance, showText.four && s.appearanceShow)}>
              {messages.DESIGN_FOR_ME_IS}
            </p>
            <p className={cn(s.appearance, showText.five && s.appearanceShow)}>
              {messages.I_WANT_TO_HELP}
            </p>
          </div>

          <NextBlockShadow colorScheme="black" />
        </>
      ) : (
        <div className={s.shortHeading}>
          <p>{messages.UI_UX_DESIGNER}</p>
          <p>{messages.BASED_IN_IRELAND}</p>
        </div>
      )}
    </aside>
  );
};

export default AsideIntroduce;
