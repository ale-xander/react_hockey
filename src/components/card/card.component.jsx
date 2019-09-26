import React from 'react';
import './card.styles.css'

export const Card = props =>(
	<div className='card-container'>
		<img alt='player' src={'http://robohash.org/${props.player.id}?set=set1&size=180x180'} />
		<h2> {props.player.name} </h2>
		<p> ID: {props.player.id}</p>
	</div>
)