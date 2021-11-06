import React, { useState } from 'react';


import './Itens.css'

export default function Login() {


    return (
        <div className="center">
            <h1>Sistema de Cadastro Times Cearences</h1>
            <label>Nome de usuario:</label><br/>
            <input type="text" id="id_Usuario" name="n_Usuario"></input><br/>
            <label>Senha:</label><br/>
            <input type="text" id="id_Senha" name="lname"></input><br/>
            <input type="submit" value="Entrar" className="login"></input><br/>
        </div>
    )
}