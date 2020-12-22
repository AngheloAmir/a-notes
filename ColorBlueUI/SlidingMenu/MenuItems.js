import React from 'react';
import './style.css';

import Item from './Item';

export default function MenuItems( {menus, closeCallback} ) {
	return (
		<React.Fragment>
			{
				menus.items.map( item => {
					return <Item item={item} closeCallback={closeCallback}/>
				})
			}
		</React.Fragment>
	);
}