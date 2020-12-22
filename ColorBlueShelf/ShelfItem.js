import React from 'react';
import './style.css';

import ItemHeading from './ItemHeading';
import MoreItems from './MoreItems';
import OptionButton from './OptionButton';

export default function ShelfItem( prop ) {
	const handleClick = e => {
		e.stopPropagation();
		if( prop.item.callback )
			prop.prop.bookOpenCallback( prop.headIndex );
		else if( prop.bookopen === prop.headIndex )
			prop.setopen( -1 );
		else
			prop.setopen( prop.headIndex );
	}
	
	return (
		<div id="shelf-item-container" onClick={ handleClick }>
			<div id="shelf-item-heading">
				<ItemHeading item={ prop.item } prop={ prop } />
				{ !prop.item.nooption ? <OptionButton prop={ prop } /> : '' }
			</div>
			 <MoreItems show={ prop.bookopen === prop.headIndex } prop={ prop } /> 
		</div>
	);
}

/*

*/