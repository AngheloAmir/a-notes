import { ACT } from '../rootReducer';

export function metaReducer(state, action) {
	switch( action.type ) {
		case ACT.fname:
			return {
				...state, meta: {
					...state.meta, filename: action.payload
				}
			}
		default:
			return state;
	}
}