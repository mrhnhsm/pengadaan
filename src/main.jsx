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
            width: '100%',
            height: '100vh',
            background: '#0000001a',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Spin size="large" />
          <p style={{ marginLeft: 20 }}>Memuat...</p>
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
