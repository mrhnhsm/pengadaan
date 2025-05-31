import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { Card, Col, Row } from 'antd';
import '../assets/css/card.css';
import '../assets/css/chart.css';
import '../assets/css/cardSla.css';
import {
  NamaVendor,
  Wilayah,
  Bidang,
} from '../component/card/Dashboard-Utama/CardSla';
import {
  DropdownKategori,
  DropdownSla,
} from '../component/dropdown/DropdownComponent';
import axios from 'axios';
import config from '../API/config';

export default function DashboardSla() {
  const { tanggal_start, tanggal_end } = useContext(AppContext);
  const [tokenUser, setTokeUser] = useState(() =>
    localStorage.getItem('tokenUser')
  );
  const [selectedOption, setSelectedOption] = useState('vendor');
  const [selectedKategori, setSelectedKategori] = useState('');
  const [dataKategori, setDataKategori] = useState(null);
  const [dataSLA, setDataSLA] = useState(null);

  //Get Data List Kategori
  useEffect(() => {
    let mounted = true;
    const getData = async () => {
      try {
        const response = await axios.get(
          `${config.BASE_URL}/dashboard/list_wilayah_vendor_bidang`
        );
        if (mounted) {
          const data = response.data.data;
          setDataKategori(data);
        }
      } catch (error) {
        if (mounted) {
          console.error('Error Get Data List: ', error);
        }
      }
    };
    getData();
    return () => {
      mounted = false;
    };
  }, [tokenUser]);

  //Get Data For Dashboard SLA
  useEffect(() => {
    let mounting = true;
    const getDataSLA = async () => {
      try {
        // Bangun params secara dinamis
        const params = {
          tanggal_start: tanggal_start,
          tanggal_end: tanggal_end,
          ...(selectedOption === 'vendor' && {
            vendor_pemenang: selectedKategori,
          }),
          ...(selectedOption === 'wilayah' && { wilayah: selectedKategori }),
          ...(selectedOption === 'bidang' && { bidang: selectedKategori }),
        };
        const response = await axios.get(
          `${config.BASE_URL}/dashboard/pengadaan_data`,
          { params }
        );

        if (mounting) {
          const data = response.data.data;
          setDataSLA(data);
        }
      } catch (error) {
        if (mounting) {
          console.error('Error Fetchin Data SLA : ', error);
        }
      }
    };
    getDataSLA();
    return () => {
      mounting = false;
    };
  }, [tokenUser, tanggal_start, tanggal_end, selectedKategori, selectedOption]);

  const renderContent = () => {
    switch (selectedOption) {
      case 'vendor':
        return <NamaVendor data={dataSLA} />;
      case 'wilayah':
        return <Wilayah data={dataSLA} />;
      case 'bidang':
        return <Bidang data={dataSLA} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 style={{ color: 'black' }}>
        RATA-RATA PENYELESAIAN PAKET SESUAI SLA
      </h1>
      <DropdownSla onChange={setSelectedOption} />
      <DropdownKategori
        options={dataKategori?.[selectedOption] ?? []}
        type={selectedOption}
        onChange={setSelectedKategori}
      />
      {renderContent()}
    </div>
  );
}
