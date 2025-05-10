import React from "react";
import {
  UploadOutlined,
  AppstoreOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { Layout, Menu, theme } from "antd";
import useApp from "antd/es/app/useApp";
import { useAppContext } from "../context/AppContext";

const { Header, Content, Footer, Sider } = Layout;

const labels = ["Dashboard Utama", "RUPA", "Rata-rata SLA"];
const icons = [AppstoreOutlined, VideoCameraOutlined, UploadOutlined];

const items = icons.map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: labels[index],
}));

const SideBar = () => {
  const { setActivePage } = useAppContext();
  return (
    <Sider
      style={{
        backgroundColor: "#287d70",
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        zIndex: 1000,
      }}
      width="12vw"
      breakpoint="lg"
      collapsedWidth="0"
      theme="dark"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        style={{
          height: "100%",
          backgroundColor: "#287d70",
          padding: 10,
          width: "100%",
        }}
        theme="dark"
        mode="inline"
        selectedKeys={[route]}
        onClick={handleMenuClick}
        items={[
          {
            key: "dashboardUtama",
            icon: <AppstoreOutlined/>,
            label: 'Dashboard Utama'
          },
          {
            key: "rupa",
            icon: <AppstoreOutlined/>,
            label: 'Rupa'
          },
        ]}
      />
    </Sider>
  );
};

export default SideBar;
