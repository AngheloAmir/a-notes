/*
	Create a simple animated menu bar (hamburger icon) in
	the screen.
	
	callback is a function that will toggle upper component state

*/
import React from 'react';
import MenuIconContainer from './MenuIcon/MenuIconContainer';

export default function MenuIcon( {iscross, callback} ) {
	
	return (
		<React.Fragment>
			<MenuIconContainer iscross={ iscross } callback={ callback } />
		</React.Fragment>
	);
}