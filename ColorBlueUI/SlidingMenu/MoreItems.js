import React from 'react';
import './style.css';
import '../Utils/ColorScheme.css';

export default function MoreItems( {items, closeCallback, hide} ) {
	function handleItemClick( e, callback) {
		e.stopPropagation();
		callback();
		closeCallback();
	}
	
	return (
		<div id="more-items" className="nav-dropdown border-color" >
			{
				items.map( item => {
					return <p className="nav-dropdown-item"
						onClick={ e => handleItemClick(e, item.callback)}> { item.name} </p>
				})
			}
		</div>
	);
}