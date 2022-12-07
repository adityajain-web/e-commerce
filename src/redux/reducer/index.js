import { combineReducers } from 'redux'
import { setProductReducer } from './productReducer';
import { retrieveCartReducer } from './cartReducer'

const reducer = combineReducers({
    setProductReducer, retrieveCartReducer
});

export default reducer