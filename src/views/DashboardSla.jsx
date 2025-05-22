import React, { useState } from "react";
import { Card, Col, Row } from "antd";
import "../assets/css/card.css";
import "../assets/css/chart.css";
import "../assets/css/cardSla.css";
import {
  NamaVendor,
  Wilayah,
  Bidang,
} from "../component/card/Dashboard-Utama/CardSla";
import { DropdownSla } from "../component/dropdown/DropdownComponent";

export default function DashboardSla() {
  const [selectedOption, setSelectedOption] = useState("vendor");

  const renderContent = () => {
    switch (selectedOption) {
      case "vendor":
        return <NamaVendor />;
      case "wilayah":
        return <Wilayah />;
      case "bidang":
        return <Bidang />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 style={{color:"white"}}>RATA-RATA PENYELESAIAN PAKET SESUAI SLA</h1>
      <DropdownSla onChange={setSelectedOption} />
      {renderContent()}
    </div>
  );
}
