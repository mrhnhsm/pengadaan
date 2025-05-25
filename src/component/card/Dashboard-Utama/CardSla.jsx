import { Card, Col, Row } from "antd";
import "../../../assets/css/card.css";
import "../../../assets/css/chart.css";
import "../../../assets/css/cardSla.css";
import {
  TableNamaVendor,
  TableBidang,
  TableWilayah,
} from "../../../component/table/Table";
import CountUp from 'react-countup';

export function NamaVendor() {
  return (
    <div>
      <Row gutter={10} style={{ marginBottom: "2vh" }}>
        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: "#e0f2fe",
              marginBottom: 16,
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">NAMA VENDOR</p>
              </div>
              <div className="persentase-sla">
                <h1 className="isi-card-sla">PT. Sejahtera Abadi</h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: "#fef08a",
              marginBottom: 16,
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">JUMLAH PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1 className="isi-card-sla">20 PAKET</h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: "#dcfce7",
              marginBottom: 16,
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">NILAI PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1 className="isi-card-sla">RP.200.000</h1>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <TableNamaVendor />
    </div>
  );
}

export function Bidang() {
  return (
    <div>
      <Row gutter={10} style={{ marginBottom: "2vh" }}>
        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: "#e0f2fe",
              marginBottom: 16,
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">BIDANG</p>
              </div>
              <div className="persentase-sla">
                <h1 className="isi-card-sla">Transportasi</h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: "#fef08a",
              marginBottom: 16,
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">JUMLAH PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1 className="isi-card-sla">20 PAKET</h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: "#dcfce7",
              marginBottom: 16,
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">NILAI PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1 className="isi-card-sla">RP.200.000</h1>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <TableBidang />
    </div>
  );
}


export function Wilayah(){
  return(
    <div>
  <Row gutter={10} style={{ marginBottom: "2vh" }}>
        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: "#e0f2fe",
              marginBottom: 16,
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">WILAYAH</p>
              </div>
              <div className="persentase-sla">
                <h1 className="isi-card-sla">Adolina</h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: "#fef08a",
              marginBottom: 16,
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">JUMLAH PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1 className="isi-card-sla">20 PAKET</h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: "#dcfce7",
              marginBottom: 16,
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">NILAI PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1 className="isi-card-sla">RP.200.000</h1>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <TableWilayah />
    </div>
)}
