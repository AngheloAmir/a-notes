import React from 'react';
import './style.css';

//the param: prop is object came contains prop from <ColorBlueShelf .... />
export default function Image( {item, prop} ) {
	function returnAnImage() {
		if( prop.prop.imageList && item.imageAt !== undefined )
			return <img src={ prop.prop.imageList[ item.imageAt] } alt="?"/>
		else if( item.image )
			return <img src={ item.image } alt="?" />
		else
			return "?";
	}
	
	return (
		<React.Fragment>
			 { returnAnImage() }
		</React.Fragment>
	);
}