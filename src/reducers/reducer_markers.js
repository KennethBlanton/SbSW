import { FETCH_MARKERS } from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
	case FETCH_MARKERS:
		console.log(action)
		return action.payload.data
	}
	return state
}