//used by RenderContainer to make the code shorter
import React from 'react';
import './style.css';

export default function P( {cn, text} ) {
	
	return (
		<p className={ cn }>
			{
				text.substring(1, text.length ) 
			}
		</p>
	);
}