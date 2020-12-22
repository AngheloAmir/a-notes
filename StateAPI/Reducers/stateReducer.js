import { ACT } from '../rootReducer';
import { defaultState } from '../State';

export function stateReducer(state, action) {
	switch( action.type ) {
		case ACT.setshelf:
			try {
				return {
					meta: {
						filename: action.payload.filename
					},
					status: {  ...defaultState.status },
					shelf: action.payload.shelf
				}
			}
			catch( err ) {
				alert("Error during load the app data\n" + err);
				return state;
			}
		
		case ACT.loaddefault:
			return {
				...defaultState
			}
			
		default:
			return state;
	}
}