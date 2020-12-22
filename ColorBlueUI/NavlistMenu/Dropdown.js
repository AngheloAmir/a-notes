import React from 'react';
import './style.css';
import '../Utils/ColorScheme.css';

import DropdownItem from './DropdownItem';

export default function Dropdown( {item} ) {
	return (
		<React.Fragment>
			{
				item.items !== undefined ? 
					<div id="dropdown" className="nav-dropdown">
						{
							item.items.map( navitem => {
								return <DropdownItem navitem={ navitem } />
							})
						}
		 		   </div>
				:
				''
			}
		</React.Fragment>
		
	);
}