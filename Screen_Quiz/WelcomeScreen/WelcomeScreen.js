/*COLORBLUEDOC
>DESCRIPTION
	The container of the welcome screen in the quiz. This screen show off the settings available to 
	the user before the actuall quiz is generated

>APPEAR-WHEN
	Initial screen when the user press 

>FUNCTIONALITY
	Show the initial quiz set up screen. If page does not exist, show NoOpenPage.js component
	
>PROP
	*state :object
		the state obtained from the parent component
	*setstate :function(state)
		the function that set the state from the parent compoent
		
>TYPE
	Parent element
	
>STATE-DEPENDENCY
	*state.status.pageIndex :number
	*state.status.bookIndex :number
		Determines if the state is a negative value or not. If less than 0 therefore quiz cannot be start and
		will instead show an error message since no page is been opened which is the requirement before the
		quiz is generated and started
	
>PARENT-COMPONENT
	QuizScreen.js

>PARENT-ELEMENT
	<div id="quiz-screen">
	
>CHANGE-LOG
	v1 release Oct, 2020
	
>NOTES
	this component pass the prop to its child element.
*/

import React from 'react';
import './style.css';

import { contextProvider } from '../../StateAPI/contextProvider';

import Contents from './Contents';
import NoOpenPage from './NoOpenPage';

export default function WelcomeScreen( prop ) {
	const { state } = React.useContext( contextProvider );

	function whichShow() {
		//check if something is open
		if( state.status.pageIndex > -1 ) {
			//check if isn't the add page (the plus sign)
			if( state.status.pageIndex === ( state.shelf[ state.status.bookIndex].items.length -1 ) )
				return <NoOpenPage />
				
			//check if isn't undefined
			else if( !state.shelf[ state.status.bookIndex].items[ state.status.pageIndex] )
				return <NoOpenPage />
			
			//all test pass, it is existing
			else
				return <Contents state={ prop.state } setstate={ prop.setstate } />
		}
		else
			return <NoOpenPage />
	}

	return (
		<div id="quiz-welcome-screen">
			{
				 whichShow()
			}
		</div>
	);
}