import React from 'react';
import './style.css';


//StateAPI imports==================
import { contextProvider } from '../../StateAPI/contextProvider';
import { setOpenPage, setEditPage, setShowAddBook, setShowAddPage, setShowOption} from '../../StateAPI/Actions';

import ColorBlueShelf from '../../ColorBlueShelf/ColorBlueShelf';
import { Assets } from '../../ImageAssets/Assets';

export default function MainScreenView( ) {
	const { state, dispatch } = React.useContext( contextProvider );
	
	function handlePageOpen(bookindex, pageindex) {
		dispatch( setEditPage( -1, -1, false ) );
		if( (state.shelf[bookindex].items.length - 1) === pageindex )
			dispatch( setShowAddPage(bookindex, true ));
		else {
			window.location.href = "#/view";
			dispatch( setOpenPage(bookindex, pageindex, true ));
		}
	}
	
	function handleOptionOpen(bookindex, pageindex) {
		pageindex = pageindex === undefined ? -1: pageindex;
		dispatch( setShowOption(bookindex, pageindex, true) );
	}

	return (
		<ColorBlueShelf
			imageList={ Assets }
			pageOpenCallback={ handlePageOpen }
			optionOpenCallback={ handleOptionOpen }
			bookOpenCallback={ () => dispatch(setShowAddBook(true)) }
		/>
	);
}
