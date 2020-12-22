import React from 'react';
import './style.css';
import '../Utils/ColorScheme.css';

export default function MenuIconContainer( {iscross, callback} ) {
	const handleClick = e => {
		callback();
	}
	
	return (
		<div id="menuicon1" className={  iscross ? "change" : '' } onClick={ handleClick } >
			<div className="bar1 hamburger-icon"></div>
			<div className="bar2 hamburger-icon"></div>
			<div className="bar3 hamburger-icon"></div>
		</div>
	);
}