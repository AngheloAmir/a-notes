/*
	Show the buttons during the welcome screen phase of the quiz
	and also handle their respective effects
*/

import React from 'react';
import './style.css';

import { contextProvider } from '../../../StateAPI/contextProvider';
import { setQuizState } from '../../../StateAPI/Actions';

import Button from '../../../ColorBlueUI/Button';

export default function ContentButtons( prop ) {
	const { dispatch }  = React.useContext( contextProvider );
	
	function handleStart() {
		prop.setstate( {...prop.state, isQuizStarted: true} );
	}
	
	function handleBack() {
		dispatch( setQuizState(false) );
	}
	
	return (
		<div id="quiz-welcome-btn">
				<Button name="Back" callback={ handleBack } />
				<Button name="Start" callback={ handleStart } />
			</div>
	);
}