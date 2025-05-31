import React, { useState, useEffect, useContext } from 'react';
import { Row, Col, Card, Button, Modal } from 'antd';
import CountUp from 'react-countup';
import {
  LineChartOutlined,
  ToolOutlined,
  AuditOutlined,
  SelectOutlined,
} from '@ant-design/icons';
import axios from 'axios';
import { AppContext } from '../../../context/AppContext';
import InvestasiEksploitasi from '../../chart/InvestasiEksploitasi';
import InvestasiRealRupa from '../../chart/InvestasiRealRupa';
import EksploitasiRealRupa from '../../chart/EksploitasiRealRupa';
import TenderTerbatas from '../../chart/TenderTerbatas';
import PenunjukkanLangsung from '../../chart/PenunjukkanLangsung';
import TenderPenunjukkanLangsung from '../../chart/TenderPenunjukkanLangsung';
import '../../../assets/css/table.css';
import '../../../assets/css/chart.css';
import '../../../assets/css/card.css';
import config from '../../../API/config';

export default function CardIsi() {
  const { tanggal_start, tanggal_end } = useContext(AppContext);
  const [investasi, setInvestasi] = useState(null);
  const [eksploitasi, setEksploitasi] = useState(null);
  const [chartInvesEks, setChartInvesEks] = useState(null);
  const [chartInvesRealRupa, setChartInvesRealRupa] = useState(null);
  const [chartEksRealRupa, setChartEksRealRupa] = useState(null);
  const [tender, setTender] = useState(null);
  const [penunjukanLangsung, setPenunjukanLangsung] = useState(null);
  const [chartTenderPL, setChartTenderPL] = useState(null);
  const [chartTenderRealRupa, setChartTenderRealRupa] = useState(null);
  const [chartPLRealRupa, setChartPLRealRupa] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  //Get Data Investasi Eksploitasi
  useEffect(() => {
    const getDataInvetasi = async () => {
      try {
        const response = await axios.get(
          `${config.BASE_URL}/dashboard/investasi_eksploitasi`,
          {
            params: {
              tanggal_start: tanggal_start,
              tanggal_end: tanggal_end,
            },
          }
        );
        const data = response.data.data;
        setInvestasi(data.INVESTASI);
        setEksploitasi(data.EKSPLOITASI);
        setChartInvesEks(data.CHART_INVESTASI_EKSPLOITASI);
        setChartInvesRealRupa(data.CHART_INVESTASI_REAL_RUPA);
        setChartEksRealRupa(data.CHART_EKSPLOITASI_REAL_RUPA);
      } catch (error) {
        console.error('Error Message Get Invetasi: ', error);
      }
    };
    getDataInvetasi();
  }, [tanggal_start, tanggal_end]);

  //Get Data Tender Penunjukan Langsung
  useEffect(() => {
    const getDataTender = async () => {
      try {
        const response = await axios.get(
          `${config.BASE_URL}/dashboard/vendor_penunjukanlangsung`,
          {
            params: {
              tanggal_start: tanggal_start,
              tanggal_end: tanggal_end,
            },
          }
        );
        const data = response.data.data;
        setTender(data.TENDER);
        setPenunjukanLangsung(data.PENUNJUKAN_LANGSUNG);
        setChartTenderPL(data.CHART_TENDER_PENUNJUKAN_LANGSUNG);
        setChartTenderRealRupa(data.CHART_TENDER_REAL_RUPA);
        setChartPLRealRupa(data.CHART_PENUNJUKAN_LANGSUNG_REAL_RUPA);
      } catch (error) {
        console.error('Error Message Get Tender: ', error);
      }
    };
    getDataTender();
  }, [tanggal_start, tanggal_end]);

  const formatNominal = (value) => {
    if (value >= 1_000_000_000_000) {
      return { val: value / 1_000_000_000_000, unit: 'Triliun' };
    } else if (value >= 1_000_000_000) {
      return { val: value / 1_000_000_000, unit: 'Miliar' };
    } else if (value >= 1_000_000) {
      return { val: value / 1_000_000, unit: 'Juta' };
    } else if (value >= 1_000) {
      return { val: value / 1_000, unit: 'Ribu' };
    } else {
      return { val: value, unit: '' };
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
    switch (modalContent) {
      case 1:
        return (
          <InvestasiRealRupa
            detailMode={true}
            data={chartInvesRealRupa}
          />
        );
      case 2:
        return (
          <EksploitasiRealRupa
            detailMode={true}
            data={chartEksRealRupa}
          />
        );
      case 3:
        return (
          <InvestasiEksploitasi
            detailMode={true}
            data={chartInvesEks}
          />
        );
      case 4:
        return (
          <TenderTerbatas
            detailMode={true}
            data={chartTenderRealRupa}
          />
        );
      case 5:
        return (
          <PenunjukkanLangsung
            detailMode={true}
            data={chartPLRealRupa}
          />
        );
      case 6:
        return (
          <TenderPenunjukkanLangsung
            detailMode={true}
            data={chartTenderPL}
          />
        );
      default:
        return <p style={{ color: 'white' }}>Tidak ada konten.</p>;
    }
  };

  return (
    <div>
      {[
        {
          // card 1
          titleCard1: 'INVESTASI',
          persentase1: investasi?.PERSEN ?? 0,
          paket1: investasi?.TOTAL_PAKET ?? 0,
          nominal1: investasi?.TOTAL_NILAI ?? 0,
          icon1: LineChartOutlined,

          //   card 2
          titleCard2: 'CHART INVESTASI',
          ChartCard2: InvestasiRealRupa,
          chartData2: chartInvesRealRupa, // Data untuk InvestasiRealRupa
          modal2: 1,

          //   card 3
          titleCard3: 'EKSPLOITASI',
          persentase3: eksploitasi?.PERSEN ?? 0,
          paket3: eksploitasi?.TOTAL_PAKET ?? 0,
          nominal3: eksploitasi?.TOTAL_NILAI ?? 0,
          icon3: ToolOutlined,

          //   card 4
          titleCard4: 'CHART EKSPLOITASI',
          ChartCard4: EksploitasiRealRupa,
          chartData4: chartEksRealRupa, // Data untuk EksploitasiRealRupa
          modal4: 2,

          //   card 5
          titleCard5: 'INVESTASI VS EKSPLOITASI',
          ChartCard5: InvestasiEksploitasi,
          chartData5: chartInvesEks, // Data untuk InvestasiEksploitasi
          modal5: 3,
        },
        {
          // card 1
          titleCard1: 'TENDER TERBATAS',
          persentase1: tender?.PERSEN ?? 0, // Gunakan data tender yang sebenarnya
          paket1: tender?.TOTAL_PAKET ?? 0,
          nominal1: tender?.TOTAL_NILAI ?? 0,
          icon1: AuditOutlined,

          //   card 2
          titleCard2: 'CHART TENDER TERBATAS',
          ChartCard2: TenderTerbatas,
          chartData2: chartTenderRealRupa, // Data untuk TenderTerbatas
          modal2: 4,

          //   card 3
          titleCard3: 'PENUNJUKKAN LANGSUNG',
          persentase3: penunjukanLangsung?.PERSEN ?? 0, // Gunakan data penunjukan langsung yang sebenarnya
          paket3: penunjukanLangsung?.TOTAL_PAKET ?? 0,
          nominal3: penunjukanLangsung?.TOTAL_NILAI ?? 0,
          icon3: SelectOutlined,

          //   card 4
          titleCard4: 'CHART PENUNJUKKAN LANGSUNG',
          ChartCard4: PenunjukkanLangsung,
          chartData4: chartPLRealRupa, // Data untuk PenunjukkanLangsung
          modal4: 5,

          //   card 5
          titleCard5: 'TENDER VS PENUNJUKKAN LANGSUNG',
          ChartCard5: TenderPenunjukkanLangsung,
          chartData5: chartTenderPL, // Data untuk TenderPenunjukkanLangsung
          modal5: 6,
        },
      ].map((item, index) => (
        <Row
          gutter={10}
          style={{ marginBottom: '2vh' }}
          key={index}>
          <Col span={6}>
            <Card
              className="card-hover"
              style={{
                backgroundColor: '#e0f2fe',
                overflow: 'hidden',
                borderRadius: '12px',
              }}>
              <div className="container">
                <h4 className="title-rupa">{item.titleCard1}</h4>

                <div className="middle-row-rupa">
                  <div className="middle-item border-right">
                    <p className="paket-rupa">
                      <CountUp
                        end={item.paket1}
                        duration={2}
                      />{' '}
                      Paket
                    </p>
                  </div>
                  <div className="middle-item">
                    <p className="persentase-rupa">
                      <CountUp
                        end={item.persentase1}
                        duration={2}
                        decimals={2}
                        suffix=" %"
                      />
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
                          Rp{' '}
                          <CountUp
                            end={val}
                            decimals={3}
                            duration={2}
                          />{' '}
                          {unit}
                        </>
                      );
                    })()}
                  </p>
                </div>
              </div>
            </Card>

            <Card
              className="card-hover"
              style={{
                backgroundColor: '#fef08a',
                overflow: 'hidden',
              }}>
              <div className="container">
                <div className="container-top-card">
                  <p className="title">
                    {item.titleCard2} <br />
                    (REAL VS RUPA)
                  </p>
                  <Button
                    className="detail-btn"
                    type="primary"
                    onClick={() => showModal(item.modal2)}>
                    Lihat Detail
                  </Button>
                </div>
                {React.createElement(item.ChartCard2, {
                  detailMode: false,
                  data: item.chartData2, // Pass data yang sesuai
                })}
              </div>
            </Card>
          </Col>
          <Col span={9}>
            <Card
              className="card-hover"
              style={{
                backgroundColor: '#dcfce7',
                height: '98.8%',
                overflow: 'hidden',
              }}>
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
                    onClick={() => showModal(item.modal5)}>
                    Lihat Detail
                  </Button>
                </div>
                <div className="chart-table">
                  <div className="chart-container">
                    {React.createElement(item.ChartCard5, {
                      detailMode: false,
                      data: item.chartData5, // Pass data yang sesuai
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
                backgroundColor: '#e0f2fe',
                overflow: 'hidden',
                borderRadius: '12px',
              }}>
              <div className="container">
                <h4 className="title-rupa">{item.titleCard3}</h4>

                <div className="middle-row-rupa">
                  <div className="middle-item border-right">
                    <p className="paket-rupa">
                      <CountUp
                        end={item.paket3}
                        duration={2}
                      />{' '}
                      Paket
                    </p>
                  </div>
                  <div className="middle-item">
                    <p className="persentase-rupa">
                      <CountUp
                        end={item.persentase3}
                        duration={2}
                        suffix=" %"
                        decimals={2}
                      />
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
                          Rp{' '}
                          <CountUp
                            end={val}
                            decimals={3}
                            duration={2}
                          />{' '}
                          {unit}
                        </>
                      );
                    })()}
                  </p>
                </div>
              </div>
            </Card>

            <Card
              className="card-hover"
              style={{
                backgroundColor: '#f5f0ff',
                overflow: 'hidden',
              }}>
              <div className="container">
                <div className="container-top-card">
                  <p className="title">
                    {item.titleCard4} <br />
                    (REAL VS RUPA)
                  </p>
                  <Button
                    className="detail-btn"
                    type="primary"
                    onClick={() => showModal(item.modal4)}>
                    Lihat Detail
                  </Button>
                </div>
                {React.createElement(item.ChartCard4, {
                  detailMode: false,
                  data: item.chartData4, // Pass data yang sesuai
                })}
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
          body: { backgroundColor: '#F5F5F5', height: '80vh' },
        }}>
        {renderModalContent()}
      </Modal>
    </div>
  );
}
