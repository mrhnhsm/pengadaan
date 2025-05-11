import React, { useContext } from 'react';
import DashboardUtama from '../../views/DashboardUtama';
import DashboardRupa from '../../views/DashboardRupa';
import { AppContext } from '../../context/AppContext';

export default function Route() {
  const { route } = useContext(AppContext);

  const renderPage = () => {
    switch (route) {
      case 'dashboardUtama':
        return <DashboardUtama />;
      case 'Dashboardrupa':
        return <DashboardRupa />;
      default:
        return <DashboardUtama />;
    }
  };
  return <>{renderPage()}</>;
}
