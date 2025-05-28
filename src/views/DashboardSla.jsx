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
import {
  DropdownKategori,
  DropdownSla,
} from "../component/dropdown/DropdownComponent";

export default function DashboardSla() {
  const [selectedOption, setSelectedOption] = useState("vendor");
  const [selectedKategori, setSelectedKategori] = useState("semua");

  const dataKategori = {
    vendor: ["Vendor A", "Vendor B", "Vendor C"],
    wilayah: ["Jakarta", "Sumatera", "Kalimantan"],
    bidang: ["IT", "Konstruksi", "Transportasi"],
  };
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
      <h1 style={{ color: "black" }}>
        RATA-RATA PENYELESAIAN PAKET SESUAI SLA
      </h1>
      <DropdownSla onChange={setSelectedOption} />
      <DropdownKategori
        options={dataKategori[selectedOption]}
        type={selectedOption}
        onChange={setSelectedKategori}
      />
      {renderContent()}
    </div>
  );
}
