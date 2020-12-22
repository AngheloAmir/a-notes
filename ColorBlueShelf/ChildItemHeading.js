import React from 'react';
import './style.css';

import Image from './Image';

export default function ChildItemHeading( {item, prop} ) {
	return (
		<div id="shelf-child-heading" className="nav-dropdown-item" >
			<Image item={ item } prop={ prop } />
			<div className="name"> 
				<div> { item.name } </div>
			</div>
		</div>
	);
}