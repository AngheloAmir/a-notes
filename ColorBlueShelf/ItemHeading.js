import React from 'react';
import './style.css';
import './Utils/ColorScheme.css';

import Image from './Image';

export default function ItemHeading( {item, prop} ) {
	return (
		<div id="shelf-item-heading-container" className="nav-dropdown-item">
			<Image item={ item } prop={ prop } />
			<div className="name"> 
				<div> { item.name } </div>
			</div>
		</div>
	);
}