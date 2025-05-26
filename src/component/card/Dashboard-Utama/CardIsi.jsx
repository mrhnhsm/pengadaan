import React, { useState } from "react";
import { Row, Col, Card, Button, Modal } from "antd";
import CountUp from "react-countup";
import {
  LineChartOutlined,
  ToolOutlined,
  AuditOutlined,
  SelectOutlined,
} from "@ant-design/icons";
import InvestasiEksploitasi from "../../chart/InvestasiEksploitasi";
import InvestasiRealRupa from "../../chart/InvestasiRealRupa";
import EksploitasiRealRupa from "../../chart/EksploitasiRealRupa";
import TenderTerbatas from "../../chart/TenderTerbatas";
import PenunjukkanLangsung from "../../chart/PenunjukkanLangsung";
import TenderPenunjukkanLangsung from "../../chart/TenderPenunjukkanLangsung";
import "../../../assets/css/table.css";
import "../../../assets/css/chart.css";
console.log({
  InvestasiEksploitasi,
  InvestasiRealRupa,
  EksploitasiRealRupa,
  TenderTerbatas,
  PenunjukkanLangsung,
  TenderPenunjukkanLangsung,
});

export default function CardIsi() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const showModal = (contentType) => {
    setModalContent(contentType);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const renderModalContent = () => {
    console.log(modalContent);
    switch (modalContent) {
      case 1:
        return <InvestasiRealRupa detailMode={true} />;
      case 2:
        // return <InvestasiRealRupa detailMode={true} />;
        return <EksploitasiRealRupa detailMode={true} />;
      case 3:
        return <InvestasiEksploitasi detailMode={true} />;
      case 4:
        return <TenderTerbatas detailMode={true} />;
      case 5:
        return <PenunjukkanLangsung detailMode={true} />;
      case 6:
        return <TenderPenunjukkanLangsung detailMode={true} />;
      default:
        return <p style={{ color: "white" }}>Tidak ada konten.</p>;
    }
  };

  return (
    <div>
      {[
        {
          // card 1
          titleCard1: "INVESTASI",
          persentase1: 30,
          paket1: 45,
          nominal1: 20000000,
          icon1: LineChartOutlined,

          //   card 2
          titleCard2: "CHART INVESTASI",
          ChartCard2: InvestasiRealRupa,
          modal2: 1,

          //   card 3
          titleCard3: "EKSPLOITASI",
          persentase3: 30,
          paket3: 45,
          nominal3: 20000000,
          icon3: ToolOutlined,

          //   card 4
          titleCard4: "CHART EKSPLOITASI",
          ChartCard4: EksploitasiRealRupa,
          modal4: 2,

          //   card 5
          titleCard5: "INVESTASI VS EKSPLOITASI",
          ChartCard5: InvestasiEksploitasi,
          modal5: 3,
        },
        {
          // card 1
          titleCard1: "TENDER TERBATAS",
          persentase1: 50,
          paket1: 25,
          nominal1: 50000000,
          icon1: AuditOutlined,

          //   card 2
          titleCard2: "CHART TENDER TERBATAS",
          ChartCard2: TenderTerbatas,
          modal2: 4,

          //   card 3
          titleCard3: "PENUNJUKKAN LANGSUNG",
          persentase3: 30,
          paket3: 45,
          nominal3: 20000000,
          icon3: SelectOutlined,

          //   card 4
          titleCard4: "CHART PENUNJUKKAN LANGSUNG",
          ChartCard4: PenunjukkanLangsung,
          modal4: 5,

          //   card 5
          titleCard5: "TENDER VS PENUNJUKKAN LANGSUNG",
          ChartCard5: TenderPenunjukkanLangsung,
          modal5: 6,
        },
      ].map((item, index) => (
        <Row gutter={10} style={{ marginBottom: "2vh" }} key={index}>
          <Col span={6}>
            <Card
              className="card-hover"
              style={{
                backgroundColor: "#e0f2fe",
                overflow: "hidden",
              }}
            >
              <div className="container">
                <div className="container-top-card">
                  <p className="title">{item.titleCard1}</p>
                  <item.icon1
                    style={{
                      fontSize: "2rem",
                      marginLeft: "10%",
                      marginBottom: 40,
                      color: "black",
                    }}
                  />
                </div>
                <div className="container-row-2">
                  <h2 className="paket">
                    <CountUp end={item.paket1} duration={2} /> Paket
                  </h2>
                  <p className="persentase">
                    <CountUp end={item.persentase1} duration={2} />%
                  </p>
                </div>
                <div className="text-paket">
                  <h2 className="nominal">
                    Rp <CountUp end={item.nominal1} duration={2} />
                  </h2>
                </div>
              </div>
            </Card>

            <Card
              className="card-hover"
              style={{
                backgroundColor: "#fef08a",
                overflow: "hidden",
              }}
            >
              <div className="container">
                <div className="container-top-card">
                  <p className="title">
                    {item.titleCard2} <br />
                    (REAL VS RUPA)
                  </p>
                  <Button
                    className="detail-btn"
                    type="primary"
                    onClick={() => showModal(item.modal2)}
                  >
                    Lihat Detail
                  </Button>
                </div>
                {React.createElement(item.ChartCard2, { detailMode: false })}
              </div>
            </Card>
          </Col>
          <Col span={9}>
            <Card
              className="card-hover"
              style={{
                backgroundColor: "#dcfce7",
                height: "76vh",
                overflow: "hidden",
              }}
            >
              <div className="container">
                <div className="container-top-card">
                  <p className="title">
                    CHART
                    <br />
                    {item.titleCard5}
                  </p>
                  <Button
                    className="detail-btn"
                    type="primary"
                    onClick={() => showModal(item.modal5)}
                  >
                    Lihat Detail
                  </Button>
                </div>
                <div className="chart-table">
                  <div className="chart-container">
                    {React.createElement(item.ChartCard5, {
                      detailMode: false,
                    })}
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              className="card-hover"
              style={{
                backgroundColor: "#fbcfe8",
                overflow: "hidden",
              }}
            >
              <div className="container">
                <div className="container-top-card">
                  <p className="title">{item.titleCard3}</p>
                  <item.icon3
                    style={{
                      color: "black",
                      fontSize: "2rem",
                      marginLeft: "10%",
                      marginBottom: 40,
                    }}
                  />
                </div>
                <div className="container-row-2">
                  <h2 className="paket">
                    <CountUp end={item.paket3} duration={2} /> Paket
                  </h2>
                  <p className="persentase">
                    <CountUp end={item.persentase3} duration={2} />%
                  </p>
                </div>
                <div className="text-paket">
                  <h2 className="nominal">
                    Rp <CountUp end={item.nominal3} duration={2} />
                  </h2>
                </div>
              </div>
            </Card>

            <Card
              className="card-hover"
              style={{
                backgroundColor: "#f5f0ff",
                overflow: "hidden",
              }}
            >
              <div className="container">
                <div className="container-top-card">
                  <p className="title">
                    {item.titleCard4} <br />
                    (REAL VS RUPA)
                  </p>
                  <Button
                    className="detail-btn"
                    type="primary"
                    onClick={() => showModal(item.modal4)}
                  >
                    Lihat Detail
                  </Button>
                </div>
                {React.createElement(item.ChartCard4, { detailMode: false })}
              </div>
            </Card>
          </Col>
        </Row>
      ))}
      <Modal
        title="Detail"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={900}
        styles={{
          body: { backgroundColor: "#F5F5F5", height: "70vh" },
        }}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
}
