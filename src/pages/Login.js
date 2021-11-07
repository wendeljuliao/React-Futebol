import React, { useState } from 'react';


import './Itens.css'

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    function login_(){
        console.log(usuario)
        console.log(senha)
    }


    return (
        <div className="center">
            <h1>Sistema de Cadastro Times Cearences</h1>
            <label>Nome de usuario:</label><br/>
            <input type="text" id="id_Usuario" name="n_Usuario"

                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}

            ></input><br/>
            <label>Senha:</label><br/>
            <input type="password" id="id_Senha" name="n_senha"

                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                
            ></input><br/>
            <input type="submit" 
            onClick={(e) => { console.log(usuario) }}
            value="Entrar" className="login"></input><br/>
        </div>
    )
}