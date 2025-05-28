import React, { useEffect, useState } from 'react';
import { Button, Tooltip, message } from 'antd';
import {
  PlayCircleOutlined,
  StopOutlined,
  SyncOutlined,
  FileTextOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import axios from 'axios';
import config from '../../API/config'; // pastikan path sesuai dengan project kamu
import '../../assets/css/Fabmenu.css';

export default function FabMenu() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(null); // null, 'running', 'stopped'
  const [loading, setLoading] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const fetchStatus = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${config.BASE_URL}/dashboard/sync/status`
      );
      const schedulerStatus = response.data.STATUS;
      setStatus(schedulerStatus);

      if (schedulerStatus === 'running') {
        message.success({
          content: (
            <span>
              <strong>Status:</strong> RUNNING ✔ <br />
              {response.data.DESCRIPTION}
            </span>
          ),
          duration: 3,
        });
      } else if (schedulerStatus === 'stopped') {
        message.warning({
          content: (
            <span>
              <strong>Status:</strong> STOPPED ✖ <br />
              {response.data.DESCRIPTION}
            </span>
          ),
          duration: 3,
        });
      } else {
        message.info(`Status tidak dikenal: ${schedulerStatus}`);
      }
    } catch (error) {
      message.error('Gagal mengambil status scheduler');
    } finally {
      setLoading(false);
    }
  };

  const handleStart = async () => {
    try {
      await axios.post(`${config.BASE_URL}/dashboard/sync/start`);
      message.success('Scheduler dimulai');
      setStatus('running');
    } catch (error) {
      message.error('Gagal memulai scheduler');
    }
  };

  const handleStop = async () => {
    try {
      await axios.post(`${config.BASE_URL}/dashboard/sync/stop`);
      message.success('Scheduler dihentikan');
      setStatus('stopped');
    } catch (error) {
      message.error('Gagal menghentikan scheduler');
    }
  };

  const handleRunNow = async () => {
    try {
      await axios.post(`${config.BASE_URL}/dashboard/sync/run_now`);
      message.success('Sinkronisasi manual berhasil');
    } catch (error) {
      message.error('Gagal melakukan sinkronisasi manual');
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <>
      {/* Main FAB */}
      <Button
        className="fab-main"
        onClick={toggleMenu}>
        <PlusOutlined style={{ fontSize: '50px' }} />
      </Button>

      {/* Sub-buttons */}
      <div className={`fab-sub-container ${open ? 'open' : ''}`}>
        {/* Conditionally render Start or Stop */}
        {status === 'stopped' && (
          <Tooltip
            title="Mulai Scheduler"
            placement="top">
            <Button
              className="fab-sub1"
              onClick={handleStart}>
              <PlayCircleOutlined />
            </Button>
          </Tooltip>
        )}
        {status === 'running' && (
          <Tooltip
            title="Stop Scheduler"
            placement="top">
            <Button
              className="fab-sub2"
              onClick={handleStop}>
              <StopOutlined />
            </Button>
          </Tooltip>
        )}
        {/* Status */}
        <Tooltip
          title="Status Scheduler"
          placement="top">
          <Button
            className="fab-sub3"
            loading={loading}
            onClick={fetchStatus}>
            <FileTextOutlined />
          </Button>
        </Tooltip>

        {/* Run Now */}
        <Tooltip
          title="Tarik Manual"
          placement="top">
          <Button
            className="fab-sub4"
            onClick={handleRunNow}>
            <SyncOutlined />
          </Button>
        </Tooltip>
      </div>
    </>
  );
}
