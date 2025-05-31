import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../context/AppContext';
import { Row, Col, Card } from 'antd';
import '../../../assets/css/topcardrupa.css';
import CountUp from 'react-countup';
import config from '../../../API/config';
import axios from 'axios';

export default function TopCardGroupRupa() {
  const { tanggal_start, tanggal_end } = useContext(AppContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${config.BASE_URL}/dashboard/card_sla`,
          {
            params: {
              tanggal_start: tanggal_start,
              tanggal_end: tanggal_end,
            },
          }
        );
        const data = response.data.data;
        setData(data);
      } catch (error) {
        console.error('Error Message:', error);
      }
    };
    getData();
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

  return (
    <Row
      gutter={10}
      style={{ marginBottom: '2vh' }}>
      {[
        {
          title: 'RUPA SETAHUN',
          value: data?.TOTAL_NILAI_RUPA ?? 0,
          paket: data?.TOTAL_PAKET_RUPA ?? 0,
        },
        {
          title: 'PAKET SELESAI (SD)',
          value: data?.TOTAL_NILAI_REALISASI ?? 0,
          paket: data?.TOTAL_PAKET_REALISASI ?? 0,
        },
        {
          title: '% CAPAIAN (REAL VS RUPA)',
          value: data?.PERSEN_CAPAIAN_NILAI ?? 0,
          persen: data?.PERSEN_CAPAIAN_PAKET ?? 0,
        },
      ].map((item, index) => (
        <Col
          span={7}
          key={index}>
          <Card
            className="top-card"
            style={{
              height: 'auto',
              overflow: 'hidden',
            }}>
            <div className="container">
              <h1 className="title-topcard">{item.title}</h1>

              <div className="rupa-item-wrapper">
                <div className="rupa-box">
                  {item.title === '% CAPAIAN (REAL VS RUPA)' ? (
                    <>
                      NOMINAL <br />
                      <CountUp
                        end={item.value || 0}
                        duration={2}
                        decimals={2}
                        suffix=" %"
                      />
                    </>
                  ) : (
                    (() => {
                      const { val, unit } = formatNominal(item.value || 0);
                      return (
                        <>
                          NOMINAL <br />
                          Rp{' '}
                          <CountUp
                            end={val}
                            decimals={3}
                            duration={2}
                          />{' '}
                          {unit}
                        </>
                      );
                    })()
                  )}
                </div>

                <div className="rupa-box">
                  {item.title === '% CAPAIAN (REAL VS RUPA)' ? (
                    <>
                      PAKET <br />
                      <CountUp
                        end={item.persen || 0}
                        duration={2}
                        decimals={2}
                        suffix=" %"
                      />
                    </>
                  ) : (
                    <>
                      PAKET <br />
                      <CountUp
                        end={item.paket || 0}
                        duration={2}
                      />{' '}
                      Paket
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
