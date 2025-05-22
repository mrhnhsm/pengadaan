// components/TopCardGroup.jsx
import React from "react";
import { Row, Col, Card } from "antd";
import { LineChartOutlined } from "@ant-design/icons";
import CountUp from 'react-countup';

export default function TopCardGroup () {
  return (
    <Row gutter={10} style={{ marginBottom: "2vh" }}>
      {[
        { title: "TERHADAP RKAP", value: 30 },
        { title: "TERHADAP HPS", value: 30 },
        { title: "PROCUREMANT EXCELLENCE", value: 30 },
      ].map((item, index) => (
        <Col span={7} key={index}>
          <Card
            className="top-card"
            style={{
              height: "30vh",
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title-topgroup">{item.title}</p>
                <p className="show-icon">
                  <LineChartOutlined />
                </p>
              </div>
              <div className="container-row-2" style={{color:"white"}}>
                <h1>|</h1>
                <h1><CountUp end={item.value} duration={2} />%</h1>
                <h1>|</h1>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
