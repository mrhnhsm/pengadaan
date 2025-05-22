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
              backgroundColor: "#2c3e50",
              marginBottom: 16,
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">NAMA VENDOR</p>
              </div>
              <div className="persentase-sla">
                <h1 style={{color:"white"}}>PT. Sejahtera Abadi</h1>
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
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">JUMLAH PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1 style={{color:"white"}}>20 PAKET</h1>
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
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">NILAI PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1 style={{color:"white"}}>RP.200.000</h1>
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
              backgroundColor: "#2c3e50",
              marginBottom: 16,
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">BIDANG</p>
              </div>
              <div className="persentase-sla">
                <h1 style={{color:"white"}}>Transportasi</h1>
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
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">JUMLAH PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1 style={{color:"white"}}>20 PAKET</h1>
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
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">NILAI PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1 style={{color:"white"}}>RP.200.000</h1>
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
              backgroundColor: "#2c3e50",
              marginBottom: 16,
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">WILAYAH</p>
              </div>
              <div className="persentase-sla">
                <h1 style={{color:"white"}}>Adolina</h1>
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
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">JUMLAH PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1 style={{color:"white"}}>20 PAKET</h1>
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
              overflow: "hidden",
            }}
          >
            <div className="container">
              <div className="container-top-card">
                <p className="title">NILAI PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1 style={{color:"white"}}>RP.200.000</h1>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <TableWilayah />
    </div>
)}
