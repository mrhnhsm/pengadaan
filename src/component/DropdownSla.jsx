import React from "react";
import { Select } from "antd";
import "../assets/css/dropdown.css"; // pastikan path-nya benar

const { Option } = Select;

export default function DropdownSla({ onChange }) {
  return (
    <Select
      defaultValue="vendor"
      className="custom-dropdown"
      onChange={onChange}
    >
      <Option value="vendor">Nama Vendor</Option>
      <Option value="wilayah">Wilayah</Option>
      <Option value="bidang">Bidang</Option>
    </Select>
  );
}
