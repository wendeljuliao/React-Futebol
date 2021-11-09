import React, { useState, useEffect } from 'react';
import CardTime from '../components/CardTime';
import './Home.css'

import axios from 'axios'

//import api from '../services/index'

export default function Home() {

    const [cards, setCards] = useState([]);

    const [isSave, setIsSave] = useState(false);
    const [isDelete, setIsDelete] = useState(false)

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [time, setTime] = useState('')
    const [dataCriacao, setDataCriacao] = useState('')
    const [CEP, setCEP] = useState('')

    const [isModalCEP, setIsModalCEP] = useState(false)
    const [dataCEP, setDataCEP] = useState({})



    useEffect(() => {
        axios.get('http://localhost:3001/times')
            .then((res) => setCards(res.data))

        setIsSave(false)
        setIsDelete(false)
    }, [isSave, isDelete]);


    function salvarTime(e) {
        e.preventDefault();

        const data = { nome: time, dataCriacao, CEP }

        axios.post('http://localhost:3001/times', data)
            .then((res) => console.log(res.data))


        setTime('')
        setDataCriacao('')
        setCEP('')

        setIsSave(true)
        setIsModalVisible(false)


    }


    return (

        <div className="container2">
            {cards.map((card) => <CardTime key={card.id} id={card.id} time={card.nome} dataCriacao={card.dataCriacao} setIsDelete={setIsDelete} CEP={card.CEP} setDataCEP={setDataCEP} setIsModalCEP={setIsModalCEP} />)}

            <a onClick={(e) => { e.preventDefault(); setIsModalVisible(true) }} className="d-flex justify-content-center align-items-center" style={{ padding: '0 0', margin: '5px 10px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" style={{ fill: '#111111' }} viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>
            </a>


            {isModalVisible ? (
                <div class="popup-bg" /*id={"popup" + this.props.id}*/ >
                    <form class="escopo-popup" onSubmit={(e) => salvarTime(e)}>
                        <a id="close" onClick={(e) => {
                            e.preventDefault();
                            setTime('')
                            setDataCriacao('')
                            setCEP('')
                            setIsModalVisible(false)
                        }} />
                        <div className="campos w-100 p-5">
                            <div style={{ width: '100%' }}>
                                <div className="inputField d-flex align-items-start flex-column py-3">
                                    <label className="labels">Nome do time</label>
                                    <input value={time} required type="text" onChange={(e) => setTime(e.target.value)} className='prop_up' style={{ width: "100%" }} />
                                </div>
                                <div className="inputField d-flex align-items-start flex-column py-3">
                                    <label className="labels">Data de criação do Time</label>
                                    <input value={dataCriacao} required type="text" onChange={(e) => setDataCriacao(e.target.value)} className='prop_up' style={{ width: "100%" }} />
                                </div>
                                <div className="inputField d-flex align-items-start flex-column py-3">
                                    <label className="labels">CEP</label>
                                    <input value={CEP} required type="text" onChange={(e) => setCEP(e.target.value)} className='prop_up' style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                        <div className="w-100 d-flex justify-content-center align-items-center">
                            <input type="submit" style={{
                                backgroundColor: "#54627B",
                                border: "none",
                                padding: '14px 38px',
                                borderRadius: "50px",
                                fontSize: 'medium',
                                fontWeight: 'bold',
                                color: '#EDF2F3',
                            }} value="Salvar" />
                        </div>
                    </form>
                </div>
            ) : null}

            {isModalCEP ? (
                <div class="popup-bg" /*id={"popup" + this.props.id}*/ >
                    <div class="escopo-popup" onSubmit={(e) => salvarTime(e)}>
                        <a id="close" onClick={(e) => { e.preventDefault(); setIsModalCEP(false) }} />
                        <div className="campos w-100 p-5">
                            <div style={{ width: '100%' }}>
                                <div className="inputField d-flex align-items-start flex-column py-3">
                                    <label className="labels">{dataCEP}</label>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}