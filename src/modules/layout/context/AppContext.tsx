import React from 'react';

type AppContextType = {
  isDarkMode: boolean;
  handleSwitchLightMode: (isDarkMode: boolean) => void;
};

const AppContext = React.createContext<AppContextType>({
  isDarkMode: false,
  handleSwitchLightMode: () => {},
});

export default AppContext;
