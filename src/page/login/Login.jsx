import React, { useState } from "react";
import { Card, Form, Input, Button, Typography, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "../../assets/css/login.css"; // untuk styling custom
import LoginBackground from "../../assets/img/LoginBackground.jpg";
import LogoPtpn from "../../assets/img/PTPN4_UnBackground.png";
import Config from "../../API/config";
import axios from "axios";
import config from "../../API/config";
const tokenUser = localStorage.getItem("user_data");

const { Title } = Typography;

const LoginPage = () => {
  const onFinish = async (values) => {
    console.log(values.username);
    console.log(values.password);
    console.log(`${Config.BASE_URL_PYTHON}/users/verify`);
    try {
      const response = await axios.post(
        `${config.BASE_URL_PYTHON}/users/verify`,
        {
          USERNAME: values.username,
          PASSWORD: values.password,
        }
      );
      console.log(1);
      console.log(response.data);

      const token = response.data.ACCESS_TOKEN;
      localStorage.setItem("token", token);

      message.success("Login berhasil!");
      // Navigasi ke dashboard atau halaman utama
    } catch (error) {
      if (error.response) {
        const detail = error.response.data.detail;

        if (error.response.status === 401) {
          message.error(
            detail?.message || "Login gagal: username atau password salah"
          );
        } else {
          message.error(detail?.message || "Terjadi kesalahan saat login");
        }
      } else {
        message.error("Tidak dapat terhubung ke server");
      }
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${LoginBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card className="login-card">
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <Title className="TitleContainer" level={2}>
            <img
              src={LogoPtpn}
              alt="Logo PTPN"
              style={{ width: "200px", height: "auto" }}
            />
          </Title>
          <h2 className="LogoFont">Dashboard Pengadaan Vendor</h2>
        </div>
        <Form
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
          size="large"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Masukkan username Anda!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Masukkan password Anda!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
