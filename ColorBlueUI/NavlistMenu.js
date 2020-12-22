/*
Created by Amir, Anghelo (2020)

	It is a component that automatically display the nav items in inline
Optimize for used in top bar navigation menu with simple styling (see NavlistMenu/style.css to
configure the styling)

***Do note that, navlist menu will create its own fixed navbar

DEMO USAGE:
export default function App() {
	const menus = {
		title: "Menu",
		items: [
			{ name: "Item one", 	callback: () => alert("clicked") },
			{ name: "Multi Item", 
				items: [
					{ name: "Multi item 1", callback: () => alert("clicked 1") },
					{ name: "Multi item 2", callback: () => alert("clicked 2") },
					{ name: "Multi item 3", callback: () => alert("clicked 3") },
				]
			},
		{ name: "Item two", 	  callback: () => alert("clicked") },
		]
	};
	
	return (
		<div>
			<NavlistMenu menus={menus} onsearch={ keyword => alert("Search for: " + keyword) }/>
		</div>
	);
	
	**onsearch is optional
	
LIMITATION==============
	**do note the number of menus items that it may overflow causing bug.
	**the navbar has css atribute set to:
		display:  grid;
		grid-template-columns: 8rem 1fr 16rem;
	**which means that, the title text takes 8rem while search bar takes 12rem by default
	**see NavlistMenu/style.css to change it
	
*/

import React from 'react';
import './Utils/NavbarStyle.css';
import './Utils/ColorScheme.css';

import NavlistMenuContainer from './NavlistMenu/NavlistMenuContainer';
import SearchBar from  './Utils/SearchBar'; 

export default function NavlistMenu( {menus, onsearch} ) {
	return (
		<div id="menu">
			<div id="navbar" className="navbar-color">
				<div id="navbar-navlist-container">
					<div>
						<span className="navbar-title-color"> { menus.title } </span>
					</div>
					<NavlistMenuContainer menus={ menus } />
					{
						onsearch ? <SearchBar onsearch={ onsearch } /> : <div> </div>
					}
				</div>
			</div>
		</div>
	);
}

