import React from 'react';
import './style.css';

import QuestionText from './QuestionText';
import QuestionBtn from './QuestionBtn';

export default function TheQuiz( prop ) {
	return (
		<React.Fragment>
			<QuestionText state={ prop.state } setstate={ prop.setstate } />
			<QuestionBtn state={ prop.state } setstate={ prop.setstate } />
		</React.Fragment>
	);
}