import React, { useState } from "react";
import { Card, Col, Row, Button } from "antd";
import "../assets/css/card.css";
import "../assets/css/chart.css";
import "../assets/css/cardSla.css";
import {
  TableNamaVendor,
  TableBidang,
  TableWilayah,
} from "../component/table/Table";

import { LineChartOutlined, ToolOutlined } from "@ant-design/icons";
import InvestasiEksploitasi from "../component/chart/InvestasiEksploitasi";
import InvestasiRealRupa from "../component/chart/InvestasiRealRupa";
import EksploitasiRealRupa from "../component/chart/EksploitasiRealRupa";
import TopCardGroup from "../component/card/Dashboard-Utama/TopCardGroup";
import CardRupa from "../component/card/Dashboard-Utama/CardRupa";

export default function DashboardSla() {
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
      <div>
        <h1>RATA-RATA PENYELESAIAN PAKET SESUAI SLA</h1>
      </div>

      <Row gutter={10} style={{ gap: 390, marginBottom: "2vh" }}>
        <Col span={8}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: "#2c3e50",
              marginBottom: 16,
              height: "25vh",
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">
                  TENDER TERBATAS
                  <br />
                  (SLA = 6-14 HARI)
                </p>
              </div>
              <div className="persentase-sla">
                <h1>26 Hari</h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={8}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: "#2c3e50",
              marginBottom: 16,
              height: "25vh",
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">
                  PENUNJUKKAN LANGSUNG
                  <br />
                  (SLA = 13-25 HARI)
                </p>
              </div>
              <div className="persentase-sla">
                <h1>%</h1>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row gutter={10} style={{ marginBottom: "2vh" }}>
        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: "#2c3e50",
              marginBottom: 16,
              height: "20vh",
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">NAMA VENDOR</p>
              </div>
              <div className="persentase-sla">
                <h1>PT. Sejahtera Abadi</h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: "#2c3e50",
              marginBottom: 16,
              height: "20vh",
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">JUMLAH PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1>20 PAKET</h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: "#2c3e50",
              marginBottom: 16,
              height: "20vh",
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">NILAI PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1>RP.200.000</h1>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <TableNamaVendor />

      <Row gutter={10} style={{ marginBottom: "2vh" }}>
        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: "#2c3e50",
              marginBottom: 16,
              height: "20vh",
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">BIDANG</p>
              </div>
              <div className="persentase-sla">
                <h1>Transportasi</h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: "#2c3e50",
              marginBottom: 16,
              height: "20vh",
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">JUMLAH PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1>20 PAKET</h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: "#2c3e50",
              marginBottom: 16,
              height: "20vh",
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">NILAI PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1>RP.200.000</h1>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <TableWilayah />

      <Row gutter={10} style={{ marginBottom: "2vh" }}>
        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: "#2c3e50",
              marginBottom: 16,
              height: "20vh",
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">WILAYAH</p>
              </div>
              <div className="persentase-sla">
                <h1>Adolina</h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: "#2c3e50",
              marginBottom: 16,
              height: "20vh",
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">JUMLAH PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1>20 PAKET</h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: "#2c3e50",
              marginBottom: 16,
              height: "20vh",
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">NILAI PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1>RP.200.000</h1>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <TableWilayah />
    </div>
  );
}
