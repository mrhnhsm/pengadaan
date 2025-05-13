import { useState } from "react";
import "../../App.css";
import "../../assets/css/date.css";
import Routes from "../../page/routes/Routes";
import { Layout, theme, DatePicker } from "antd";
import SideBar from "../../component/Sider";
import { UserOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;
const { Header, Content } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const handleStartChange = (date) => {
    setDateRange((prev) => ({ ...prev, startDate: date }));
  };

  const handleEndChange = (date) => {
    setDateRange((prev) => ({ ...prev, endDate: date }));
  };
  return (
    <Layout>
      <SideBar />
      <Layout>
        <Header
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 1000,
            background: colorBgContainer,
          }}
        >
          <div className="header">
            <div className="date-filter">
              <DatePicker
                placeholder="Start Date"
                onChange={handleStartChange}
                style={{ width: 130 }}
              />
              <DatePicker
                placeholder="End Date"
                onChange={handleEndChange}
                style={{ width: 130 }}
              />
              <button className="profile">
                <UserOutlined />
                <p className="username">Wak leman</p>
              </button>
            </div>
          </div>
        </Header>
        <Content
          style={{
            // margin: "10px 0px 0",
            marginTop: 100, // atau tinggi header kamu
            // padding: 10,
          }}
        >
          <div
            style={{
              marginLeft: "11.5vw",
              padding: 30,
              minHeight: 800,
              width: "100vw",
              maxWidth: "100vw",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
