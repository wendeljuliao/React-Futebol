import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'

import axios from 'axios'

import api from '../services/index';

export default function CardTime(props) {
	const [time, setTime] = useState(props.time)
	const [dataCriacao, setDataCriacao] = useState(props.dataCriacao)
	const [CEP, setCEP] = useState(props.CEP)

	const [isEdit, setIsEdit] = useState(false)

	function apagarTime() {
		axios.delete(`http://localhost:3001/times/${props.id}`)
			.then((res) => console.log(res.data))

		props.setIsDelete(true)
	}

	function searchDataCEP() {
		if (CEP.length == 8) {
			api.get(CEP)
				.then((res) => {
					console.log(JSON.stringify(res.data.return))
					props.setDataCEP(JSON.stringify(res.data.return))
					props.setIsModalCEP(true)
				})
		}
	}

	function editarTime(e) {
		e.preventDefault()
		const data = { nome: time, dataCriacao, CEP }

		axios.put(`http://localhost:3001/times/${props.id}`, data)
			.then((res) => console.log(res.data))

		setIsEdit(false)
	}


	return (

		<Card style={{ display: 'flex' }}>
			<Card.Body onClick={() => setIsEdit(true)}>
				<Card.Title>{time}</Card.Title>
				<Card.Text>
					{dataCriacao}
				</Card.Text>
			</Card.Body>
			<Button variant="danger" onClick={() => apagarTime()}>Apagar Time</Button>
			<img className="search" src='/search.png' alt="" onClick={() => searchDataCEP()} />

			{isEdit ? (
				<div class="popup-bg" /*id={"popup" + this.props.id}*/ >
					<form class="escopo-popup" onSubmit={(e) => editarTime(e)}>
						<a id="close" onClick={(e) => {
							e.preventDefault();
							setIsEdit(false)
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
		</Card>

	)
}

