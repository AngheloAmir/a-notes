/*
	this component handle when there is a page to be edit

*/

import React from 'react';
import './style.css';

import { contextProvider } from '../../../StateAPI/contextProvider';
import { setTextFieldRef } from '../../../StateAPI/Actions';

export default function PageEdit() {
	const { state, dispatch } = React.useContext( contextProvider );
	const ref = React.useRef();
	
	React.useEffect( () => {
		dispatch( setTextFieldRef( ref) );
		ref.current.value = state.shelf[ state.status.bookIndex].items[ state.status.pageIndex ].content;
	}, [] );
	
	return (
		<div id="page-edit">
			<textarea ref={ ref } />
		</div>
	);
}