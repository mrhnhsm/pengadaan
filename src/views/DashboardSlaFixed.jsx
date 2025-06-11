import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { Card, Col, Row, Select, Table } from 'antd';
import '../assets/css/dashboardSlaFixed.css';
import axios from 'axios';
import config from '../API/config';
import CountUp from 'react-countup';

const { Option } = Select;

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

const formatDuration = (days) => {
  if (!days || days === 0) return '0 Hari';
  return `${Math.round(days)} Hari`;
};

export default function DashboardSlaFixed() {
  const { tanggal_start, tanggal_end } = useContext(AppContext);
  const [tokenUser, setTokenUser] = useState(() =>
    localStorage.getItem('tokenUser')
  );

  // Dropdown states
  const [selectedBidang, setSelectedBidang] = useState('');
  const [selectedWilayah, setSelectedWilayah] = useState('');
  const [selectedVendor, setSelectedVendor] = useState('');

  // Data states
  const [dataKategori, setDataKategori] = useState(null);
  const [dataSLA, setDataSLA] = useState(null);
  const [loading, setLoading] = useState(false);

  // Get Data List Kategori
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

  //GET DATA USER
  useEffect(() => {
    let mounting = true;
    const getDataSLA = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${config.BASE_URL}/dashboard/pengadaan_data`,
          {
            params: {
              tanggal_start: tanggal_start,
              tanggal_end: tanggal_end,
              vendor_pemenang: selectedVendor,
              wilayah: selectedWilayah,
              bidang: selectedBidang,
            },
          }
        );
        if (mounting) {
          const data = response.data.data;
          setDataSLA(data);
        }
      } catch (error) {
        if (mounting) {
          console.error('Error Catching Data SLA : ', error);
        }
      } finally {
        setLoading(false);
      }
    };
    getDataSLA();
    return () => {
      mounting = false;
    };
  }, [
    tokenUser,
    tanggal_start,
    tanggal_end,
    selectedBidang,
    selectedVendor,
    selectedWilayah,
  ]);

  // Table columns
  const columnsFixed = [
    {
      title: 'Nomor PP',
      dataIndex: 'nomor_pk',
      key: 'nomor_pk',
      width: 120,
      render: (text) => (
        <div
          className="table-cell-content"
          title={text}>
          {text}
        </div>
      ),
    },
    {
      title: 'Nama Paket',
      dataIndex: 'nama_paket',
      key: 'nama_paket',
      width: 200,
      render: (text) => (
        <div
          className="table-cell-content text-transform"
          title={text}>
          {text}
        </div>
      ),
    },
    {
      title: 'Sumber Dana',
      dataIndex: 'sumber_dana',
      key: 'sumber_dana',
      width: 150,
      render: (text) => (
        <div
          className="table-cell-content text-transform"
          title={text}>
          {text}
        </div>
      ),
    },
    {
      title: 'Metode',
      dataIndex: 'metode',
      key: 'metode',
      width: 120,
      render: (text) => (
        <div
          className="table-cell-content method text-transform"
          title={text}>
          {text}
        </div>
      ),
    },
    {
      title: 'Nilai',
      dataIndex: 'nilai',
      key: 'nilai',
      width: 150,
      render: (text) => (
        <div
          className="table-cell-content currency"
          title={text}>
          {text}
        </div>
      ),
    },
    {
      title: 'Nama Vendor',
      dataIndex: 'nama_vendor',
      key: 'nama_vendor',
      width: 150,
      render: (text) => (
        <div
          className="table-cell-content vendor-name text-transform"
          title={text}>
          {text}
        </div>
      ),
    },
    {
      title: 'Bidang',
      dataIndex: 'bidang',
      key: 'bidang',
      width: 120,
      render: (text) => (
        <div
          className="table-cell-content text-transform"
          title={text}>
          {text}
        </div>
      ),
    },
    {
      title: 'Wilayah',
      dataIndex: 'wilayah',
      key: 'wilayah',
      width: 120,
      render: (text) => (
        <div
          className="table-cell-content text-transform"
          title={text}>
          {text}
        </div>
      ),
    },
  ];

  // Get table data
  const getTableData = () => {
    try {
      if (!dataSLA?.DATA_TABLE?.length) return [];

      return dataSLA.DATA_TABLE.map((item, index) => ({
        key: item?.NO_PP || `row-${index}`,
        nomor_pk: item?.NO_PP || '-',
        nama_paket: item?.NAMA_PAKET || '-',
        sumber_dana: item?.SUMBER_DANA || '-',
        metode: item?.METODE || '-',
        nilai: item?.NILAI
          ? `Rp ${new Intl.NumberFormat('id-ID').format(item.NILAI)}`
          : '-',
        nama_vendor: item?.NAMA_VENDOR || '-',
        bidang: item?.BIDANG || '-',
        wilayah: item?.WILAYAH || '-',
      }));
    } catch (error) {
      console.error('Error mapping table data:', error);
      return [];
    }
  };

  const tableData = getTableData();
  const { val: nilaiVal, unit: nilaiUnit } = formatNominal(
    dataSLA?.DATA_CARD?.NILAI_PAKET ?? 0
  );

  return (
    <>
      <h1 className="dashboard-title">
        RATA-RATA PENYELESAIAN PAKET SESUAI SLA
      </h1>

      {/* Dropdown Section */}
      <div className="dropdown-section">
        <Select
          className="custom-dropdown-fixed"
          placeholder={selectedBidang ? selectedBidang : 'Semua Bidang'}
          value={selectedBidang || undefined}
          onChange={setSelectedBidang}
          allowClear
          showSearch
          optionFilterProp="children"
          filterOption={(input, option) =>
            option?.children?.toLowerCase().includes(input.toLowerCase())
          }
          notFoundContent="Tidak ada data ditemukan">
          {dataKategori?.bidang?.map((item, index) => (
            <Option
              key={index}
              value={item}>
              {item}
            </Option>
          ))}
        </Select>

        <Select
          className="custom-dropdown-fixed"
          placeholder={selectedWilayah ? selectedWilayah : 'Semua Wilayah'}
          value={selectedWilayah || undefined}
          onChange={setSelectedWilayah}
          allowClear
          showSearch
          optionFilterProp="children"
          filterOption={(input, option) =>
            option?.children?.toLowerCase().includes(input.toLowerCase())
          }
          notFoundContent="Tidak ada data ditemukan">
          {dataKategori?.wilayah?.map((item, index) => (
            <Option
              key={index}
              value={item}>
              {item}
            </Option>
          ))}
        </Select>

        <Select
          className="custom-dropdown-fixed"
          placeholder={selectedVendor ? selectedVendor : 'Semua Vendor'}
          value={selectedVendor || undefined}
          onChange={setSelectedVendor}
          allowClear
          showSearch
          optionFilterProp="children"
          filterOption={(input, option) =>
            option?.children?.toLowerCase().includes(input.toLowerCase())
          }
          notFoundContent="Tidak ada data ditemukan">
          {dataKategori?.vendor?.map((item, index) => (
            <Option
              key={index}
              value={item}>
              {item}
            </Option>
          ))}
        </Select>
      </div>

      {/* Cards Section */}
      <Row
        gutter={[16, 16]}
        className="cards-section">
        <Col
          xs={24}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          style={{ maxWidth: '21.9%', flex: '0 0 22.9%' }}>
          <Card className="dashboard-card card-jumlah-paket">
            <div className="card-content">
              <div className="card-header">
                <p className="card-title">JUMLAH PAKET</p>
              </div>
              <div className="card-value">
                <h1 className="card-number">
                  <CountUp
                    end={dataSLA?.DATA_CARD?.JUMLAH_PAKET ?? 0}
                    decimals={0}
                    duration={2}
                  />{' '}
                  PAKET
                </h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col
          xs={24}
          sm={12}
          md={6}
          lg={6}
          xl={5}
          style={{ maxWidth: '21.9%', flex: '0 0 22.9%' }}>
          <Card className="dashboard-card card-nilai-paket">
            <div className="card-content">
              <div className="card-header">
                <p className="card-title">NILAI PAKET</p>
              </div>
              <div className="card-value">
                <h1 className="card-number">
                  Rp{' '}
                  <CountUp
                    end={nilaiVal}
                    decimals={3}
                    duration={2}
                  />{' '}
                  {nilaiUnit}
                </h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col
          xs={24}
          sm={12}
          md={6}
          lg={6}
          xl={5}
          style={{ maxWidth: '21.9%', flex: '0 0 22.9%' }}>
          <Card className="dashboard-card card-durasi-tender">
            <div className="card-content">
              <div className="card-header">
                <p className="card-title">RATA-RATA DURASI TENDER TERBATAS</p>
              </div>
              <div className="card-value">
                <h1 className="card-number">
                  <CountUp
                    end={dataSLA?.DATA_CARD?.RATA_DURASI_TENDER_TERBATAS ?? 0}
                    decimals={2}
                    duration={2}
                  />{' '}
                  HARI
                </h1>
              </div>
            </div>
          </Card>
        </Col>

        <Col
          xs={24}
          sm={12}
          md={6}
          lg={6}
          xl={5}
          style={{ maxWidth: '21.9%', flex: '0 0 22.9%' }}>
          <Card className="dashboard-card card-durasi-penunjukan">
            <div className="card-content">
              <div className="card-header">
                <p className="card-title">
                  RATA-RATA DURASI PENUNJUKAN LANGSUNG
                </p>
              </div>
              <div className="card-value">
                <h1 className="card-number">
                  <CountUp
                    end={
                      dataSLA?.DATA_CARD?.RATA_DURASI_PENUNJUKAN_LANGSUNG ?? 0
                    }
                    decimals={2}
                    duration={2}
                  />{' '}
                  HARI
                </h1>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Table Section */}
      <div>
        <Table
          rowKey="nomor_pk"
          columns={columnsFixed}
          dataSource={tableData}
          loading={{
            spinning: loading || !dataSLA,
            tip: 'Memuat data...',
          }}
          pagination={{
            total: tableData.length,
            showTotal: (total) => `Total Data: ${total}`,
            showSizeChanger: true,
            showQuickJumper: true,
            className: 'custom-pagination',
            responsive: true,
          }}
          scroll={{ x: 1200, y: 1800 }}
          className="custom-table"
          size="small"
          locale={{
            emptyText:
              dataSLA?.DATA_TABLE?.length === 0
                ? 'Tidak ada data'
                : 'Sedang memuat data...',
          }}
          bordered
        />
      </div>
    </>
  );
}
