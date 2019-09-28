import React from 'react';
import './card.styles.css'

export const Card = props =>(
	<div className='card-container'>
		<img alt='player' src={props.player.picture} />
		<h2> {props.player.name} </h2>
		<p> Position: {props.player.position}</p>
		<p> {props.player.birthplace}</p>
	</div>
)