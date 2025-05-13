import React, { useContext } from 'react';
import DashboardUtama from '../../views/DashboardUtama';
import DashboardRupa from '../../views/DashboardRupa';
import DashboardSla from '../../views/DashboardSla';
import { AppContext } from '../../context/AppContext';

export default function Route() {
  const { route } = useContext(AppContext);

  const renderPage = () => {
    switch (route) {
      case 'dashboardUtama':
        return <DashboardUtama />;
      case 'Dashboardrupa':
        // console.log(2)
        return <DashboardRupa />;
      case 'Dashboardsla':
        return <DashboardSla />;
      default:
        return <DashboardUtama />;
    }
  };
  return <>{renderPage()}</>;
}
