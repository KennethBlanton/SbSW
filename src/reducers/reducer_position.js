import { POSITION } from '../actions/index';

export default function( state = null, action ) {
	console.log(action.type);
	switch(action.type) {
	case POSITION:
		return action.payload
	}
	return state
}