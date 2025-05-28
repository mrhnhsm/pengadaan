import { Card, Col, Row } from "antd";
import "../../../assets/css/card.css";
import "../../../assets/css/chart.css";
import "../../../assets/css/cardSla.css";
import {
  TableNamaVendor,
  TableBidang,
  TableWilayah,
} from "../../../component/table/Table";
import CountUp from "react-countup";

const dummyNamaVendor = {
  nama: "PT. Sejahtera Abadi",
  jumlahPaket: 20,
  nilaiPaket: 125000000, // 125 juta
};

const dummyBidang = {
  bidang: "Transportasi",
  jumlahPaket: 15,
  nilaiPaket: 3400000000, // 3.4 miliar
};

const dummyWilayah = {
  wilayah: "Adolina",
  jumlahPaket: 10,
  nilaiPaket: 850000000, // 850 juta
};

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

export function NamaVendor() {
  const { val, unit } = formatNominal(dummyNamaVendor.nilaiPaket);
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
                <h1 className="isi-card-sla">{dummyNamaVendor.nama}</h1>
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
                <h1 className="isi-card-sla">
                  <CountUp end={dummyNamaVendor.jumlahPaket} decimals={0} duration={2}/> PAKET
                </h1>
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
                <h1 className="isi-card-sla">
                  {" "}
                  Rp <CountUp end={val} decimals={1} duration={2} /> {unit}
                </h1>
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
  const { val, unit } = formatNominal(dummyBidang.nilaiPaket);
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
                <h1 className="isi-card-sla">{dummyBidang.bidang}</h1>
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
                <h1 className="isi-card-sla"><CountUp end={dummyBidang.jumlahPaket} decimals={0} duration={2}/> PAKET</h1>
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
                <h1 className="isi-card-sla">RP <CountUp end={val} decimals={1} duration={2} /> {unit}</h1>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <TableBidang />
    </div>
  );
}

export function Wilayah() {
  const { val, unit } = formatNominal(dummyWilayah.nilaiPaket);
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
                <p className="title">WILAYAH</p>
              </div>
              <div className="persentase-sla">
                <h1 className="isi-card-sla">{dummyWilayah.wilayah}</h1>
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
                <h1 className="isi-card-sla"><CountUp end={dummyWilayah.jumlahPaket} decimals={0} duration={2}/> PAKET</h1>
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
                <h1 className="isi-card-sla">RP <CountUp end={val} decimals={1} duration={2} /> {unit}</h1>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <TableWilayah />
    </div>
  );
}
