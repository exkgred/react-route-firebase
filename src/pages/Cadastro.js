import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, firestore } from '../firebase';

function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleCadastro = async () => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, senha);
      const user = userCredential.user;

      await firestore.collection('usuarios').doc(user.uid).set({
        nome,
        sobrenome,
        dataNascimento,
        email
      });

      console.log('Usuário cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error.message);
    }
  };

  return (
    <div id="textoCentralizado">
      <h2>Cadastro</h2>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
      <p><input type="text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} placeholder="Sobrenome" /></p>
      <h2><input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" /></h2>
      <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" />
      <p><input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} /></p>
      <p><button onClick={handleCadastro}>Cadastrar</button></p>
      <p>Já tem uma conta? <Link to="/login">Faça login aqui</Link></p>
    </div>
  );
}

export default Cadastro;
