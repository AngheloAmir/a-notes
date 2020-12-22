import React from 'react';
import './style.css';

import { contextProvider } from '../../../StateAPI/contextProvider';

export default function Message() {
	const { state } = React.useContext( contextProvider );
	
	return (
		<p>
			Press the button to start quiz for " 
			<b>
			{ state.shelf[ state.status.bookIndex].items[ state.status.pageIndex].name }"
			</b>
		</p>
	);
}