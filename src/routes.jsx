import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/index'; // Verifique os caminhos
import UserPage from './pages/user';   // Verifique os caminhos

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Definindo a rota para a página inicial */}
        <Route path="/" element={<IndexPage />} />

        {/* Definindo a rota para a página de usuário */}
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
