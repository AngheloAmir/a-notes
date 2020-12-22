/*
	this component handle when there is a page to be displayed

*/

import React from 'react';
import './style.css';

import { contextProvider } from '../../../StateAPI/contextProvider';
import Renderer from '../../../ColorBlueFile/Renderer';

export default function PageView( {noTopWindow}) {
	const { state } = React.useContext( contextProvider );
	
	function render() {
		if( state.status.isPageOpen )
			return <Renderer /> ;
		else
			return "nothing is opened";
	}
	
	return (
		<div id="page-view">
			<div className="render-container">
				 { render() }
			</div>
		</div>
	);
}