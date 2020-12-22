import React from 'react';
import './style.css';

import ChildItemHeading from './ChildItemHeading';
import OptionButton from './OptionButton';

export default function Item( {prop, item, childIndex}  ) {
	const handleclick = e => {
		e.stopPropagation();
		//due to props is passed along, it becomes prop.prop
		prop.prop.pageOpenCallback( prop.headIndex, childIndex );
	}
	
	
	return (
		<div id="shelf-child-item-container" onClick={ handleclick }>
			<div id="shelf-child-item-heading">
				<ChildItemHeading item={ item } prop={ prop} />
				{ 
					!item.nooption ? 
						<OptionButton
							prop={ prop }
							childIndex={ childIndex }
						/>
						: ''
				}
			</div>
		</div>
	
	);
}
