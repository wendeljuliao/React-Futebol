import React, { useState, useEffect } from 'react';
import CardTime from '../components/CardTime';
import './Home.css'

import axios from 'axios'

export default function Home() {

    const [cards, setCards] = useState([]);

    const [isDelete, setIsDelete] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3001/times')
            .then((res) => setCards(res.data))

        setIsDelete(false)
    }, [isDelete]);

   


    return (

        <div className="Side">
            {cards.map((card) => <CardTime key={card.id} id={card.id} nome_time={card.nome} dataCriacao={card.dataCriacao} setIsDelete={setIsDelete} />)}

        </div>
    )
}