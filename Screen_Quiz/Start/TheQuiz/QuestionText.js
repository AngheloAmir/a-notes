import React from 'react';
import './style.css';

import QuizEnd from './QuizEnd';

export default function QuestionText( prop ) {
	return (
		<div className="question">
			{
				prop.state.quizdata[ prop.state.current ] !== undefined ?
					prop.state.quizdata[ prop.state.current ].question
				:
				<QuizEnd state={ prop.state } />
			}
		</div>
	);
}