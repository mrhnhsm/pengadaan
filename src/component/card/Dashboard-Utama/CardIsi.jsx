import React, { useState } from "react";
import { Row, Col, Card, Button, Modal } from "antd";
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
        return <InvestasiEksploitasi detailMode={true} />;
      case 2:
        return <InvestasiRealRupa detailMode={true} />;
      case 3:
        return <EksploitasiRealRupa detailMode={true} />;
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
          modal2: 1,

          //   card 3
          titleCard3: "EKSPLOITASI",
          persentase3: 30,
          paket3: 45,
          nominal3: 20000000,
          icon3: ToolOutlined,

          //   card 4
          titleCard4: "CHART EKSPLOITASI",
          modal4: 2,

          //   card 5
          titleCard5: "CHART (INVESTASI VS EKSPLOITASI)",
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
          modal2: 4,

          //   card 3
          titleCard3: "PENUNJUKKAN LANGSUNG",
          persentase3: 30,
          paket3: 45,
          nominal3: 20000000,
          icon3: SelectOutlined,

          //   card 4
          titleCard4: "CHART PEMBELIAN LANGSUNG",
          modal4: 5,

          //   card 5
          titleCard5: "CHART (TENDER VS PEMBELIAN LANGSUNG)",
          modal5: 6,
        },
      ].map((item, index) => (
        <Row gutter={10} style={{ marginBottom: "2vh" }} key={index}>
          <Col span={11}>
            <Card
              className="card-hover"
              style={{
                backgroundColor: "#2c3e50",
                marginBottom: 16,
                overflow: "hidden",
              }}
            >
              <div className="container">
                <div className="container-top-card">
                  <p className="title">{item.titleCard1}</p>
                  <p className="persentase">{item.persentase1}%</p>
                </div>
                <div className="container-row-2">
                  <item.icon1
                    style={{
                      fontSize: "6vh",
                      marginLeft: "10%",
                      marginBottom: 40,
                    }}
                  />
                  <h2 className="paket">{item.paket1} Paket</h2>
                </div>
                <div className="text-paket">
                  <h2 className="nominal">Rp.{item.nominal1}</h2>
                </div>
              </div>
            </Card>

            <Card
              className="card-hover"
              style={{
                backgroundColor: "#2c3e50",
                marginBottom: 16,
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
                <InvestasiRealRupa detailMode={false} />
              </div>
            </Card>
          </Col>

          <Col span={10}>
            <Card
              className="card-hover"
              style={{
                backgroundColor: "#2c3e50",
                marginBottom: 16,
                overflow: "hidden",
              }}
            >
              <div className="container">
                <div className="container-top-card">
                  <p className="title">{item.titleCard3}</p>
                  <p className="persentase">{item.persentase3}%</p>
                </div>
                <div className="container-row-2">
                  <item.icon3
                    style={{
                      fontSize: "6vh",
                      marginLeft: "10%",
                      marginBottom: 40,
                    }}
                  />
                  <h2 className="paket">{item.paket3} Paket</h2>
                </div>
                <div className="text-paket">
                  <h2 className="nominal">Rp.{item.nominal3}</h2>
                </div>
              </div>
            </Card>

            <Card
              className="card-hover"
              style={{
                backgroundColor: "#2c3e50",
                marginBottom: 16,
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
                <EksploitasiRealRupa detailMode={false} />
              </div>
            </Card>
          </Col>

          <Col span={21}>
            <Card
              className="card-hover"
              style={{
                backgroundColor: "#2c3e50",
                marginBottom: 16,
                height: "75vh",
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
                <InvestasiEksploitasi detailMode={false} />
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
          body: { backgroundColor: "#2c3e50", height: "70vh" },
        }}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
}
