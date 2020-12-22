/*
	The root reducer.
		Only used in App.js
*/
export const ACT = {
	setshelf:  -2,
	loaddefault: -1,
	
	fname: 0,
	
	addbook: 10,
	addpage: 11,
	updatecontent: 12,
	renamebook: 13,
	renamepage: 14, 
	deletebook: 15,
	deletepage: 16,
	moveup: 17,
	movedown: 18,
	alphabetically: 19,
	
	setquizstate: 20,
	setsearchstate: 21,
	
	setopenpage: 30,
	seteditpage: 31,
	setshowaddbook: 32,
	setshowaddpage: 33,
	setshowoption: 34,
	setshowdetails: 35,
	setshowrename: 36,
	setshowdelete: 37,
	settextfieldref: 38,
	setsearchtext: 39,
	
	setstatusdefault: 50,
}

import { stateReducer } from './Reducers/stateReducer';
import { shelfReducer } from './Reducers/shelfReducer';
import { statusReducer } from './Reducers/statusReducer';
import { metaReducer } from './Reducers/metaReducer';

export function rootReducer(state, action) {
	if( action.type < 0 )
		return stateReducer( state, action );
	else if( action.type <= 9 )
		return metaReducer( state, action );
	else if( action.type <= 19 )
		return shelfReducer( state, action );
	else if ( action.type >= 20 )
		return statusReducer( state, action );
	else
		return state;
}