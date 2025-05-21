import React, { useState } from "react";

import {
  FileExcelOutlined,
  UploadOutlined,
  SaveOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import * as XLSX from "xlsx";
import { Card, Upload, Button, message, Typography, Space, Table } from "antd";
const { Text } = Typography;

export function Select() {
  return (
    <h1 style={{ color: "black" }}>
      Silakan pilih jenis data melalui dropdown di atas (RUPA/PENGADAAN).
    </h1>
  );
}

export function InputRupa() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);

  const uploadProps = {
    name: "file",
    accept: ".xls,.xlsx",
    showUploadList: false,
    beforeUpload: (file) => {
      const isExcel =
        file.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        file.type === "application/vnd.ms-excel";
      if (!isExcel) {
        message.error("Hanya file Excel (.xls, .xlsx) yang diperbolehkan!");
        return false;
      }
      setSelectedFile(file);
      message.success(`${file.name} berhasil dipilih.`);
      return false;
    },
  };

  const handleSave = () => {
    if (!selectedFile) {
      message.warning("Silakan pilih file terlebih dahulu.");
      return;
    }
    const handleDelete = (indexToDelete) => {
      const updatedData = tableData.filter(
        (_, index) => index !== indexToDelete
      );
      setTableData(updatedData);
    };

    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

      if (jsonData.length === 0) {
        message.warning("Sheet kosong.");
        return;
      }
      const rawCols = Object.keys(jsonData[0]);
      const filteredCols = rawCols.filter(
        (key) => key && !key.startsWith("__EMPTY")
      );
      const cols = filteredCols.map((key) => ({
        title: key,
        dataIndex: key,
        key: key,
      }));

      cols.push({
        title: "AKSI",
        key: "aksi",
        render: (_, record, index) => (
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(index)}
          >
            Hapus
          </Button>
        ),
      });

      setColumns(cols);
      setTableData(jsonData);

      setColumns(cols);
      setTableData(jsonData);
      message.success("File berhasil dibaca dan ditampilkan!");
    };

    reader.readAsArrayBuffer(selectedFile);
  };
  return (
    <div>
      <Card
        title={
          <span>
            <FileExcelOutlined style={{ marginRight: 8 }} />
            Upload File Excel RUPA
          </span>
        }
        style={{ width: "87%" }}
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Upload {...uploadProps}>
            <Button type="primary" icon={<UploadOutlined />}>
              Pilih File Excel RUPA
            </Button>
          </Upload>

          {selectedFile && (
            <Text type="secondary">
              <FileExcelOutlined style={{ marginRight: 4 }} />
              {selectedFile.name}
            </Text>
          )}
          <Space direction="horizontal" size={1300}>
            <Button
              type="default"
              icon={<SaveOutlined />}
              onClick={handleSave}
              disabled={!selectedFile}
            >
              Simpan
            </Button>
            <Button
              type="default"
              icon={<SaveOutlined />}
              onClick={handleSave}
              disabled={!selectedFile}
            >
              Simpan
            </Button>
          </Space>
        </Space>
      </Card>
      {tableData.length > 0 && (
        <Card title="Data dari Excel" style={{ width: "87%", marginTop: 24 }}>
          <Table
            dataSource={tableData}
            columns={columns}
            rowKey={(record, index) => index}
            scroll={{ x: true }}
            bordered
          />
        </Card>
      )}
    </div>
  );
}

export function InputPengadaan() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);

  const uploadProps = {
    name: "file",
    accept: ".xls,.xlsx",
    showUploadList: false,
    beforeUpload: (file) => {
      const isExcel =
        file.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        file.type === "application/vnd.ms-excel";
      if (!isExcel) {
        message.error("Hanya file Excel (.xls, .xlsx) yang diperbolehkan!");
        return false;
      }
      setSelectedFile(file);
      message.success(`${file.name} berhasil dipilih.`);
      return false;
    },
  };

  const handleSave = () => {
    if (!selectedFile) {
      message.warning("Silakan pilih file terlebih dahulu.");
      return;
    }
    const handleDelete = (indexToDelete) => {
      const updatedData = tableData.filter(
        (_, index) => index !== indexToDelete
      );
      setTableData(updatedData);
    };

    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

      if (jsonData.length === 0) {
        message.warning("Sheet kosong.");
        return;
      }
      const rawCols = Object.keys(jsonData[0]);
      const filteredCols = rawCols.filter(
        (key) => key && !key.startsWith("__EMPTY")
      );
      const cols = filteredCols.map((key) => ({
        title: key,
        dataIndex: key,
        key: key,
      }));

      cols.push({
        title: "AKSI",
        key: "aksi",
        render: (_, record, index) => (
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(index)}
          >
            Hapus
          </Button>
        ),
      });

      setColumns(cols);
      setTableData(jsonData);

      setColumns(cols);
      setTableData(jsonData);
      message.success("File berhasil dibaca dan ditampilkan!");
    };

    reader.readAsArrayBuffer(selectedFile);
  };
  return (
    <div>
      <Card
        title={
          <span>
            <FileExcelOutlined style={{ marginRight: 8 }} />
            Upload File Excel BAGIAN PENGADAAN
          </span>
        }
        style={{ width: "87%" }}
      >
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Upload {...uploadProps}>
            <Button type="primary" icon={<UploadOutlined />}>
              Pilih File Excel BAGIAN PENGADAAN
            </Button>
          </Upload>

          {selectedFile && (
            <Text type="secondary">
              <FileExcelOutlined style={{ marginRight: 4 }} />
              {selectedFile.name}
            </Text>
          )}

          <Button
            type="default"
            icon={<SaveOutlined />}
            onClick={handleSave}
            disabled={!selectedFile}
          >
            Simpan
          </Button>
        </Space>
      </Card>
      {tableData.length > 0 && (
        <Card title="Data dari Excel" style={{ width: "87%", marginTop: 24 }}>
          <Table
            dataSource={tableData}
            columns={columns}
            rowKey={(record, index) => index}
            scroll={{ x: true }}
            bordered
          />
        </Card>
      )}
    </div>
  );
}
