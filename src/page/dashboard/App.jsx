import React from "react";
import "../../App.css";
import Routes from "../../page/routes/Routes"
import { Layout, Menu, theme } from "antd";
import SideBar from "../../component/Sider";
import {UserOutlined} from "@ant-design/icons"
import Route from "../routes/Routes";
const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <SideBar />
      <Layout>
        <Header
          style={{
            marginLeft: "12vw",
            width: "90vw",
            maxWidth: "100vw",
          }}
        >
          <div className="header">
            <button className="profile">
            <UserOutlined />
              <p className="username">Wak leman</p>
            </button>
            
          </div>
        </Header>
        <Content style={{ margin: "10px 0px 0" }}>
          <div
            style={{
              marginLeft: "11.5vw",
              padding: 30,
              minHeight: 800,
              width: "100vw",
              maxWidth: "100vw",
              background: "white",
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes/>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
