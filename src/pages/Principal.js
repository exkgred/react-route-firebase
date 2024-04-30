import React from 'react';
import { Link } from 'react-router-dom';

const Principal = () => {
  return (
    <div id="textoCentralizado">
      <h2>Página Principal</h2>
      <p>Bem-vindo! Você está logado.</p>
      <Link to="/Cadastro">Sair</Link>
    </div>
  );
};

export default Principal;
