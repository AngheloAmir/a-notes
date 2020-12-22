/*
Create a basic sliding menu, ideal for responsive web app menu.

***Do note that, sliding menu will create its own fixed navbar

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
			<SlidingMenu menus={menus} onsearch={ keyword => alert("Search for: " + keyword) }//>
		</div>
	);
	
	**onsearch is optional
	
*/

import React from 'react';
import './SlidingMenu/style.css';
import './Utils/NavbarStyle.css';
import './Utils/ColorScheme.css';

import MenuIcon from './MenuIcon';
import SlidingMenuContainer from './SlidingMenu/SlidingMenuContainer';
import SearchBar from  './Utils/SearchBar'; 

export default function SlidingMenu( {menus, onsearch} ) {
	const [ show, setVisibility ] = React.useState(false);
	const [ isCross, setCross ] = React.useState(false);
	
	const handleMenuClick = () => {
		setCross( !isCross );
		setVisibility( !show );
	}
	
	const handleClose = () => {
		setVisibility( false );
		setCross( false );
	}
	
	return (
		<div id="menu">
			<div id="navbar" className="navbar-color">
				<div className="sliding-nav-container">
					<MenuIcon iscross={ isCross } callback={ handleMenuClick } />
					<div>
						<span className="navbar-title-color">
							{ menus.title }
						</span>
					</div>
					{
						onsearch ? <SearchBar onsearch={ onsearch } /> : <div> </div>
					}
				</div>
			</div>
			<SlidingMenuContainer menus={ menus} visibility={ show } closeCallback={ handleClose } />
		</div>
	);
}



