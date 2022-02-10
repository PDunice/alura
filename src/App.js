// import logo from './logo.svg';
import React, { Component } from 'react';
import '@fontsource/roboto';

import FormularioCadastro from './components/formularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import './App.css';
import { validarCPF, validarSenha } from './models/cadastro';
import ValidacoesCadastro from './contexts/validacoesCadastro'

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' align='center' > Formulário Cadastro</Typography>
      <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha }}>

        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}


export default App;
