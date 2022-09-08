import React from 'react';

type AppContextType = {
  isDarkMode: boolean;
  handleSwitchDarkMode: (isDarkMode: boolean) => void;
  isNavigationMode: boolean;
  handleSwitchNavigationMode: (isNavigationMode: boolean) => void;
};

const AppContext = React.createContext<AppContextType>({
  isDarkMode: false,
  handleSwitchDarkMode: () => {},
  isNavigationMode: false,
  handleSwitchNavigationMode: () => {},
});

export default AppContext;
