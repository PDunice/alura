function validarCPF(cpf) {
    if (cpf.length !== 11)
      return { valido: false, texto: 'cpf deve ter 11 dígitos' }
    else
      return { valido: true, texto: '' }
  }

  function validarSenha(senha) {
    if (senha.length <4 )
      return { valido: false, texto: 'senha deve + 4 de dígitos' }
    else
      return { valido: true, texto: '' }
  }
  export {validarCPF, validarSenha}