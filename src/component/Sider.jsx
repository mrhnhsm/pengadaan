import React, { useContext } from "react";
import { AppstoreOutlined, FileDoneOutlined, FileImageOutlined, UploadOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { AppContext } from "../context/AppContext";
import LogoPtpn from "../assets/img/PTPN-4.png";
import "../assets/css/sider.css"
const { Sider } = Layout;

const SideBar = ({ collapsed, setCollapsed }) => {
  const { handleRoute, route } = useContext(AppContext);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        backgroundColor: "#287d70",
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        zIndex: 1200,
      }}
      width="12vw"
      collapsedWidth={80}
      breakpoint="lg"
      theme="dark"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "start",
          padding: "16px",
          flexDirection: "row",
          gap: 10,
          // transition: "all 0.8s ease",
        }}
        >
        <img
          src={LogoPtpn}
          alt="Company Logo"
          style={{
            width: "40px",
            height: "40px",
            marginBottom: "8px",
          }}
          />
        {!collapsed && (
          <h3
          style={{
            color: "white",
            fontSize: "14px",
            margin: 0,
            textAlign: "left",
          }}
          >
            Dashboard <br />
            Pengadaan Vendor
          </h3>
        )}
      </div>

      <Menu
        style={{
          height: "100%",
          backgroundColor: "#287d70",
          padding: 10,
          width: "100%",
          fontSize:17,
        }}
        theme="dark"
        mode="inline"
        onClick={(e) => handleRoute(e.key)}
        defaultSelectedKeys={[route]}
        selectedKeys={[route]}
        items={[
          {
            key: "inputExcel",
            icon: <UploadOutlined />,
            label: "Input Excel",
          },
          {
            key: "dashboardUtama",
            icon: <AppstoreOutlined />,
            label: "Dashboard Utama",
          },
          {
            key: "Dashboardrupa",
            icon: <FileImageOutlined />,
            label: "Rupa",
          },
          {
            key: "Dashboardsla",
            icon: <FileDoneOutlined />,
            label: "SLA",
          },
        ]}
      />
    </Sider>
  );
};

export default SideBar;
