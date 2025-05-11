import React, { useContext } from 'react';
import {
  UploadOutlined,
  AppstoreOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { Layout, Menu, theme } from 'antd';
import { AppContext } from '../context/AppContext';

const { Header, Content, Footer, Sider } = Layout;

const SideBar = () => {
  const { handleRoute, route } = useContext(AppContext);
  return (
    <Sider
      style={{
        backgroundColor: '#287d70',
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        zIndex: 1000,
      }}
      width="12vw"
      breakpoint="lg"
      collapsedWidth="0"
      theme="dark"
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}>
      <div className="demo-logo-vertical" />
      <Menu
        style={{
          height: '100%',
          backgroundColor: '#287d70',
          padding: 10,
          width: '100%',
        }}
        theme="dark"
        mode="inline"
        onClick={(e) => handleRoute(e.key)}
        defaultSelectedKeys={[route]}
        selectedKeys={[route]}
        items={[
          {
            key: 'dashboardUtama',
            icon: <AppstoreOutlined />,
            label: 'Dashboard Utama',
          },
          {
            key: 'Dashboardrupa',
            icon: <AppstoreOutlined />,
            label: 'Rupa',
          },
        ]}
      />
    </Sider>
  );
};

export default SideBar;
