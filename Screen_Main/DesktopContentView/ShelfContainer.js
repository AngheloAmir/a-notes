import React from 'react';

import { contextProvider } from '../../StateAPI/contextProvider';
import { setOpenPage, setShowAddBook, setShowAddPage, setShowOption} from '../../StateAPI/Actions';

import ColorBlueShelf from '../../ColorBlueShelf/ColorBlueShelf';
import { Assets } from '../../ImageAssets/Assets';

export default function ShelfContainer() {
	const { state, dispatch } = React.useContext( contextProvider );
	
	function handlePageOpen(bookindex, pageindex) {
	//determine if the add button is clicked.
		if( (state.shelf[bookindex].items.length - 1) === pageindex )
			dispatch( setShowAddPage(bookindex, true ));
		else
			dispatch( setOpenPage(bookindex, pageindex, true ));
	}
	
	function handleOptionOpen(bookindex, pageindex) {
		pageindex = pageindex === undefined ? -1: pageindex;
		dispatch( setShowOption(bookindex, pageindex, true) );
	}
	
	return (
		<React.Fragment>
			<div className="screen-heading"> Shelf </div>
			<ColorBlueShelf
				imageList={ Assets }
				pageOpenCallback={ handlePageOpen }
				optionOpenCallback={ handleOptionOpen }
				bookOpenCallback={ () => dispatch(setShowAddBook(true)) }
			/>
		</React.Fragment>
	);
}
