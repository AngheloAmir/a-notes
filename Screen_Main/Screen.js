/*
	Screen.js is the parent component of:
		* DesktopScreen
		* MobileScreen
	
	It decides what will be display in the screen based of the user screen size.
	
	* It also attach dialog components, like the custom renaming dialogs etc.
	ColorBlueUI/Dialogs requires a handler (something that display it or not
	based on certain state) since does not automatically display or undisplay itself
*/

import React from 'react';
import './style.css';

import useWindowDimension from '../Lib/WindowDimension';

import DesktopScreen from './DesktopScreen';
import MobileScreen from './MobileScreen'
import HandleAdd from './StatusDialogHandler/HandleAdd';
import HandleOption from './StatusDialogHandler/HandleOption';
import HandleOptionDialogs from './StatusDialogHandler/HandleOptionDialogs';

export default function Screen() {
	const { width } = useWindowDimension();
	
	return (
		<div id="app-screen">
			{
				width >= 767 ?
					<DesktopScreen /> : <MobileScreen />
			}
			<HandleAdd />
			<HandleOption />
			<HandleOptionDialogs />
		</div>
	);
}