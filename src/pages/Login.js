import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, senha);
      console.log('Login realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao realizar login:', error.message);
    }
  };

  return (
    <div id="textoCentralizado">
      <h2>Login</h2>
      <h2><input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" /></h2>
      <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" />
      <h2><button onClick={handleLogin}>Login</button></h2>
      <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se aqui</Link></p>
    </div>
  );
};

export default Login;
