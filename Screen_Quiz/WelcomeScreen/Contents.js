/*
	Show the welcome screen content
*/

import React from 'react';
import './style.css';

import Message from './Contents/Message';
import Settings from './Contents/Settings';
import ContentButtons from './Contents/ContentButtons';

export default function Contents( prop ) {
	
	return (
		<div id="welcome-screen-content">
			 <Message />
			<Settings state={ prop.state } setstate={ prop.setstate } />
			<ContentButtons state={ prop.state } setstate={ prop.setstate } />
		</div>
	);
}