import React from 'react';
import './style.css';

export default function Background( {onclose} ) {
	
	return (
		<div id="dialog-box-background" onClick={ e => onclose()} >
		</div>
	);
}