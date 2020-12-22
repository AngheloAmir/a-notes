import React from 'react';
import './style.css';

import Items from './Items';

export default function MoreItems( {item, headIndex, show} ) {
	return (
		<React.Fragment>
			{
				item.items !== undefined ?
					<Items item={ item } headIndex={ headIndex } show={ show } />
				:
					''
			}
		</React.Fragment>
	);
}
