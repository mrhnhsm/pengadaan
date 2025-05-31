import React, { useState, useEffect } from 'react';
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

export function DropdownKategori({ options, type, onChange }) {
  const [value, setValue] = useState('');

  // Reset ke default setiap kali type berubah
  useEffect(() => {
    setValue('');
    if (onChange) onChange('');
  }, [type, onChange]);

  const handleChange = (val) => {
    setValue(val);
    if (onChange) onChange(val);
  };

  const defaultLabels = {
    vendor: 'Semua Vendor',
    wilayah: 'Semua Wilayah',
    bidang: 'Semua Bidang',
  };

  return (
    <Select
      className="custom-dropdown"
      value={value}
      onChange={handleChange}
      showSearch
      placeholder={defaultLabels[type] || ''}
      optionFilterProp="children"
      filterOption={(input, option) =>
        option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
        option?.value?.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }>
      <Option value="">{defaultLabels[type] || ''}</Option>
      {options.map((item) => (
        <Option
          key={item}
          value={item}>
          {item}
        </Option>
      ))}
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
