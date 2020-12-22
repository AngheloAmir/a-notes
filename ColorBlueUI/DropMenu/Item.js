import React from 'react';
import './style.css';
import '../Utils/ColorScheme.css';

export default function Item( {item, headIndex, childIndex} ) {
	const handleclick = e => {
		e.stopPropagation();
		item.callback(headIndex, childIndex);
	}
	
	return (
		<div id="child-item-container" className="nav-dropdown-item" onClick={ handleclick }>
			{
				item.image !== undefined ?
					<img src={ item.image } alt="child item" /> : ''
			}
			<div className="name"> 
				<div> { item.name } </div>
			</div>
		</div>
	);
}