import dayjs from 'dayjs';
import React, { createContext, useState, useContext } from 'react';

const ApplicationContext = createContext();

export default function AppContextProvider({ children }) {
  const [loged, setLoged] = useState(''); //Verify User ID
  const [route, setRoute] = useState('dashboardUtama');
  const [userLoged, setUserLoged] = useState(null);
  const [tanggal_start, setTanggal_start] = useState(
    dayjs().format('DD-MM-YYYY')
  );
  const [tanggal_end, setTanggal_end] = useState(dayjs().format('DD-MM-YYYY'));

  // console.log(userLoged);

  //Handling Route
  const handleRoute = (value) => {
    setRoute(value);
  };

  const handleDateRange = (dates) => {
    if (dates) {
      const [start, end] = dates;
      setTanggal_start(dayjs(start).format('DD-MM-YYYY'));
      setTanggal_end(dayjs(end).format('DD-MM-YYYY'));
    } else {
      setTanggal_start('');
      setTanggal_end('');
    }
  };

  //Object
  const contextValue = {
    route,
    setRoute,
    setLoged,
    setUserLoged,
    userLoged,
    loged,
    tanggal_start,
    tanggal_end,

    handleRoute,
    handleDateRange,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export const AppContext = ApplicationContext;
