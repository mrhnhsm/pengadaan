import React, { useState } from 'react';
import { Card, Col, Row, Modal, Button } from 'antd';
import '../assets/css/card.css';
import '../assets/css/chart.css';
import { LineChartOutlined, ToolOutlined } from '@ant-design/icons';
import InvestasiEksploitasi from '../component/chart/InvestasiEksploitasi';
import InvestasiRealRupa from '../component/chart/InvestasiRealRupa';
import EksploitasiRealRupa from '../component/chart/EksploitasiRealRupa';
import TenderTerbatas from '../component/chart/TenderTerbatas';
import PenunjukkanLangsung from '../component/chart/PenunjukkanLangusng';
import TenderPenunjukkanLangsung from '../component/chart/TenderPenunjukkanLangsung';

export default function DashboardUtama() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

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
        return <p style={{ color: 'white' }}>Tidak ada konten.</p>;
    }
  };

  return (
    <div>
      {/* baris pertama */}
      <Row
        gutter={10}
        style={{ marginBottom: '2vh' }}>
        <Col span={11}>
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
                <p className="title">INVESTASI</p>
                <p className="persentase">20%</p>
              </div>
              <div className="container-row-2">
                <LineChartOutlined
                  style={{
                    fontSize: '10vh',
                    marginLeft: '10%',
                    marginBottom: 40,
                  }}
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
                <p className="title">
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
                <p className="title">EKSPLOITASI</p>
                <p className="persentase">20%</p>
              </div>
              <div className="container-row-2">
                <ToolOutlined
                  style={{
                    fontSize: '10vh',
                    marginLeft: '10%',
                    marginBottom: 40,
                  }}
                />
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
                <p className="title">
                  CHART EKSPLOITASI <br />
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
      <Col span={21}>
        {/* Chart Investasi Vs Eksploitasi */}
        <Card
          className="card-hover"
          style={{
            backgroundColor: '#2c3e50',
            marginBottom: 16,
            height: '70vh',
            overflow: 'hidden',
          }}>
          <div className="container">
            <div className="container-top-card">
              <p className="title">
                CHART
                <br />
                INVESTASI VS EKSPLOITASI
              </p>
              <Button
                className="detail-btn"
                type="primary"
                onClick={() => showModal(1)}>
                Lihat Detail
              </Button>
            </div>
            <InvestasiEksploitasi detailMode={false} />
          </div>
        </Card>
      </Col>
      {/* baris kedua */}
      <Row gutter={10}>
        <Col span={11}>
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
                <p className="title">TENDER TERBATAS</p>
                <p className="persentase">20%</p>
              </div>
              <div className="container-row-2">
                <LineChartOutlined
                  style={{
                    fontSize: '10vh',
                    marginLeft: '10%',
                    marginBottom: 40,
                  }}
                />
                <h2 className="paket">20 Paket</h2>
              </div>
              <div className="text-paket">
                <h2 className="nominal">Rp.200.0000000.000</h2>
              </div>
            </div>
          </Card>

          {/* Tender Terbatas */}
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
                <p className="title">
                  CHART TERNDER TERBATAS <br />
                  (REAL VS RUPA)
                </p>
                <Button
                  className="detail-btn"
                  type="primary"
                  onClick={() => showModal(4)}>
                  Lihat Detail
                </Button>
              </div>
              <TenderTerbatas detailMode={false} />
            </div>
          </Card>
        </Col>
        <Col span={10}>
          {/* Penunjukkan Langsung */}
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
                <p className="title">PENUNJUKKAN LANGSUNG</p>
                <p className="persentase">20%</p>
              </div>
              <div className="container-row-2">
                <LineChartOutlined
                  style={{
                    fontSize: '10vh',
                    marginLeft: '10%',
                    marginBottom: 40,
                  }}
                />
                <h2 className="paket">20 Paket</h2>
              </div>
              <div className="text-paket">
                <h2 className="nominal">Rp.200.0000000.000</h2>
              </div>
            </div>
          </Card>

          {/* Penunjukkan Langsung Chart */}
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
                <p className="title">
                  CHART PENUNJUKKAN LANGSUNG <br />
                  (REAL VS RUPA)
                </p>
                <Button
                  className="detail-btn"
                  type="primary"
                  onClick={() => showModal(5)}>
                  Lihat Detail
                </Button>
              </div>
              <PenunjukkanLangsung detailMode={false} />
            </div>
          </Card>
        </Col>
        <Col span={21}>
          {/* Tender vs P.Langsung */}
          <Card
            className="card-hover"
            style={{
              backgroundColor: '#2c3e50',
              marginBottom: 16,
              height: '7  0vh',
              overflow: 'hidden',
            }}>
            <div className="container">
              <div className="container-top-card">
                <p className="title">
                  CHART
                  <br />
                  TENDER VS PENUNJUKKAN LANGSUNG
                </p>
                <Button
                  className="detail-btn"
                  type="primary"
                  onClick={() => showModal(6)}>
                  Lihat Detail
                </Button>
              </div>
              <TenderPenunjukkanLangsung detailMode={false} />
            </div>
          </Card>
        </Col>
      </Row>
      <Modal
        title="Detail"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={900}
        styles={{
          body: { backgroundColor: '#2c3e50', height: '70vh' },
        }}>
        {renderModalContent()}
      </Modal>
    </div>
  );
}
