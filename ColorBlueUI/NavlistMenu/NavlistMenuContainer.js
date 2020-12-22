import React from 'react';
import './style.css';

import NavItem from './NavItem';

export default function NavlistMenuContainer( {menus} ) {
	return (
		<div id="navlistcontainer">
		 	{
				menus.items.map( item => {
					return <NavItem item={ item } />
				})
			}
		</div>
	);
}

