import { combineReducers } from 'redux'
import status from './status'

import { loadingBarReducer } from 'react-redux-loading-bar'


const reducer = combineReducers({
    status,
    loadingBar: loadingBarReducer,
});

export default reducer