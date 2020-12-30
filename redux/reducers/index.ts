import { combineReducers } from 'redux';
import modeReducer from '../modeSlices';

export default combineReducers({
  mode: modeReducer,
});
