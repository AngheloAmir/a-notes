import React from 'react';
import './style.css';

import NavItemName from './NavItemName';
import Dropdown from './Dropdown';

export default function NavItem( {item} ) {
	return (
		<div id="navitems">
		 	<NavItemName item={ item } />
			<div id="dummy"></div>
			<Dropdown item={ item } />
		</div>
	);
}