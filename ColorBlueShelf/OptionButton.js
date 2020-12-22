import React from 'react';
import './style.css';
import './Utils/ColorScheme.css';

export default function OptionButton( {prop, childIndex } ) {
	const handleClick = e => {
		e.stopPropagation();
		prop.prop.optionOpenCallback( prop.headIndex, childIndex );
	}
	
	return (
		<div id="option-btn" className="nav-dropdown-item" onClick={ handleClick } >
			...
		</div>
	);
}