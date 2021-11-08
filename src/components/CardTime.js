import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'

import axios from 'axios'

import api from '../services/index';

export default function CardTime(props) {


	function apagarTime() {
		axios.delete(`http://localhost:3001/times/${props.id}`)
			.then((res) => console.log(res.data))

		props.setIsDelete(true)
	}

	function searchDataCEP() {
		if (props.CEP.length == 8) {
			api.get(props.CEP)
				.then((res) => {
					console.log(JSON.stringify(res.data.return))
					props.setDataCEP(JSON.stringify(res.data.return))
					props.setIsModalCEP(true)
				})
		}
	}


	return (

		<Card style={{ display: 'flex' }}>
			<Card.Body>
				<Card.Title>{props.nome_time}</Card.Title>
				<Card.Text>
					{props.dataCriacao}
				</Card.Text>
				<Button variant="danger" onClick={() => apagarTime()}>Apagar Time</Button>
			</Card.Body>
			<img className="search" src='/search.png' alt="" onClick={() => searchDataCEP()} />
		</Card>

	)
}

