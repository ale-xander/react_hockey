import React from 'react';
import './card-list.styles.css';

export const CardList = props => (
	
	<div className='card-list'>	
 		{
        	props.players.map(player => (
            <h1 key={player.id}> {player.name} </h1>))
        }
	</div>
)