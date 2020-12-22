import React from 'react';
import './style.css';

export default function QuizEnd( prop ) {
	return (
		<React.Fragment>
			Scored: { prop.state.quizscore } over { prop.state.quizdata.length }
			<br />
			Percent: { Math.floor((prop.state.quizscore/prop.state.quizdata.length)*100) }%
		</React.Fragment>
	);
}