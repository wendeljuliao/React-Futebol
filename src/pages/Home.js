import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown } from 'react-bootstrap';
import CardTime from '../components/CardTime';

export default function Home() {
    
    const [time, setTime] = useState('');
    const [descricao, setDescricao] = useState('');

    function addCard(){
        console.log(time)
        console.log(descricao)
    }


    return (
        
        <div id="id_home" class="Side">

        <label>Nome do Time</label>
        <input type="text" id="id_Time" name="n_Time" padding="4px"

            value={time}
            onChange={(e) => setTime(e.target.value)}

        ></input>
        <label>Descricao do Time</label>
        <input type="text" id="id_Descricao" name="n_Descricao" style={{padding:"8px"}}

            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}

        ></input>


            <input type="submit" value="Cadastrar Time" className="login"

            onClick={(e) => { }}

            ></input>
        </div>
    )
}