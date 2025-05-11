import React, { useState } from 'react';
import { Card, Col, Row, Modal, Button } from 'antd';
import '../assets/css/card.css';
import '../assets/css/chart.css';
import { LineChartOutlined, ToolOutlined } from '@ant-design/icons';
// import InvestasiEksploitasi from "../component/chart/InvestasiEksploitasi";
import InvestasiRealRupa from '../component/chart/InvestasiRealRupa';
import EksploitasiRealRupa from '../component/chart/EksploitasiRealRupa';
// import TenderTerbatas from "../component/chart/TenderTerbatas";
// import PenunjukkanLangsung from "../component/chart/PenunjukkanLangusng";
// import TenderPenunjukkanLangsung from "../component/chart/TenderPenunjukkanLangsung";

// const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalContent, setModalContent] = useState("");

export default function DashboardRupa() {
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
  return (
    <div>
      <Row
        gutter={10}
        style={{ marginBottom: '2vh' }}>
        <Col span={10}>
          {/* Investasi */}
          <Card
            className="card-hover"
            style={{
              backgroundColor: '#2c3e50',
              marginBottom: 16,
              height: '40vh',
              overflow: 'hidden',
            }}>
            <div className="container">
              <div className="container-top-card">
                <p style={{ color: 'white', fontSize: '1.3rem', margin: 0 }}>
                  INVESTASI
                </p>
                <p className="persentase">20%</p>
              </div>
              <div className="container-row-2">
                <LineChartOutlined
                  style={{ fontSize: '10vh', marginLeft: '10%' }}
                />
                <h2 className="paket">20 Paket</h2>
              </div>
              <div className="text-paket">
                <h2 className="nominal">Rp.200.0000000.000</h2>
              </div>
            </div>
          </Card>

          {/* Chart Investasi */}
          <Card
            className="card-hover"
            style={{
              backgroundColor: '#2c3e50',
              marginBottom: 16,
              height: '40vh',
              overflow: 'hidden',
            }}>
            <div className="container">
              <div className="container-top-card">
                <p style={{ color: 'white', fontSize: '1.3rem', margin: 0 }}>
                  CHART INVESTASI <br />
                  (REAL VS RUPA)
                </p>
                <Button
                  className="detail-btn"
                  type="primary"
                  onClick={() => showModal(2)}>
                  Lihat Detail
                </Button>
              </div>
              <InvestasiRealRupa detailMode={false} />
            </div>
          </Card>
        </Col>

        <Col span={10}>
          {/* Eksploitasi */}
          <Card
            className="card-hover"
            style={{
              backgroundColor: '#2c3e50',
              marginBottom: 16,
              height: '40vh',
              overflow: 'hidden',
            }}>
            <div className="container">
              <div className="container-top-card">
                <p style={{ color: 'white', fontSize: '1.3rem', margin: 0 }}>
                  EKSPLOITASI
                </p>
                <p className="persentase">20%</p>
              </div>
              <div className="container-row-2">
                <ToolOutlined style={{ fontSize: '10vh', marginLeft: '10%' }} />
                <h2 className="paket">60 Paket</h2>
              </div>
              <div className="text-paket">
                <h2 className="nominal">Rp.20.000.000</h2>
              </div>
            </div>
          </Card>

          <Card
            className="card-hover"
            style={{
              backgroundColor: '#2c3e50',
              marginBottom: 16,
              height: '40vh',
              overflow: 'hidden',
            }}>
            <div className="container">
              <div className="container-top-card">
                <p style={{ color: 'white', fontSize: '1.3rem', margin: 0 }}>
                  CHART EcsacacaKSPLOITASI <br />
                  (REAL VS RUPA)
                </p>
                <Button
                  className="detail-btn"
                  type="primary"
                  onClick={() => showModal(3)}>
                  Lihat Detail
                </Button>
              </div>
              <EksploitasiRealRupa detailMode={false} />
            </div>
          </Card>
        </Col>
      </Row>
      ;
    </div>
  );
}
