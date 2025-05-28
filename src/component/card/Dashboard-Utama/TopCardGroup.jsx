// components/TopCardGroup.jsx
import React from 'react';
import { Row, Col, Card } from 'antd';
import { LineChartOutlined } from '@ant-design/icons';
import CountUp from 'react-countup';
import config from '../../../API/config';

export default function TopCardGroup() {
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
        { title: 'TERHADAP RKAP', value: 30, nominal: 200000000.23 },
        { title: 'TERHADAP HPS', value: 30, nominal: 200000000.32 },
        { title: 'PROCUREMANT EXCELLENCE', value: 30, nominal: 200000000 },
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
                          NOMINAL <br />
                          Rp{' '}
                          <CountUp
                            end={val}
                            decimals={1}
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
                    PERSENTASE <br />
                    <CountUp
                      end={item.value || 0}
                      duration={2}
                    />{' '}
                    %
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
