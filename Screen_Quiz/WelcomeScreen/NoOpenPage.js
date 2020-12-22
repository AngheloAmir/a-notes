/*COLORBLUEDOC
>DESCRIPTION
	A message that is show to the user if no page is opened
	
>APPEAR-WHEN
	No page is been opened but the user is starting the quiz generation

>PROP
	*state :object
		the state obtained from the parent component
	*setstate :function(state)
		the function that set the state from the parent compoent
		
>TYPE
	Actual element
	
>STATE-DEPENDENCY
	*setQuizState( bool ) :json
		A function that set whether is quiz screen is shown or not

>PARENT-COMPONENT
	WelcomeScreen.js

>PARENT-ELEMENT
	<div id="quiz-welcome-screen">

>CHANGE-LOG
	v1 release Oct, 2020
*/

import React from 'react';
import './style.css';

import { contextProvider } from '../../StateAPI/contextProvider';
import { setQuizState } from '../../StateAPI/Actions';

import Button from '../../ColorBlueUI/Button';

export default function NoOpenPage() {
	const { dispatch } = React.useContext( contextProvider );

	return (
		<div id="quiz-message">
			<p>
				Please open a page first to start the quiz
			</p>
			<div>
				<Button name="OK" callback={ () => dispatch( setQuizState(false) ) } />
			</div>
		</div>
	);
}