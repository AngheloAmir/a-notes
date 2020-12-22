import React from 'react';
import './style.css';

import MoreItems from './MoreItems';
import Arrow from './Arrow';

export default function DropMenuItem( {item, headIndex, openIndex, setOpenIndex} ) {
	const handleClick = e => {
		e.stopPropagation();
		if( item.items === undefined )
			item.callback( headIndex );
		else if( headIndex === openIndex )
			setOpenIndex( -1 );
		else
			setOpenIndex( headIndex );
	}
	
	return (
		<div id="dropdown-item-container" onClick={ handleClick }>
			<div id="dropmenu-item" className="nav-dropdown-item">
				{
					item.image !== undefined ?
						<img src={ item.image } alt="list item" />
						:
						<Arrow headIndex={ headIndex } openIndex={ openIndex } />
				}
				<div className="name"> 
					<div> { item.name } </div>
				</div>
			</div>
			 <MoreItems
				item={ item }
				headIndex={ headIndex }
				show={ openIndex === headIndex ? true : false }
			/> 
		</div>
	);
}
