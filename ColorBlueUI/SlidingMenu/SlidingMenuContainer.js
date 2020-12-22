/*
	SlidingMenuContainer is an element that shows the element that "slides" in the screen
*/

import React from 'react';
import './style.css';
import '../Utils/ColorScheme.css';

import MenuItems from './MenuItems';

export default function SlidingMenuContainer( {menus, visibility, closeCallback} ) {
	
	return (
		<div id="container"
			className={ visibility ? "show" : "hidden" }
			onClick={ e => { e.stopPropagation(); closeCallback()} }> 
			
			<div id="background"> </div>
			
			<div id="sliding-menu-container"
					className={ visibility ? "show nav-dropdown" : "hidden" }
					onClick={ e => { e.stopPropagation(); closeCallback()} }>
				<MenuItems menus={menus} closeCallback={closeCallback} />
			</div>
		</div>
		
	);
}