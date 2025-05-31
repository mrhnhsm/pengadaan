// components/TopCardGroup.jsx
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../context/AppContext';
import { Row, Col, Card } from 'antd';
import { LineChartOutlined } from '@ant-design/icons';
import CountUp from 'react-countup';
import config from '../../../API/config';
import axios from 'axios';

export default function TopCardGroup() {
  const { tanggal_start, tanggal_end } = useContext(AppContext);
  const [terhadapRkap, setTerhadapRkap] = useState(null);
  const [terhadapHps, setTerhadapHps] = useState(null);
  const [procurement, setProcurement] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const getData = async () => {
      try {
        const response = await axios.get(
          `${config.BASE_URL}/dashboard/top_group_card`,
          {
            params: {
              tanggal_start: tanggal_start,
              tanggal_end: tanggal_end,
            },
          }
        );
        if (isMounted) {
          const data = response.data.data;
          setTerhadapRkap(data.TERHADAP_RKAP);
          setTerhadapHps(data.TERHADAP_HPS);
          setProcurement(data.PROCUREMENT_EXCELLENCE);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error Message:', error);
        }
      }
    };
    getData();
    return () => {
      isMounted = false; // Flag bahwa komponen telah di-unmount
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

  return (
    <Row
      gutter={10}
      style={{ marginBottom: '2vh' }}>
      {[
        {
          title: 'TERHADAP RKAP',
          value: terhadapRkap?.PERSEN ?? 0,
          nominal: terhadapRkap?.HITUNGAN ?? 0,
        },
        {
          title: 'TERHADAP HPS',
          value: terhadapHps?.PERSEN ?? 0,
          nominal: terhadapHps?.HITUNGAN ?? 0,
        },
        {
          title: 'PROCUREMANT EXCELLENCE',
          value: procurement?.PERSEN ?? 0,
          nominal: procurement?.HITUNGAN ?? 0,
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
                      REAL <br />
                      <CountUp
                        end={item.value || 0}
                        duration={2}
                      />
                      %
                    </>
                  ) : (
                    (() => {
                      const { val, unit } = formatNominal(item.nominal || 0);
                      return (
                        <>
                          <b>NOMINAL</b> <br />
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
                  <>
                    <b>PERSENTASE</b> <br />
                    <CountUp
                      end={item.value ?? 0}
                      duration={2}
                      decimals={2}
                      suffix=" %"
                    />
                  </>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
