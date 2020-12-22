import React from 'react';
import './style.css';

import { contextProvider } from '../../../StateAPI/contextProvider';
import { setQuizState } from '../../../StateAPI/Actions';
import Button from '../../../ColorBlueUI/Button';

export default function QuestionBtn( prop ) {
	const { dispatch } = React.useContext( contextProvider );
	
	function handleAns( ans ) {
		if( ans === prop.state.quizdata[ prop.state.current ].answer )
			prop.setstate( {
					...prop.state, 
					current: prop.state.current + 1,
					quizscore: prop.state.quizscore + 1
			});
		else
			prop.setstate( {
					...prop.state, 
					current: prop.state.current + 1,
			});
	}
	
	return (
		<div className="btn">
			{
				prop.state.quizdata[ prop.state.current ] !== undefined ?
					prop.state.quizdata[ prop.state.current ].choices.map(  value => {
						return <Button name={value} callback={ () => handleAns(value) } />
					})
				:
				<Button name="Done" callback={ () => dispatch( setQuizState(false) ) }/>
			}
		</div>
	);
}