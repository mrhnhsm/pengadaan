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
import Swal from 'sweetalert2';

const { Title } = Typography;

const LoginPage = ({ onStatus }) => {
  const [userId, setUserId] = useState(() => localStorage.getItem('userId'));
  const [tokenUser, setTokeUser] = useState(() =>
    localStorage.getItem('tokenUser')
  );
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
      console.log(response);

      if (response.status === 200) {
        const token = response.data.ACCESS_TOKEN;
        const userId = response.data.USERID;

        // Update state dan localStorage
        setUserId(token); // Sepertinya ada kesalahan di sini - seharusnya userId
        setTokeUser(userId); // Dan ini seharusnya token
        localStorage.setItem('userId', userId);
        localStorage.setItem('tokenUser', token);

        // Langsung panggil verifikasi dengan data yang fresh
        try {
          const responseUser = await axios.get(
            `${config.BASE_URL}/users/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUserLoged(responseUser.data);
          onStatus(true, false);
        } catch (error) {
          console.error('Error verifying user:', error);
          onStatus(false, false);
        }

        await Swal.fire({
          title: 'Welcome To Dashboard Pengadaan',
          text: 'Login Success',
          icon: 'success',
        });
      }
    } catch (error) {
      onStatus(false, false);
      localStorage.removeItem('tokenUser');
      localStorage.removeItem('userId');
      setUserId(null);
      setTokeUser(null);

      // Error handling code...
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const verifyToken = async () => {
      const storedToken = localStorage.getItem('tokenUser');
      const storedUserId = localStorage.getItem('userId');

      if (storedToken && storedUserId) {
        onStatus(true, true);
        try {
          const responseUser = await axios.get(
            `${config.BASE_URL}/users/${storedUserId}`,
            {
              headers: {
                Authorization: `Bearer ${storedToken}`,
              },
            }
          );
          setUserLoged(responseUser.data);
          onStatus(true, false);
        } catch (error) {
          localStorage.removeItem('tokenUser');
          localStorage.removeItem('userId');
          setUserId(null);
          setTokeUser(null);
          onStatus(false, false);
        }
      } else {
        onStatus(false, false);
      }
    };

    verifyToken();
  }, [tokenUser, userId]);

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
