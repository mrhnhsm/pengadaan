import React, { useState } from "react";
import { Row, Col, Card, Button, Modal } from "antd";
import NilaiPaketKso from "../../chart/chartRupa/NilaiPaketKso";
import NilaiPaketRegII from "../../chart/chartRupa/NilaiPaketRegII";
import PaketKso from "../../chart/chartRupa/PaketKso";
import PaketRegII from "../../chart/chartRupa/PaketRegII";
import "../../../assets/css/cardRupa.css";
import {
  CheckCircleOutlined,
  TeamOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import CountUp from "react-countup";

export default function CardIsi() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const formatNominal = (value) => {
    if (value >= 1_000_000_000_000) {
      return { val: value / 1_000_000_000_000, unit: "Triliun" };
    } else if (value >= 1_000_000_000) {
      return { val: value / 1_000_000_000, unit: "Miliar" };
    } else if (value >= 1_000_000) {
      return { val: value / 1_000_000, unit: "Juta" };
    } else if (value >= 1_000) {
      return { val: value / 1_000, unit: "Ribu" };
    } else {
      return { val: value, unit: "" };
    }
  };

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
        return <PaketRegII detailMode={true} />;
      case 2:
        return <NilaiPaketRegII detailMode={true} />;
      case 3:
        return <PaketKso detailMode={true} />;
      case 4:
        return <NilaiPaketKso detailMode={true} />;
      default:
        return <p style={{ color: "white" }}>Tidak ada konten.</p>;
    }
  };

  return (
    <div>
      {[
        {
          title: "REGIONAL 2",
          // card 1
          titleCard1: "RUPA REGIONAL 2 (SETAHUN)",
          persentase1: 30,
          paket1: 45,
          nominal1: 20000000,
          icon1: TeamOutlined,

          //   card 2
          titleCard2: "CHART PAKET REGIONAL 2",
          modal2: 1,
          ChartCard2: PaketRegII,

          //   card 3
          titleCard3: "PAKET SELESAI (SD)",
          persentase3: 30,
          paket3: 45,
          nominal3: 20000000,
          icon3: CheckCircleOutlined,

          //   card 4
          titleCard4: "NILAI PAKET REGIONAL 2",
          modal4: 2,
          ChartCard4: NilaiPaketRegII,
        },
        {
          title: "KSO (EKS. N2)",
          // card 1
          titleCard1: "RUPA KSO (EKS. N2) (SETAHUN)",
          persentase1: 50,
          paket1: 25,
          nominal1: 50000000,
          icon1: BarChartOutlined,

          //   card 2
          titleCard2: "CHART PAKET KSO",
          ChartCard2: PaketKso,
          modal2: 3,

          //   card 3
          titleCard3: "PAKET SELESAI (SD)",
          persentase3: 30,
          paket3: 45,
          nominal3: 20000000,
          icon3: CheckCircleOutlined,

          //   card 4
          titleCard4: "CHART NILAI PAKET KSO",
          ChartCard4: NilaiPaketKso,
          modal4: 4,
        },
      ].map((item, index) => (
        <div key={index}>
          <h1 style={{ color: "black" }}>{item.title}</h1>
          <Row gutter={10} style={{ marginBottom: "0vh" }}>
            <Col span={5}>
              <Card
                className="card-hover"
                style={{
                  backgroundColor: "#e0f2fe",
                  overflow: "hidden",
                  borderRadius: "12px",
                }}
              >
                <div className="container">
                  <h4 className="title-rupa">{item.titleCard1}</h4>

                  <div className="middle-row-rupa">
                    <div className="middle-item border-right">
                      <p className="paket-rupa">
                        <CountUp end={item.paket1} duration={2} /> Paket
                      </p>
                    </div>
                    <div className="middle-item">
                      <p className="persentase-rupa">
                        <CountUp end={item.persentase1} duration={2} />%
                      </p>
                    </div>
                  </div>

                  <div className="bottom-rupa">
                    <p className="nominal-rupa">
                      NOMINAL <br />
                      {(() => {
                        const { val, unit } = formatNominal(item.nominal1 || 0);
                        return (
                          <>
                            Rp <CountUp end={val} decimals={1} duration={2} />{" "}
                            {unit}
                          </>
                        );
                      })()}
                    </p>
                  </div>
                </div>
              </Card>
            </Col>

            <Col span={5}>
              <Card
                className="card-hover"
                style={{
                  backgroundColor: "#fef08a",
                  // marginBottom: 16,
                  overflow: "hidden",
                }}
              >
                <div className="container">
                  <p className="title-rupa">
                    {item.titleCard2} <br />
                    (REAL VS RUPA)
                  </p>
                  {React.createElement(item.ChartCard2, { detailMode: false })}
                  <Button
                    className="detail-btn"
                    type="primary"
                    onClick={() => showModal(item.modal2)}
                  >
                    Lihat Detail
                  </Button>
                </div>
              </Card>
            </Col>
            <Col span={5}>
              <Card
                className="card-hover"
                style={{
                  backgroundColor: "#e0f2fe",
                  overflow: "hidden",
                  borderRadius: "12px",
                }}
              >
                <div className="container">
                  <h4 className="title-rupa">{item.titleCard3}</h4>

                  <div className="middle-row-rupa">
                    <div className="middle-item border-right">
                      <p className="paket-rupa">
                        <CountUp end={item.paket3} duration={2} /> Paket
                      </p>
                    </div>
                    <div className="middle-item">
                      <p className="persentase-rupa">
                        <CountUp end={item.persentase3} duration={2} />%
                      </p>
                    </div>
                  </div>

                  <div className="bottom-rupa">
                    <p className="nominal-rupa">
                      NOMINAL <br />
                      {(() => {
                        const { val, unit } = formatNominal(item.nominal3 || 0);
                        return (
                          <>
                            Rp <CountUp end={val} decimals={1} duration={2} />{" "}
                            {unit}
                          </>
                        );
                      })()}
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col span={5}>
              <Card
                className="card-hover"
                style={{
                  backgroundColor: "#fef08a",
                  // marginBottom: 16,
                  overflow: "hidden",
                }}
              >
                <div className="container">
                  <p className="title-rupa">
                    {item.titleCard4} <br />
                    (REAL VS RUPA)
                  </p>
                  {React.createElement(item.ChartCard4, { detailMode: false })}
                  <Button
                    className="detail-btn"
                    type="primary"
                    onClick={() => showModal(item.modal4)}
                  >
                    Lihat Detail
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
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
