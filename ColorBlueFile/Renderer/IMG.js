//used by RenderContainer to make the code shorter
import React from 'react';
import './style.css';

export default function IMG( {src} ) {
	
	return (
		<img className="image" src={ src.substring(1, src.length ) } alt={ "image not found at " + src.substring(1, src.length )  } />
	);
}