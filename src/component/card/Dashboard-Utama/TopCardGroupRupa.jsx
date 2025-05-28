import { Row, Col, Card } from "antd";
import "../../../assets/css/topcardrupa.css";
import CountUp from "react-countup";

export default function TopCardGroupRupa() {
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

  return (
    <Row gutter={10} style={{ marginBottom: "2vh" }}>
      {[
        { title: "RUPA SETAHUN", value: 200000, paket: 30 },
        { title: "PAKET SELESAI (SD)", value: 200000, paket: 200 },
        { title: "% CAPAIAN (REAL VS RUPA)", value: 30, persen: 20 },
      ].map((item, index) => (
        <Col span={7} key={index}>
          <Card
            className="top-card"
            style={{
              height: "auto",
              overflow: "hidden",
            }}
          >
            <div className="container">
              <h1 className="title-topcard">{item.title}</h1>

              <div className="rupa-item-wrapper">
                <div className="rupa-box">
                  {item.title === "% CAPAIAN (REAL VS RUPA)" ? (
                    <>
                      NOMINAL <br />
                      <CountUp end={item.value || 0} duration={2} />%
                    </>
                  ) : (
                    (() => {
                      const { val, unit } = formatNominal(item.value || 0);
                      return (
                        <>
                        NOMINAL <br />
                          Rp <CountUp end={val} decimals={1} duration={2} />{" "}
                          {unit}
                        </>
                      );
                    })()
                  )}
                </div>

                <div className="rupa-box">
                  {item.title === "% CAPAIAN (REAL VS RUPA)" ? (
                    <>
                    PAKET <br />
                      <CountUp end={item.value || 0} duration={2} />%
                    </>
                  ) : (
                    <>
                    PAKET <br />
                      <CountUp end={item.paket || 0} duration={2} /> Paket
                    </>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
