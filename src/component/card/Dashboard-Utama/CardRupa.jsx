import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import { Row, Col, Card, Button, Modal } from 'antd';
import NilaiPaketKso from '../../chart/chartRupa/NilaiPaketKso';
import NilaiPaketRegII from '../../chart/chartRupa/NilaiPaketRegII';
import PaketKso from '../../chart/chartRupa/PaketKso';
import PaketRegII from '../../chart/chartRupa/PaketRegII';
import '../../../assets/css/cardRupa.css';
import {
  CheckCircleOutlined,
  TeamOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import CountUp from 'react-countup';
import axios from 'axios';
import config from '../../../API/config';

export default function CardIsi() {
  const { tanggal_start, tanggal_end } = useContext(AppContext);
  const [dataReg2, setDataReg2] = useState(null);
  const [dataKSO, setDataKSO] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  //Get Data Regional 2
  useEffect(() => {
    let isMounted = true;
    const getDataReg2 = async () => {
      try {
        const response = await axios.get(
          `${config.BASE_URL}/dashboard/get_reg2`,
          {
            params: {
              tanggal_start: tanggal_start,
              tanggal_end: tanggal_end,
            },
          }
        );
        if (isMounted) {
          const data = response.data.data;
          setDataReg2(data);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error Message Get Reg 2: ', error);
        }
      }
    };
    getDataReg2();
    return () => {
      isMounted = false;
    };
  }, [tanggal_start, tanggal_end]);

  //GET Data KSO
  useEffect(() => {
    let mount = true;
    const getDataKso = async () => {
      try {
        const response = await axios.get(
          `${config.BASE_URL}/dashboard/get_kso`,
          {
            params: {
              tanggal_start: tanggal_start,
              tanggal_end: tanggal_end,
            },
          }
        );
        if (mount) {
          const data = response.data.data;
          setDataKSO(data);
        }
      } catch (error) {
        if (mount) {
          console.error('Error Message get KSO: ', error);
        }
      }
    };
    getDataKso();
    return () => {
      mount = false;
    };
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
          <PaketRegII
            detailMode={true}
            data={dataReg2}
          />
        );
      case 2:
        return (
          <NilaiPaketRegII
            detailMode={true}
            data={dataReg2}
          />
        );
      case 3:
        return (
          <PaketKso
            detailMode={true}
            data={dataKSO}
          />
        );
      case 4:
        return (
          <NilaiPaketKso
            detailMode={true}
            data={dataKSO}
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
          title: 'REGIONAL 2',
          // card 1
          titleCard1: 'RUPA REGIONAL 2 (SETAHUN)',
          persentase1: dataReg2?.PERSEN_PAKET_RUPA_REAL ?? 0,
          paket1: dataReg2?.TOTAL_PAKET_RUPA ?? 0,
          nominal1: dataReg2?.TOTAL_NILAI_RUPA ?? 0,
          icon1: TeamOutlined,

          //   card 2
          titleCard2: 'CHART PAKET REGIONAL 2',
          modal2: 1,
          ChartCard2: PaketRegII,
          chartData2: dataReg2,

          //   card 3
          titleCard3: 'PAKET SELESAI (SD) REGIONAL 2',
          persentase3: dataReg2?.PERSEN_PAKET_REAL_RUPA ?? 0,
          paket3: dataReg2?.TOTAL_PAKET_REALISASI ?? 0,
          nominal3: dataReg2?.TOTAL_NILAI_REALISASI ?? 0,
          icon3: CheckCircleOutlined,

          //   card 4
          titleCard4: 'NILAI PAKET REGIONAL 2',
          modal4: 2,
          ChartCard4: NilaiPaketRegII,
          chartData4: dataReg2,
        },
        {
          title: 'KSO (EKS. N2)',
          // card 1
          titleCard1: 'RUPA KSO (EKS. N2) (SETAHUN)',
          persentase1: dataKSO?.PERSEN_PAKET_RUPA_REAL ?? 0,
          paket1: dataKSO?.TOTAL_PAKET_RUPA ?? 0,
          nominal1: dataKSO?.TOTAL_NILAI_RUPA ?? 0,
          icon1: BarChartOutlined,

          //   card 2
          titleCard2: 'CHART PAKET KSO',
          ChartCard2: PaketKso,
          chartData2: dataKSO,
          modal2: 3,

          //   card 3
          titleCard3: 'PAKET SELESAI (SD) KSO',
          persentase3: dataKSO?.PERSEN_PAKET_REAL_RUPA ?? 0,
          paket3: dataKSO?.TOTAL_PAKET_REALISASI ?? 0,
          nominal3: dataKSO?.TOTAL_NILAI_REALISASI ?? 0,
          icon3: CheckCircleOutlined,

          //   card 4
          titleCard4: 'CHART NILAI PAKET KSO',
          ChartCard4: NilaiPaketKso,
          chartData4: dataKSO,
          modal4: 4,
        },
      ].map((item, index) => (
        <div key={index}>
          <h1 style={{ color: 'black' }}>{item.title}</h1>
          <Row
            gutter={10}
            style={{ marginBottom: '0vh' }}>
            <Col span={5}>
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
                        <br />
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
            </Col>

            <Col span={5}>
              <Card
                className="card-hover"
                style={{
                  backgroundColor: '#fef08a',
                  // marginBottom: 16,
                  overflow: 'hidden',
                }}>
                <div className="container">
                  <p className="title-rupa">
                    {item.titleCard2} <br />
                    (REAL VS RUPA)
                  </p>
                  {React.createElement(item.ChartCard2, {
                    detailMode: false,
                    data: item.chartData2,
                  })}
                  <Button
                    className="detail-btn"
                    type="primary"
                    onClick={() => showModal(item.modal2)}>
                    Lihat Detail
                  </Button>
                </div>
              </Card>
            </Col>
            <Col span={5}>
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
                        <br />
                        Paket
                      </p>
                    </div>
                    <div className="middle-item">
                      <p className="persentase-rupa">
                        <CountUp
                          end={item.persentase3}
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
            </Col>
            <Col span={5}>
              <Card
                className="card-hover"
                style={{
                  backgroundColor: '#fef08a',
                  // marginBottom: 16,
                  overflow: 'hidden',
                }}>
                <div className="container">
                  <p className="title-rupa">
                    {item.titleCard4} <br />
                    (REAL VS RUPA)
                  </p>
                  {React.createElement(item.ChartCard4, {
                    detailMode: false,
                    data: item.chartData4,
                  })}
                  <Button
                    className="detail-btn"
                    type="primary"
                    onClick={() => showModal(item.modal4)}>
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
          body: { backgroundColor: '#F5F5F5', height: '80vh' },
        }}>
        {renderModalContent()}
      </Modal>
    </div>
  );
}
