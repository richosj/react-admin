// src/App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import Account from './pages/account';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}

export default App;