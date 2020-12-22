import React from 'react';
import './style.css';
import Item from './Item';

export default function Items( {item, headIndex, show} ) {
	const ref = React.useRef();
	
	function getSize() {
		if( show ) return { height: ref.current.scrollHeight + "px" }
		return { height: "0" }
	}
	
	return (
		<div id="more-item-container" ref={ref} style={ getSize() } >
		{
			item.items.map( (obj, childIndex) => {
					return <Item item={ obj } headIndex={ headIndex } childIndex={ childIndex } />
			})
		}
		</div>
	);
}
