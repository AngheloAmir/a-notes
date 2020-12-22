import React from 'react';
import './style.css';

export default function ButtonContainer( {name, callback} ) {
	const [iseffect, setEffect] = React.useState( false );
	
	const handleClick = e => {
		e.stopPropagation();
		setEffect( true );
		setTimeout( () => {
				setEffect( false );
				callback();
			}, 100 );
	}
	
	return (
		<button id="bluelight-btn" style={ iseffect ? { position: "relative" } : {} } onClick={ handleClick } >
			{
				name
			}
			{
				iseffect ? <div className="ripple-effect"></div> : ''
			}
		</button>
	);
}