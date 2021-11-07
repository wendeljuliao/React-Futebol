import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'

import axios from 'axios'

export default function CardTime(props) {


	function apagarTime() {
		axios.delete(`http://localhost:3001/times/${props.id}`)
			.then((res) => console.log(res.data))

		props.setIsDelete(true)
	}

	return (

		<Card style={{display: 'flex'}}>
			<Card.Body>
				<Card.Title>{props.nome_time}</Card.Title>
				<Card.Text>
					{props.dataCriacao}
				</Card.Text>
				<Button variant="danger" onClick={() => apagarTime()}>Apagar Time</Button>
			</Card.Body>
		</Card>

	)
}

