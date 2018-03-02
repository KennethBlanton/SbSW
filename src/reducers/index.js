import { combineReducers } from 'redux';
import Position from './reducer_position';
import Markers from './reducer_markers';

const rootReducer = combineReducers({
  position: Position,
  markers: Markers
});

export default rootReducer;
