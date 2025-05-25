import React, { useContext } from "react";
import {
  AppstoreOutlined,
  FileDoneOutlined,
  FileImageOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { AppContext } from "../context/AppContext";
import LogoPtpn from "../assets/img/PTPN-4.png";
import "../assets/css/sider.css";

const { Sider } = Layout;

const SideBar = ({ collapsed, setCollapsed }) => {
  const { handleRoute, route } = useContext(AppContext);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        backgroundColor: "#d1fae5", // Sage green
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        zIndex: 1200,
      }}
      width="12vw"
      collapsedWidth={80}
      breakpoint="lg"
      theme="light"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "start",
          padding: "16px",
          flexDirection: "row",
          gap: 10,
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
              color: "#065f46", // teks hijau gelap
              fontSize: "14px",
              margin: 0,
              textAlign: "left",
              fontWeight: "bold",
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
          backgroundColor: "#d1fae5", // Sage green
          padding: 10,
          width: "100%",
          fontSize: 17,
          color: "#065f46",
        }}
        theme="light"
        mode="inline"
        onClick={(e) => handleRoute(e.key)}
        defaultSelectedKeys={[route]}
        selectedKeys={[route]}
        items={[
          {
            key: "dashboardUtama",
            icon: <AppstoreOutlined style={{ color: "#065f46" }} />,
            label: "Dashboard Utama",
          },
          {
            key: "Dashboardrupa",
            icon: <FileImageOutlined style={{ color: "#065f46" }} />,
            label: "Rupa",
          },
          {
            key: "Dashboardsla",
            icon: <FileDoneOutlined style={{ color: "#065f46" }} />,
            label: "SLA",
          },
        ]}
      />
    </Sider>
  );
};

export default SideBar;
