import React, { createContext, useState, useContext } from 'react';

const ApplicationContext = createContext();

export default function AppContextProvider({ children }) {
  const [route, setRoute] = useState('dashboard');
  console.log(route);

  //Handling Route
  const handleRoute = (value) => {
    setRoute(value);
  };

  //Object
  const contextValue = {
    route,
    setRoute,

    handleRoute,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export const AppContext = ApplicationContext;
