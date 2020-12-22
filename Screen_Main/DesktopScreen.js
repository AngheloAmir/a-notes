/*
	DesktopScreen is a component that tells what will be displayed in 
	user screen (appears below the nav bar).
*/

import React from 'react';
import './style.css';

import ShelfContainer from './DesktopContentView/ShelfContainer';
import PageContainer from './DesktopContentView/PageContainer';

export default function DesktopScreen() {
	return (
		<div id="desktop-screen">
			<div className="shelf">
				<ShelfContainer />
			</div>
			<div className="pageview">
				<PageContainer />
			</div>
		</div>
	);
}