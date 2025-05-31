import { useState } from 'react';
import { Table } from 'antd';
import '../../assets/css/table.css'; // Pastikan ini mengimpor file CSS di atas

export function TableNamaVendor({ data, loading = false }) {
  const getTableData = () => {
    try {
      if (!data?.DATA_TABLE?.length) return [];

      return data.DATA_TABLE.map((item, index) => ({
        key: item?.NO_PP || `row-${index}`,
        nomor_pk: item?.NO_PP || '-',
        nama_paket: item?.NAMA_PAKET || '-',
        sumber_dana: item?.SUMBER_DANA || '-',
        metode: item?.METODE || '-',
        nilai: item?.NILAI
          ? `Rp ${new Intl.NumberFormat('id-ID').format(item.NILAI)}`
          : '-',
        nama_vendor: item?.NAMA_VENDOR || '-',
      }));
    } catch (error) {
      console.error('Error mapping table data:', error);
      return [];
    }
  };

  const columnsNamaVendor = [
    {
      title: 'Nomor PP',
      dataIndex: 'nomor_pk',
      key: 'nomor_pk',
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
      render: (text) => (
        <div
          className="table-cell-content vendor-name text-transform"
          title={text}>
          {text}
        </div>
      ),
    },
  ];

  const dataNamaVendor = getTableData();

  return (
    <div className="raihan-table-wrapper">
      <Table
        rowKey="nomor_pk"
        columns={columnsNamaVendor}
        dataSource={dataNamaVendor}
        loading={{
          spinning: loading || !data,
          tip: 'Memuat data...',
        }}
        pagination={{
          total: dataNamaVendor.length,
          showTotal: (total) => `Total Data: ${total}`,
          showSizeChanger: true,
          showQuickJumper: true,
          className: 'raihan-css-pagination',
        }}
        scroll={{ x: true }}
        className="raihan-styled-table"
        size="small"
        locale={{
          emptyText:
            data?.DATA_TABLE?.length === 0
              ? 'Tidak ada data'
              : 'Sedang memuat data...',
        }}
        bordered
      />
    </div>
  );
}

export function TableBidang({ data, loading = false }) {
  const getTableData = () => {
    try {
      if (!data?.DATA_TABLE?.length) return [];

      return data.DATA_TABLE.map((item, index) => ({
        key: item?.NO_PP || `row-${index}`,
        nomor_pk: item?.NO_PP || '-',
        nama_paket: item?.NAMA_PAKET || '-',
        sumber_dana: item?.SUMBER_DANA || '-',
        metode: item?.METODE || '-',
        nilai: item?.NILAI
          ? `Rp ${new Intl.NumberFormat('id-ID').format(item.NILAI)}`
          : '-',
        bidang: item?.BIDANG || '-',
      }));
    } catch (error) {
      console.error('Error mapping table data:', error);
      return [];
    }
  };

  const columnsBidang = [
    {
      title: 'Nomor PP',
      dataIndex: 'nomor_pk',
      key: 'nomor_pk',
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
      render: (text) => (
        <div
          className="table-cell-content currency"
          title={text}>
          {text}
        </div>
      ),
    },
    {
      title: 'Bidang',
      dataIndex: 'bidang',
      key: 'bidang',
      render: (text) => (
        <div
          className="table-cell-content vendor-name text-transform"
          title={text}>
          {text}
        </div>
      ),
    },
  ];

  const dataBidang = getTableData();

  return (
    <div className="raihan-table-wrapper">
      <Table
        rowKey="nomor_pk"
        columns={columnsBidang}
        dataSource={dataBidang}
        loading={{
          spinning: loading || !data,
          tip: 'Memuat data...',
        }}
        pagination={{
          total: dataBidang.length,
          showTotal: (total) => `Total Data: ${total}`,
          showSizeChanger: true,
          showQuickJumper: true,
          className: 'raihan-css-pagination',
        }}
        scroll={{ x: true }}
        className="raihan-styled-table"
        size="small"
        locale={{
          emptyText:
            data?.DATA_TABLE?.length === 0
              ? 'Tidak ada data'
              : 'Sedang memuat data...',
        }}
        bordered
      />
    </div>
  );
}

