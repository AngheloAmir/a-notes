/*
	Handle the option.
	
	*it display the dialog option, rename dialog and delete confirmation dialoga
*/

import React from 'react';

//StateAPI imports==================
import { contextProvider } from '../../StateAPI/contextProvider';
import { setShowOption, setShowDetails, setShowRename, setShowDelete, moveUp, moveDown } from '../../StateAPI/Actions';

import DialogBox from '../../ColorBlueUI/DialogBox';

export default function HandleOption() {
	const { state, dispatch } = React.useContext( contextProvider );
	const [show, setShow ] = React.useState( false );
	
	function handleRename( ) {
		dispatch( setShowRename(true)) 
	}
	
	function handleDelete() {
		if( state.status.isPageEdit )
			setShow( true );
		else
			dispatch( setShowDelete(true));
	}
	
	function handleMoveUp() {
		dispatch( moveUp(state.status.optionBookIndex, state.status.optionPageIndex) );
	}
	
	function handleMoveDown() {
		dispatch( moveDown(state.status.optionBookIndex, state.status.optionPageIndex) );
	}
	
	return (
		<React.Fragment>
			{
				state.status.isOptionOpen && /*check if the isOptionOpen true, which normally set when the user clicked the ... button*/
					<DialogBox
						type="option"
						title={ 
							state.status.optionPageIndex > -1 && state.status.optionPageIndex !== undefined ?
								state.shelf[ state.status.optionBookIndex].items[ state.status.optionPageIndex].name 
							:
								state.shelf[ state.status.optionBookIndex].name
						}
						onclose={ () => dispatch( setShowOption(state.status.optionBookIndex, state.status.optionPageIndex, false) ) }
						optionlist={
							[
								{ name: "Details", 			callback: () => dispatch( setShowDetails(true)) },
								{ name: "Move up",  		callback: handleMoveUp },
								{ name: "Move down",     callback: handleMoveDown },
								{ name: "Rename",      	callback: handleRename },
								{ name: "Delete", 			 callback: handleDelete }
							]
						} 
					/>
			}
			
			{
				show &&
					<DialogBox
						title="Oppppssss!"
						msg="Can't do such action when a page is being edited"
						onclose={ () => setShow(false) }
					/>
			}
			
		</React.Fragment>
	);
}