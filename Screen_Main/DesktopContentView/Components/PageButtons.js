import React from 'react';
import './style.css';

import { contextProvider } from '../../../StateAPI/contextProvider';
import { setEditPage, updateContentOfPage } from '../../../StateAPI/Actions';
import Button from '../../../ColorBlueUI/Button';

export default function PageButtons() {
	const { state, dispatch } = React.useContext( contextProvider );
	
	function handleCancel() {
		//the code below close the edit mode
		//however to preserve the current open page, it did not chande the bookIndex and pageIndex
		//since these are used in viewing the content of the page
		dispatch( setEditPage( state.status.bookIndex, state.status.pageIndex, false ) );
	}
	
	function handleContentUpdate() {
		dispatch(
			updateContentOfPage( state.status.bookIndex, state.status.pageIndex, state.status.textfieldref.current.value)
		);
		dispatch( setEditPage( state.status.bookIndex, state.status.pageIndex, false ) );
	}
	
	function handleEdit() {
		if( state.shelf[state.status.bookIndex].items[state.status.pageIndex] !== undefined )
			dispatch( setEditPage(state.status.bookIndex, state.status.pageIndex, true));
	}
	
	return (
		<div id="page-button">
			{
				state.status.isPageEdit ?
					<React.Fragment>
						<Button name="Confirm" callback={ handleContentUpdate }/>
						<Button name="Cancel"  callback={ handleCancel } />
					</React.Fragment>
					:
					<Button name="Edit"
						callback={ handleEdit }
					/>
			}
		</div>
	);
}