/*COLORBLUEDOC
>DESCRIPTION
	Display the quiz screen to the user. However, it display
	quiz initial screen (called WelcomeScree.js) if the user just started the search
	or actual quiz (called Start.js)
	
>APPEAR-WHEN
	The user choose menu > start/end quiz which depends if the quiz is already show or not
	
>PROP
	Does not accept prop

>TYPE
	Main Parent element
	
>STATE-DEPENDENCY
	None but less reusable

>PARENT-COMPONENT
	App.js
	
>PARENT-ELEMENT
	<div id="App">
	
>CHANGE-LOG
	v1 release Oct, 2020
*/

import React from 'react';
import './style.css';

import Start from './Start/Start';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';

const defaultState = {
	isQuizStarted: false,
	isIncludeOrder: false,
	isIncludeBelong: true,
	quizdata: [],
	quizscore: 0,
	current: 0,
};

export default function QuizScreen() {
	const [quizstate, setstate] = React.useState( defaultState );
	
	return (
		<div id="quiz-screen">
			{
				quizstate.isQuizStarted ?
					<Start state={ quizstate } setstate={ setstate } />
					:
					<WelcomeScreen state={ quizstate } setstate={ setstate } />
			}
		</div>
	);
}