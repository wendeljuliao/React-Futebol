import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'

export default function CardTime(props) {
	return (
        <div class="new_margin">
		<Card>
			<Card.Body>
				<Card.Title>{props.nome_time}</Card.Title>
				<Card.Text>
					{props.descricao}
                </Card.Text>
				<Button variant="danger">Apagar Time</Button>
			</Card.Body>
		</Card>
        </div>
		)
    }

