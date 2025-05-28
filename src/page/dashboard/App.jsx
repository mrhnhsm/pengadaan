import { useState } from "react";
import "../../assets/css/date.css";
import "../../App.css";
import Routes from "../../page/routes/Routes";
import { Layout, theme, DatePicker, Menu, Dropdown } from "antd";
import SideBar from "../../component/Sider";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

import FabMenu from "../../component/fab/FabMenu";

const { RangePicker } = DatePicker;
const { Header, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const menu = (
    <Menu>
      <Menu.Item
        key="logout"
        icon={<LogoutOutlined />}
        onClick={() => console.log("Logout clicked")}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleRangeChange = (dates, dateStrings) => {
    const [startDate, endDate] = dateStrings;
    console.log("Start:", startDate, "End:", endDate);
  };
  return (
    <Layout>
      <SideBar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        style={{ transition: "width 5.9s ease;" }}
      />
      <Layout>
        <Header
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 1000,
            padding: 0,
            backgroundColor: "#FBFFF5",
          }}
        >
          <div className="header">
            <div className="date-filter">
              <p style={{ color: "white" }}>Filter Data:</p>
              <RangePicker
                placeholder={["Start Date", "End Date"]}
                onChange={handleRangeChange}
                style={{
                  width: "auto",
                  border: "none",
                  color: "black",
                }}
              />

              <Dropdown
                overlay={menu}
                placement="bottomRight"
                trigger={["click"]}
              >
                <button className="profile">
                  <UserOutlined />
                  <p className="username">Wak leman</p>
                </button>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content
          style={{
            marginTop: 100,
            position: "relative", // jaga-jaga kalau kamu mau pakai posisi absolute juga
          }}
        >
          <div
            style={{
              marginLeft: collapsed ? 80 : "11.5vw",
              transition: "margin-left 0.3s ease, width 0.3s ease",
              padding: 30,
              minHeight: 800,
              width: collapsed ? "109vw" : "100vw",
              backgroundColor: "#FBFFF5",
            }}
          >
            <Routes />
          </div>
          <div
            style={{
              zIndex: 10000,
            }}
          >
            <FabMenu />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
