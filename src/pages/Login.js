import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Itens.css'

import axios from 'axios'


export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    function entrar(e) {
        e.preventDefault();

        axios.get(`http://localhost:3001/users?usuario=${usuario}`)
            .then((res) => {
                const usuarioLogado = res.data[0];
                if (usuarioLogado !== undefined) {
                    if (usuarioLogado.senha !== senha) {
                        return ;
                    }

                    navigate('/home')
                }
            })
    }


    return (
        <div className="container">
            <div className="center">
                <h1 style={{ color: 'white' }}>Sistema de Cadastro de Times</h1>
                <form className="form" onSubmit={(e) => entrar(e)}>
                    <label className="labels">Nome de usuario:</label>
                    <input type="text" id="id_Usuario" name="n_Usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)} />
                    <label className="labels">Senha:</label>
                    <input type="password" id="id_Senha" name="n_senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)} />
                    <input type="submit"
                        onClick={(e) => { console.log(usuario) }}
                        value="Entrar" className="login" />
                </form>
            </div>
        </div>
    )
}