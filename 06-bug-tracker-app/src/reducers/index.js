import { combineReducers } from 'redux';

import bugsReducer from './bugsReducer';
import spinnerReducer from './spinnerReducer';

let appReducer = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer
});

export default appReducer;
