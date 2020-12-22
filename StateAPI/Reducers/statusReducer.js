/*
	Handle the state change action when an dispatch action is about changing the status attribute (see State.js)
*/
import { ACT } from '../rootReducer';
import { defaultState } from '../State';

export function statusReducer(state, action) {
	switch( action.type ) {
		case ACT.setquizstate:
			return {
				...state, status: {
					...state.status, isOnQuiz: action.payload
				}
			}
			
		case ACT.setsearchstate:
			return {
				...state, status: {
					...state.status, isOnSearch: action.payload
				}
			}
		
		case ACT.setopenpage:
			return {
				...state,
				status: {
					...state.status,
					bookIndex: action.index,
					pageIndex: action.page,
					isPageOpen: action.payload,
					isPageEdit: false
				}
			}
			
		case ACT.seteditpage:
			if( action.index === undefined || action.page === undefined )
				return state;
			if (action.index < 0 || action.page < 0 ) 
				return state;
			return {
				...state,
				status: {
					...state.status,
					bookIndex: action.index,
					pageIndex: action.page,
					isPageEdit: action.payload
				}
			}
		
		
		case ACT.setshowaddbook:
			return {
				...state, status: { ...state.status, isAddBookOpen: action.payload }
			}
			
		case ACT.setshowaddpage:
			return {
				...state, status: { ...state.status, bookIndex: action.index, isAddPageOpen: action.payload }
			}
		
		case ACT.setshowoption:
			return {
				...state,
				status: {
					...state.status,
					optionBookIndex: action.index,
					optionPageIndex: action.page,
					isOptionOpen: action.payload
				}
			}
			
		case ACT.setshowdetails:
			return {
				...state,
				status: {
					...state.status, isOptionOpen: false, isDetailShow: action.payload
				}
			}
		
		case ACT.setshowrename:
			return {
				...state,
				status: {
					...state.status, isRenameShow: action.payload
				}
			}
				
		case ACT.setshowdelete:
			return {
				...state,
				status: {
					...state.status, isDeleteShow: action.payload
				}
			}
			
		case ACT.settextfieldref:
			return {
				...state,
				status: {
					...state.status, textfieldref: action.payload
				}
			}
			
		case ACT.setsearchtext:
			return {
				...state,
				status: {
					...state.status, isOnSearch: action.search, searchtext: action.payload
				}
			}
			
		case ACT.setstatusdefault:
			return {
				...state,
				status: {
					...defaultState.status
				}
			}
			
		default:
			alert("unknown statusReducer!");
			return state;
	}
}