export function TableWilayah({ data, loading = false }) {
  const getTableData = () => {
    try {
      if (!data?.DATA_TABLE?.length) return [];

      return data.DATA_TABLE.map((item, index) => ({
        key: item?.NO_PP || `row-${index}`,
        nomor_pk: item?.NO_PP || '-',
        nama_paket: item?.NAMA_PAKET || '-',
        sumber_dana: item?.SUMBER_DANA || '-',
        metode: item?.METODE || '-',
        nilai: item?.NILAI
          ? `Rp ${new Intl.NumberFormat('id-ID').format(item.NILAI)}`
          : '-',
        wilayah: item?.WILAYAH || '-',
      }));
    } catch (error) {
      console.error('Error mapping table data:', error);
      return [];
    }
  };

  const columnsWilayah = [
    {
      title: 'Nomor PP',
      dataIndex: 'nomor_pk',
      key: 'nomor_pk',
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
      render: (text) => (
        <div
          className="table-cell-content currency"
          title={text}>
          {text}
        </div>
      ),
    },
    {
      title: 'Wilayah',
      dataIndex: 'wilayah',
      key: 'wilayah',
      render: (text) => (
        <div
          className="table-cell-content vendor-name text-transform"
          title={text}>
          {text}
        </div>
      ),
    },
  ];

  const dataWilayah = getTableData();

  return (
    <div className="raihan-table-wrapper">
      <Table
        rowKey="nomor_pk"
        columns={columnsWilayah}
        dataSource={dataWilayah}
        loading={{
          spinning: loading || !data,
          tip: 'Memuat data...',
        }}
        pagination={{
          total: dataWilayah.length,
          showTotal: (total) => `Total Data: ${total}`,
          showSizeChanger: true,
          showQuickJumper: true,
          className: 'raihan-css-pagination',
        }}
        scroll={{ x: true }}
        className="raihan-styled-table"
        size="small"
        locale={{
          emptyText:
            data?.DATA_TABLE?.length === 0
              ? 'Tidak ada data'
              : 'Sedang memuat data...',
        }}
        bordered
      />
    </div>
  );
}
const columnsChartTest = [
  {
    title: 'NO',
    dataIndex: 'no',
    key: 'no',
    render: (text, record, index) => index + 1,
    width: 50,
    align: 'center',
  },
  { title: 'NOMOR PK', dataIndex: 'nomor_pk', key: 'nomor_pk' },
  { title: 'NAMA PAKET', dataIndex: 'nama_paket', key: 'nama_paket' },
];

const dataChartTest = [
  {
    key: '1',
    nomor_pk: 'Andi',
    nama_paket: 25,
  },
  {
    key: '2',
    nomor_pk: 'Budi',
    nama_paket: 26,
  },
  {
    key: '3',
    nomor_pk: 'Cici',
    nama_paket: 27,
  },
  {
    key: '4',
    nomor_pk: 'Cici',
    nama_paket: 27,
  },
  {
    key: '5',
    nomor_pk: 'Cici',
    nama_paket: 27,
  },
  {
    key: '6',
    nomor_pk: 'Cici',
    nama_paket: 27,
  },
  {
    key: '7',
    nomor_pk: 'Cici',
    nama_paket: 27,
  },
  {
    key: '8',
    nomor_pk: 'Cici',
    nama_paket: 27,
  },
  {
    key: '9',
    nomor_pk: 'Cici',
    nama_paket: 27,
  },
  {
    key: '10',
    nomor_pk: 'Cici',
    nama_paket: 27,
  },
  {
    key: '11',
    nomor_pk: 'Cici',
    nama_paket: 27,
  },
  {
    key: '12',
    nomor_pk: 'Cici',
    nama_paket: 27,
  },
  {
    key: '13',
    nomor_pk: 'Cici',
    nama_paket: 27,
    width: 80,
  },
  // tambahkan data lagi untuk melihat pagination bekerja
];

export function TableChartTest() {
  return (
    <div className="table-wrapper">
      <Table
        bordered
        columns={columnsChartTest}
        dataSource={dataChartTest}
        size=""
        scroll={{ x: true }} // aktifkan scroll horizontal jika perlu
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
}
