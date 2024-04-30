// Rotas.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Principal from './pages/Principal';

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/Cadastro" element={<Cadastro />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Principal" element={<Principal />} />
        <Route path="/" element={<Cadastro />} />
      </Routes>
    </Router>
  );
};

export default Rotas;
