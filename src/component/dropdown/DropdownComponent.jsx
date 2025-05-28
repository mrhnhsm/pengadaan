import React from 'react';
import { Select } from 'antd';
import '../../assets/css/dropdown.css'; // pastikan path-nya benar

const { Option } = Select;

export function DropdownSla({ onChange }) {
  return (
    <Select
      defaultValue="vendor"
      className="custom-dropdown"
      onChange={onChange}>
      <Option value="vendor">Nama Vendor</Option>
      <Option value="wilayah">Wilayah</Option>
      <Option value="bidang">Bidang</Option>
    </Select>
  );
}

export function DropdownInputExcel({ onChange }) {
  return (
    <Select
      defaultValue="select"
      className="custom-dropdown-excel"
      onChange={onChange}>
      <Option value="select">Pilih Jenis Scheduler</Option>
      <Option value="RUPA">RUPA</Option>
      <Option value="PENGADAAN">BAGIAN PENGADAAN</Option>
    </Select>
  );
}
