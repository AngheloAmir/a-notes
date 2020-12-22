import React from 'react';
import './style.css';
import '../Utils/ColorScheme.css';

export default function NavItemName( {item} ) {
	return (
		<React.Fragment>
		{
			item.items !== undefined ? 
				<div id="navitems-name" className="navbar-item-color"> { item.name } </div>
			:
				<div id="navitems-name" className="navbar-item-color" onClick={ e=> item.callback() } > { item.name } </div>
		}
		</React.Fragment>
	);
}