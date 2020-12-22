//aditinal function to shelfReducer

export function move(typeString, state, action) {
	const status = {
		...state.status,
		isPageOpen: false,
		bookIndex: action.page === undefined || action.page < 0 ? -1 : action.index
	};
	if( typeString === "moveup" )
		return {
			...state,
			status: status,
			shelf: moveUp( state.shelf, action )
		}
	else
		return {
			...state,
			status: status,
			shelf: moveDown( state.shelf, action )
		}
}

function moveUp( shelf, action ) {
	if( action.page === 0 || ( action.index === 0 && (action.page === undefined || action.page < 0)) )
		return shelf;
	//moving up a page
	if( action.page > 0 ) {
		const targetPage = shelf[ action.index ].items[ action.page ];
		const replacingPage = shelf[ action.index ].items[ action.page -1 ];
		return shelf.map( (book, index) => {
			if( index !== action.index)
				return book;
			return {
				...book,
				items: book.items.map( (page, pindex) => {
					if( pindex !== action.page && pindex !== (action.page - 1) )
						return page;
					if( pindex === action.page )
						return replacingPage;
					return targetPage;
				})
			}
		});
	}
	//moving up a book
	else if( action.page === undefined || action.page < 0) {
		const targetBook = shelf[ action.index ];
		const replacingBook = shelf[ action.index -1 ];
		return shelf.map( (book, index) => {
			if( index !== action.index && index !== (action.index - 1) )
				return book;
			if( index === action.index )
				return replacingBook;
			else
				return targetBook;
		});
	}
	alert("error in moving up");
	return shelf;
}

function moveDown( shelf, action ) {
	if( action.page === shelf[action.index].items.length-2 )
		return shelf;
	 if( action.index === (shelf.length-2) && (action.page === undefined || action.page < 0) )
		return shelf;
	//moving down a page
	if( action.page >= 0 ) {
		const targetPage = shelf[ action.index ].items[ action.page ];
		const replacingPage = shelf[ action.index ].items[ action.page + 1 ];
		
		//alert( JSON.stringify(targetPage) );
		return shelf.map( (book, index) => {
			if( index !== action.index)
				return book;
			return {
				...book,
				items: book.items.map( (page, pindex) => {
					if( pindex !== action.page && pindex !== (action.page + 1) )
						return page;
					if( pindex === action.page )
						return replacingPage;
					return targetPage;
				})
			}
		});
	}
	//moving down a book
	else if( action.page === undefined || action.page < 0) {
		const targetBook = shelf[ action.index ];
		const replacingBook = shelf[ action.index + 1 ];
		return shelf.map( (book, index) => {
			if( index !== action.index && index !== (action.index + 1) )
				return book;
			if( index === action.index )
				return replacingBook;
			else
				return targetBook;
		});
	}
	alert("error in moving down");
	return shelf;
}