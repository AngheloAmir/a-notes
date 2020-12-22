import React from 'react';
import './style.css';

export default function CheckboxContainer( {check, callback} ) {
	const [ischeck, setcheck] = React.useState( check );
	const [iseffect, setEffect] = React.useState( false );
	
	const handleChange = e => {
		e.stopPropagation();
		setEffect( true );
		setTimeout( () => {
				setEffect( false );
				setcheck( !ischeck );
				callback( !ischeck );
			}, 250 );
	}
	
	return (
		<div id="bluelight-checkbox" style={ iseffect ? { position: "relative" } : {} } >
			<input type="checkbox" checked={ ischeck } className="blcheckbox" onChange={ handleChange }/>
			{
				iseffect ? <div className="ripple-effect-small"></div> : ''
			}
		</div>
	);
}