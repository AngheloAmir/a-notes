/*
	Displayed when something goes wrong during the generation of a quiz
*/

import React from 'react';
import './style.css';

import { contextProvider } from '../../StateAPI/contextProvider';
import { setQuizState } from '../../StateAPI/Actions';

export default function Error( prop ) {
	const { dispatch } = React.useContext( contextProvider );
	
	return (
		<div id="quiz-error">
			Error occured, internal reason: { prop.text }
			<br />
			<button onClick={ e => dispatch( setQuizState(false) ) }>
				OK
			</button>
		</div>
	);
}