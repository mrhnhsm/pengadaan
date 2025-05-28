import React, { useState, useContext, useEffect } from 'react';
import { Card, Form, Input, Button, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../../assets/css/login.css'; // untuk styling custom
import LoginBackground from '../../assets/img/LoginBackground.jpg';
import LogoPtpn from '../../assets/img/PTPN4_UnBackground.png';
import Config from '../../API/config';
import axios from 'axios';
import config from '../../API/config';
import { AppContext } from '../../context/AppContext';

const { Title } = Typography;

const LoginPage = ({ onStatus }) => {
  const [tokenUser, setTokeUser] = useState(localStorage.getItem('tokenUser'));
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const { setUserLoged } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const { username, password } = values;
      const response = await axios.post(`${config.BASE_URL}/users/verify`, {
        USERNAME: username,
        PASSWORD: password,
      });

      const token = response.data.ACCESS_TOKEN;
      const userId = response.data.USERID;
      localStorage.setItem('userId', userId);
      localStorage.setItem('tokenUser', token);
      message.success('Login berhasil!');
      onStatus(true, false);
      // Navigasi ke dashboard atau halaman utama
    } catch (error) {
      onStatus(false, false);
      localStorage.removeItem('tokenUser');
      localStorage.removeItem('userId');
      console.log(error);
      if (error.response) {
        const detail = error.response.data.detail;

        if (error.response.status === 401) {
          message.error(
            detail?.message || 'Login gagal: username atau password salah'
          );
        } else {
          message.error(detail?.message || 'Terjadi kesalahan saat login');
        }
      } else {
        message.error('Tidak dapat terhubung ke server');
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const verifyToken = async () => {
      if (tokenUser != null) {
        onStatus(true, true);
        try {
          const responseUser = await axios.get(
            `${config.BASE_URL}/users/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${tokenUser}`,
              },
            }
          );
          setUserLoged(responseUser.data);
          // console.log(responseUser.data);
          onStatus(true, false);
        } catch (error) {
          localStorage.removeItem('tokenUser');
          localStorage.removeItem('userId');
          onStatus(false, false);
        }
      } else {
        onStatus(false, false);
      }
    };
    verifyToken();
  }, [tokenUser]);

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${LoginBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <Card className="login-card">
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <Title
            className="TitleContainer"
            level={2}>
            <img
              src={LogoPtpn}
              alt="Logo PTPN"
              style={{ width: '200px', height: 'auto' }}
            />
          </Title>
          <h2 className="LogoFont">Dashboard Pengadaan Vendor</h2>
        </div>
        <Form
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
          size="large">
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Masukkan username Anda!' }]}>
            <Input
              prefix={<UserOutlined />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Masukkan password Anda!' }]}>
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
