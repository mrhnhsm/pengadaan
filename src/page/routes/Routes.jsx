import AppContext from "antd/es/app/context";
import React, { useContext } from "react";
import DashboardUtama from "../../views/Card";
import DashboardRupa from "../../views/Card2";

export default function Route() {
  const { route } = useContext(AppContext);

  const renderPage = () => {
    switch (route) {
      case "dashboard":
        return <DashboardUtama />;
      case "profile":
        return <DashboardRupa />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };
  return <>{renderPage()}</>;
}
