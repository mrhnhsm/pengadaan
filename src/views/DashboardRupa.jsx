import React, { useState } from 'react';
import { Card, Col, Row, Modal, Button } from 'antd';
import '../assets/css/card.css';
import '../assets/css/chart.css';
import { LineChartOutlined, ToolOutlined } from '@ant-design/icons';
// import InvestasiEksploitasi from "../component/chart/InvestasiEksploitasi";
// import InvestasiRealRupa from '../component/chart/InvestasiRealRupa';
// import EksploitasiRealRupa from '../component/chart/EksploitasiRealRupa';
import TopCardGroupRupa from '../component/card/Dashboard-Utama/TopCardGroupRupa';
import CardRupa from '../component/card/Dashboard-Utama/CardRupa';

export default function DashboardRupa() {

  return (
    <div>
      <div>
        <h1>RATA-RATA PENYELESAIAN PAKET SESUAI SLA</h1>
      </div>
      <TopCardGroupRupa/>
      <CardRupa/>
    </div>
  );
}
