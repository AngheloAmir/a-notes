import React from 'react';
import './style.css';

import Items from './Items';

export default function MoreItems( {show, prop} ) {
	return (
		<React.Fragment>
			{
				prop.item.items !== undefined ?
					<Items show={show} prop={ prop }/>
				:
					''
			}
		</React.Fragment>
	);
}