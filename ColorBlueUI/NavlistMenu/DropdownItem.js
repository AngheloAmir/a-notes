import React from 'react';
import './style.css';

export default function DropdownItem( {navitem} ) {
	return (
		<div id="dropdown-item" className="nav-dropdown-item" onClick={ e => navitem.callback()} >
		 	{
				navitem.name
			}
		</div>
	);
}