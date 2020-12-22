/*
	Component that generate the quiz using ColorBlueFile quiz generator
	and once done display the question or display an error message
	if an errors occurs
*/

import React from 'react';
import './style.css';

import { contextProvider } from '../../StateAPI/contextProvider';
import { generateQuiz } from '../../ColorBlueFile/Quiz';

import TheQuiz from './TheQuiz/TheQuiz';
import Error from './Error';

export default function Start( prop ) {
	const { state } = React.useContext( contextProvider );
	const ref = React.useRef(); 

	let ignore = [];
	if( !prop.state.isIncludeOrder ) ignore.push("order");
	if( !prop.state.isIncludeBelong ) ignore.push("unorder");
	const file = state.shelf[ state.status.bookIndex ].items[ state.status.pageIndex ].content;
	
	React.useEffect( () => {
		let ua = navigator.userAgent;
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
			//used to adjust the screen vh in android Chorme, also known as 100vh bug
			if(/Chrome/i.test(ua)) 
				ref.current.style.height = ( ref.current.scrollHeight - 56 ) + "px";
		}
		try {
			prop.setstate( { ...prop.state, quizdata: generateQuiz( file, ignore )} );
		}
		catch( err) {
			return (
				<Error text={ err } />
			);
		}
	}, []);
	
	function whichScreen() {
		if( prop.state.current > prop.state.quizdata.length )
			return "done"
		if( prop.state.quizdata.length > 0 )
			return <TheQuiz state={ prop.state } setstate={ prop.setstate } />
		else
			return "?"
	}
	
	return (
		<div id="quiz-start" ref={ ref } >
			{
				whichScreen()
			}
		</div>
	);
}