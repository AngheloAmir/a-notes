import React from 'react';
import './Arrow.css';

export default function Arrow( { headIndex, openIndex } ) {
	
	return (
		<React.Fragment>
			{
				headIndex === openIndex ?
					<span> - </span>
					:
					<span> + </span>
			}
		</React.Fragment>
	);

}