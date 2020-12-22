/*
	HandleAdd is component designed to handle
	add book input and add page event
	
	and when the user clicked the option button
*/

import React from 'react';

//StateAPI imports==================
import { contextProvider } from '../../StateAPI/contextProvider';
import { addBook, addPage, setShowAddBook, setShowAddPage } from '../../StateAPI/Actions';

import DialogBox from '../../ColorBlueUI/DialogBox';

export default function HandleAdd() {
	const { state, dispatch } = React.useContext( contextProvider );
	
	function handleAddBook( name ) {
		if( name.length > 0 ) 
			dispatch( addBook(name) );
		dispatch( setShowAddBook( false ) );
	}
	
	function handleAddPage( name ) {
		if( name.length > 0 )
			dispatch( addPage( state.status.bookIndex, name) );
		dispatch( setShowAddPage(state.status.bookIndex, false) );
	}
	
	return (
		<React.Fragment>
			{
				state.status.isAddBookOpen ?
					<DialogBox
						type="input"
						title="Add Book"
						msg="Enter the new book name"
						value=""
						placeholder="book name"
						onclose={ () => dispatch( setShowAddBook( false ) )  }
						onok={ handleAddBook }
					/>
					:
					''
			}
			
			{
				state.status.isAddPageOpen ?
					<DialogBox
						type="input"
						title="Add Page"
						msg="Enter the new page name"
						value=""
						placeholder="page name"
						onclose={ () => dispatch( setShowAddPage(state.status.bookIndex, false) ) }
						onok={ handleAddPage }
					/>
					:
					''
			}
		</React.Fragment>
	);
}