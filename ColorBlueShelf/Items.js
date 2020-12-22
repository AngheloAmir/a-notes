import React from 'react';
import './style.css';

import Item from './Item';

export default function Items( {show, prop} ) {
	const ref = React.useRef();
	
	React.useEffect( () => {
		if( show ) {
			ref.current.style.height = 'inherit';
			ref.current.style.height = ref.current.scrollHeight + "px";
		}
		else
			ref.current.style.height = 0;
	}, [prop.item.items]);
	
	//transition: all .2s ease-out;
	
	function getSize() {
		if( show )
			return { 
				height: ref.current.scrollHeight + "px",
				transitionDuration: (prop.item.items.length/10) + "s"
			}
		return {
				height: "0",
				transitionDuration: "0.1s"
			}
	}
	
	return (
		<div id="shelf-more-item-container" ref={ref} style={ getSize() } >
		{
			prop.item.items.map( (obj, childIndex) => {
					return <Item prop={ prop } item={ obj } childIndex={ childIndex } />
			})
		}
		</div>
	);
}


