import React, { useState } from 'react';
import { Card, Col, Row } from 'antd';
import '../../../assets/css/card.css';
import '../../../assets/css/chart.css';
import '../../../assets/css/cardSla.css';
import {
  TableNamaVendor,
  TableBidang,
  TableWilayah,
} from '../../../component/table/Table';
import CountUp from 'react-countup';

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

export function NamaVendor({ data }) {
  if (!data || !data.DATA_CARD) {
    return <div>Loading...</div>; // atau spinner/loading skeleton
  }

  const { val, unit } = formatNominal(data.DATA_CARD?.NILAI_PAKET ?? 0);

  return (
    <div>
      <Row
        gutter={10}
        style={{ marginBottom: '2vh' }}>
        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: '#e0f2fe',
              marginBottom: 16,
              overflow: 'hidden',
            }}>
            <div className="container">
              <div className="container-top-card">
                <p className="title">NAMA VENDOR</p>
              </div>
              <div className="persentase-sla">
                <h1 className="isi-card-sla">
                  {data.DATA_CARD?.NAMA ?? 'Tidak Ada'}
                </h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: '#fef08a',
              marginBottom: 16,
              overflow: 'hidden',
            }}>
            <div className="container">
              <div className="container-top-card">
                <p className="title">JUMLAH PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1 className="isi-card-sla">
                  <CountUp
                    end={data.DATA_CARD?.JUMLAH_PAKET ?? 0}
                    decimals={0}
                    duration={2}
                  />{' '}
                  PAKET
                </h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: '#dcfce7',
              marginBottom: 16,
              overflow: 'hidden',
            }}>
            <div className="container">
              <div className="container-top-card">
                <p className="title">NILAI PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1 className="isi-card-sla">
                  Rp{' '}
                  <CountUp
                    end={val}
                    decimals={3}
                    duration={2}
                  />{' '}
                  {unit}
                </h1>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <TableNamaVendor data={data} />
    </div>
  );
}

export function Bidang({ data }) {
  if (!data || !data.DATA_CARD) {
    return <div>Loading...</div>; // atau spinner/loading skeleton
  }

  const { val, unit } = formatNominal(data.DATA_CARD?.NILAI_PAKET ?? 0);
  return (
    <div>
      <Row
        gutter={10}
        style={{ marginBottom: '2vh' }}>
        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: '#e0f2fe',
              marginBottom: 16,
              overflow: 'hidden',
            }}>
            <div className="container">
              <div className="container-top-card">
                <p className="title">BIDANG</p>
              </div>
              <div className="persentase-sla">
                <h1 className="isi-card-sla">
                  {data.DATA_CARD?.BIDANG ?? 'Tidak Ada'}
                </h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: '#fef08a',
              marginBottom: 16,
              overflow: 'hidden',
            }}>
            <div className="container">
              <div className="container-top-card">
                <p className="title">JUMLAH PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1 className="isi-card-sla">
                  <CountUp
                    end={data.DATA_CARD?.JUMLAH_PAKET ?? 0}
                    decimals={0}
                    duration={2}
                  />{' '}
                  PAKET
                </h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: '#dcfce7',
              marginBottom: 16,
              overflow: 'hidden',
            }}>
            <div className="container">
              <div className="container-top-card">
                <p className="title">NILAI PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1 className="isi-card-sla">
                  RP{' '}
                  <CountUp
                    end={val}
                    decimals={3}
                    duration={2}
                  />{' '}
                  {unit}
                </h1>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <TableBidang data={data} />
    </div>
  );
}

export function Wilayah({ data }) {
  if (!data || !data.DATA_CARD) {
    return <div>Loading...</div>; // atau spinner/loading skeleton
  }

  const { val, unit } = formatNominal(data.DATA_CARD?.NILAI_PAKET ?? 0);
  return (
    <div>
      <Row
        gutter={10}
        style={{ marginBottom: '2vh' }}>
        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: '#e0f2fe',
              marginBottom: 16,
              overflow: 'hidden',
            }}>
            <div className="container">
              <div className="container-top-card">
                <p className="title">WILAYAH</p>
              </div>
              <div className="persentase-sla">
                <h1 className="isi-card-sla">
                  {data.DATA_CARD?.WILAYAH ?? 'Tidak Ada'}
                </h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: '#fef08a',
              marginBottom: 16,
              overflow: 'hidden',
            }}>
            <div className="container">
              <div className="container-top-card">
                <p className="title">JUMLAH PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1 className="isi-card-sla">
                  <CountUp
                    end={data.DATA_CARD?.JUMLAH_PAKET ?? 0}
                    decimals={0}
                    duration={2}
                  />{' '}
                  PAKET
                </h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={7}>
          <Card
            className="card-hover"
            style={{
              backgroundColor: '#dcfce7',
              marginBottom: 16,
              overflow: 'hidden',
            }}>
            <div className="container">
              <div className="container-top-card">
                <p className="title">NILAI PAKET</p>
              </div>
              <div className="persentase-sla">
                <h1 className="isi-card-sla">
                  RP{' '}
                  <CountUp
                    end={val}
                    decimals={3}
                    duration={2}
                  />{' '}
                  {unit}
                </h1>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <TableWilayah data={data} />
    </div>
  );
}
