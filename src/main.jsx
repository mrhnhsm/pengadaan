import React, { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppContextProvider from './context/AppContext';
import App from './page/dashboard/App';
import Login from './page/login/login';
import { Spin } from 'antd';

const Root = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoginStatus = (isAuthenticated, isLoading) => {
    setAuthenticated(isAuthenticated);
    setLoading(isLoading);
  };

  return (
    <AppContextProvider>
      {loading ? (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}>
          <Spin size="large" />
          <p style={{ marginTop: 16, color: 'white' }}>Memuat...</p>
        </div>
      ) : authenticated ? (
        <App />
      ) : (
        <Login onStatus={handleLoginStatus} />
      )}
    </AppContextProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
