import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// import filter from 'redux-storage-decorator-filter'
import rootReducer from './reducers'

export default ( initialState={} ) => {
	return createStore( rootReducer, initialState, applyMiddleware( thunk, logger ) );
}
