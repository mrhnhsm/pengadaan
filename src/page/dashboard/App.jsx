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
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleRangeChange = (dates, dateStrings) => {
    const [startDate, endDate] = dateStrings;
    console.log("Start:", startDate, "End:", endDate);
  };
  return (
    <Layout>
      <SideBar collapsed={collapsed} setCollapsed={setCollapsed} style= {{ transition:"width 5.9s ease;"}}/>
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
              <p style={{color:"white"}}>Filter Data:</p>
              <RangePicker
                placeholder={["Start Date", "End Date"]}
                onChange={handleRangeChange}
                style={{ width: 890,  marginRight:200, border:"none", color:"black"}}
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
            marginTop:100,
          }}
        >
          <div
            style={{
              marginLeft: collapsed ? 80 : "11.5vw", 
              transition: "margin-left 0.3s ease, width 0.3s ease " ,
              padding: 30,
              minHeight: 800,
              width: collapsed ? "109vw" : "100vw",
              backgroundColor: "#FBFFF5",
              // borderRadius: borderRadiusLG,
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
