import React from 'react';
import './style.css';

import DropMenuItem from './DropMenuItem';

export default function DropMenuContainer( {menus} ) {
	const [openIndex, setOpenedIndex] = React.useState( -1 );
	
	function handleOpen( index ) {
		setOpenedIndex( index );
	}
	
	return (
		<div id="dropmenu">
			{
				menus.items.map( (item, headIndex) => {
					return (
						<DropMenuItem
							headIndex={headIndex}
							item={ item }
							openIndex={ openIndex }
							setOpenIndex={ handleOpen } />
						)
				})
			}
		</div>
	);
}
