import React from 'react';

type AppContextType = {
  isDarkMode: boolean;
  handleSwitchDarkMode: (isDarkMode: boolean) => void;
  isNavigationMode: boolean;
  handleSwitchNavigationMode: (isNavigationMode: boolean) => void;
  isFullScreenCarouselMode: {
    index: number;
    isActive: boolean;
  };
  handleSwitchFullScreenCarouselMode: (index: number, isActive: boolean) => void;
};

const AppContext = React.createContext<AppContextType>({
  isDarkMode: false,
  handleSwitchDarkMode: () => {},
  isNavigationMode: false,
  handleSwitchNavigationMode: () => {},
  isFullScreenCarouselMode: { index: 0, isActive: false },
  handleSwitchFullScreenCarouselMode: () => {},
});

export default AppContext;
