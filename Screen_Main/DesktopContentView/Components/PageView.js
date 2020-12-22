/*
	this component handle when there is a page to be displayed

*/

import React from 'react';
import './style.css';

import { contextProvider } from '../../../StateAPI/contextProvider';
import Renderer from '../../../ColorBlueFile/Renderer';

export default function PageView() {
	const { state } = React.useContext( contextProvider );
	
	function render() {
		//alert( JSON.stringify(state.status) );
		//alert( JSON.stringify(state.shelf) );
		try {
			if( state.status.isPageOpen )
				return <Renderer /> ;
			else
				return "nothing is opened";
		}
		catch( err ) {
			alert("error!");
		}
	}
	
	return (
		<div id="page-view">
			<div className="screen-heading"> Page </div>
			<div className="render-container">
				 { render() }
			</div>
		</div>
	);
}