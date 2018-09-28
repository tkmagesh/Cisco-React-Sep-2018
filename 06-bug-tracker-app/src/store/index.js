import { createStore } from 'redux';

import appReducer from '../reducers';

let appStore = createStore(appReducer);

export default appStore;