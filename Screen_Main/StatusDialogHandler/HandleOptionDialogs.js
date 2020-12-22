/*
	Handles when to what to show when the user:
		* choose details in the option menu
		* choose rename in the option menu
		* choose to delete a file in the option menu
		
	It also handles such event
*/

import React from 'react';

//StateAPI imports==================
import { contextProvider } from '../../StateAPI/contextProvider';
import { setOpenPage, renameBook, renamePage, deleteBook, deletePage,
			  setShowDetails, setShowRename, setShowDelete } from '../../StateAPI/Actions';

import DialogBox from '../../ColorBlueUI/DialogBox';

export default function HandleOptionDialogs() {
	const { state, dispatch } = React.useContext( contextProvider );
	
	function getName() {
		return state.status.optionPageIndex >= 0  ?
			state.shelf[ state.status.optionBookIndex ].items[ state.status.optionPageIndex].name 		:
			state.shelf[ state.status.optionBookIndex ].name;
	}
	
	function getCreated() {
		return state.status.optionPageIndex >= 0  ?
			state.shelf[ state.status.optionBookIndex ].items[ state.status.optionPageIndex].created 		:
			state.shelf[ state.status.optionBookIndex ].created;
	}
	
	function getModified() {
		return state.status.optionPageIndex >= 0  ?
			state.shelf[ state.status.optionBookIndex ].items[ state.status.optionPageIndex].modified 		:
			state.shelf[ state.status.optionBookIndex ].modified;
	}
	
	function getDetails() {
		return "Name: " + getName() + "\nCreated: " + getCreated() + "\nModified: " + getModified();
	}
	
	function handleRename( name ) {
		if( name !== undefined && name.length > 0 ) {
			if( state.status.optionPageIndex >= 0 )
				dispatch( renamePage( state.status.optionBookIndex, state.status.optionPageIndex, name));
			else
				dispatch( renameBook( state.status.optionBookIndex, name ));
		}
		dispatch( setShowRename( false ) );
	}
	
	function handleDelete() {
		if( state.status.optionPageIndex >= 0 )
			dispatch( deletePage( state.status.optionBookIndex, state.status.optionPageIndex ));
		else
			dispatch( deleteBook( state.status.optionBookIndex ));
		dispatch( setShowDelete( false ) );
		dispatch( setOpenPage(state.status.bookIndex, state.status.pageIndex, false) );
	}
	
	return (
		<React.Fragment>
			{
				state.status.isDetailShow ?
					<DialogBox
						title="Details"
						msg={ getDetails() }
						onclose={ () => dispatch(setShowDetails(false)) }
					/> 
				:
					''
			}
			
			{
				state.status.isRenameShow ?
					<DialogBox
						type="input"
						title="Rename"
						msg={ "Enter the new name for: " + getName() + "?"}
						value={ getName() }
						placeholder="name"
						onclose={ () => dispatch( setShowRename( false ) )  }
						onok={ handleRename }
					/>
					:
					''
			}
			
			{
				state.status.isDeleteShow ?
					<DialogBox
						type="confirm"
						title={ "Delete "  + getName() + "?" }
						msg={ "Confirm Deletion of:  "  + getName() + "?" }
						onclose={ () => dispatch(setShowDelete(false)) }
						onok={ handleDelete }
					/>
				:
					''
			}
		</React.Fragment>
	);
}