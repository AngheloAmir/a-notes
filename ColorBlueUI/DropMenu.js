/*
Created by Amir, Anghelo (2020)

		It is a navigational component that is based on a list that
	when clicked, will show additional drop down.
	This component prop object structure is similar to
	NavlistMenu and SlidingMenu but will additonal image property.
	
		Also the callback can accept upto 2 parameter of type int,
	this param is equal to index of the item that trigger the callback

DEMO USAGE:
export default function App() {
	function handleClick( index, childIndex ) {
		alert("You click at: " + index + ", " + childIndex );
	}
	
	const menus = {
		items: [
			{ name: "Item one", 	callback: handleClick },
			{ name: "Multi Item", image: "/image.png",
				items: [
					{ name: "Multi item 1", callback: handleClick, image: "/image.png" },
					{ name: "Multi item 2", callback: handleClick, image: "/image.png"},
					{ name: "Multi item 3", callback: handleClick, image: "/image.png"},
				]
			}
		]
	};
	
	return (
		<div>
			<DropMenu menus={menus} />
		</div>
	);
	
*/

import React from 'react';

import DropMenuContainer from './DropMenu/DropMenuContainer';

export default function DropMenu( {menus} ) {
	return (
		<div>
			<DropMenuContainer menus={ menus } />
		</div>
	);
}