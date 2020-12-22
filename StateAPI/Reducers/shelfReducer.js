/*
	Handle when there is a change in shelf attribute (see State.js).
	For example, a user wants to change the name of a book, this
	reducer should handle that change.
*/
import { TodayDate } from '../TodayDate';
import { ACT } from '../rootReducer';
import { move } from './AdditionalFunction/MoveItemFromShelf';
import { sort } from   './AdditionalFunction/SortAlphabeticallyShelf';

export function shelfReducer(state, action) {
	if( action.type === ACT.alphabetically )
		return sort( state );
	if( action.type === ACT.moveup) 
		return move( "moveup", state, action );
	else if( action.type === ACT.movedown)
		return move( "movedown", state, action );
	else {
		try {
			const copy = getcopy(state, action);
			if( window.localStorage ) {
				window.localStorage.setItem('reviewerapp1.1-shelf', JSON.stringify( copy.shelf ));
				window.localStorage.setItem('reviewerapp1.1-name', copy.meta.filename );
			}
			return copy;
		}
		catch( err ) {
			return state;
		}
	}
}

function getcopy(state, action) {
	switch( action.type ) {
		case ACT.addbook:
			return {
				...state,
				shelf: [
					...state.shelf.slice( 0, state.shelf.length - 1),
					{ name: action.payload, imageAt: 0, created: TodayDate(), modified: "N/A", 
						items: [ { name: "add" , imageAt: 2, nooption: true} ] },
					{ name: "add" , imageAt: 2, callback: true, nooption: true }
				],
			};
			
		case ACT.addpage:
			return {
				...state, shelf: state.shelf.map( (book, index) => {
					if( index !== action.index ) return book;
					return {
						...book,
						items:  [
							...book.items.slice( 0, book.items.length - 1),
							{ name:  action.payload, imageAt: 1, created: TodayDate(), modified: "N/A", content: "" },
							{ name: "" , imageAt: 2, nooption: true}
						]
					}
				})
			}
		
		case ACT.updatecontent:
			return {
				...state,
				shelf: state.shelf.map( (book, index) => {
					if( index !== action.index ) return book;
					return {
						...book,
						items: book.items.map( (page, pindex) => {
							if( pindex !== action.page ) return page;
							return {
								...page, content: action.payload, modified: TodayDate()
							}
						})//end of map items
					}//end of return a book
				})//end of map books
			}//end of return
			
		case ACT.renamebook:
			return {
				...state,
				shelf: state.shelf.map( (book, index) => {
					if( index !== action.index ) return book;
					return {
						...book, name: action.payload
					}
				})
			}
			
		case ACT.renamepage:
			return {
				...state,
				shelf: state.shelf.map( (book, index) => {
					if( index !== action.index ) return book;
					return {
						...book, items: book.items.map( (item, pindex) => {
							if( pindex !== action.page ) return item;
							return {
								...item, name: action.payload
							}
						})
					}
				})
			}
		
		case ACT.deletebook:
			return {
				...state,
				shelf: state.shelf.filter( (book, index) => index !== action.index )
			}
			
		case ACT.deletepage:
			return {
				...state,
				shelf: state.shelf.map( (book, index) => {
					if( index !== action.index ) return book;
					return {
						...book,
						items: book.items.filter( (page, pindex) => pindex !== action.page )
					}
				})
			}
		
		default:
			alert("unknown reducer action!");
			return state;
	}
} 


