import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/validacoesCadastro'
import useErros from '../../hooks/useErros'

function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState('')
    const [promocoes, setPromocoes] = useState(false)
    const [novidades, setNovidades] = useState(false)
    
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes)

    
    

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                if (possoEnviar())
                    aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value)
                }}
                id='nome' label='nome' type='text' variant='outlined' fullWidth margin='normal'
            />
            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id='sobrenome' label='sobrenome' type='text' variant='outlined' fullWidth margin='normal' />
            <TextField
                value={cpf}
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                onChange={(event) => {
                    setCpf(event.target.value)
                }}

                id='CPF' label='CPF' name='cpf' type='text' variant='outlined' fullWidth margin='normal' />


            <FormControlLabel label='promoções' control={
                <Switch
                    checked={promocoes}
                    onChange={(event) => {
                        setPromocoes(event.target.checked)
                    }}
                    name='Promoções' color='primary' />}
            />
            <FormControlLabel label='novidades' control={
                <Switch
                    checked={novidades}
                    onChange={(event) => {
                        setNovidades(event.target.checked)
                    }}
                    name='novidades' color='primary' />}
            />

            <Button type='submit' variant='contained' color='primary'>Próximo</Button>
        </form>
    );
}
export default DadosPessoais