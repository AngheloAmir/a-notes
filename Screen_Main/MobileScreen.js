
import React from 'react';
import './style.css';

import {HashRouter, Route, Switch } from 'react-router-dom';
import HomeScreenView from './MobileContentView/HomeScreenView';
import PageScreenView from './MobileContentView/PageScreenView';

export default function MobileScreen( {open, option} ) {
	return (
		<div id="mobile-screen">
			<HashRouter >
					<Switch>
						<Route exact path='/view' component={ PageScreenView } />
						<Route component={ HomeScreenView } />
					</Switch>
				</HashRouter>
		</div>
	);
}