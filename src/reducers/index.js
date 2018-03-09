import { combineReducers } from 'redux'

const routeReducer = ( prevState='cuts', { type, route } ) => {
	switch( type ) {
		case 'CHANGE_ROUTE':
			return route;
		default:
			return prevState;
	}
}

const loadingReducer = ( prevState={ data: true }, { type, bool } ) => {
	switch ( type ) {
		case 'DATA_LOADED':
			return { ...prevState, data: false };
		default:
			return prevState;
	}
}

const userReducer = ( prevState={}, { type, user } ) => {
	switch( type ) {
		case 'UPDATE_USER':
			return user;
		default:
			return prevState;
	}
}

const filterReducer = ( prevState={ cuts: 'favorite' }, { type, filter }) => {
	switch( type ) {
		case 'CHANGE_CUTS_FILTER':
			return { ...prevState, cuts: filter };
		default:
			return prevState;
	}
}

const cutsReducer = ( prevState=[], { type, cuts } ) => {
	switch( type ) {
		case 'UPDATE_CUTS':
			return cuts;
		default:
			return prevState;
	}
}

const createReducer = ( prevState={ show: false, info: {} }, { type, payload } ) => {
	switch( type ) {
		case 'TOGGLE_CREATE':
			return { ...prevState, show: payload.show };
		case 'RESET_CREATE':
			return { ...prevState, info: {} }
		default:
			return prevState;
	}
}

const rootReducer = combineReducers({
	route: routeReducer,
	loading: loadingReducer,
	user: userReducer,
	filters: filterReducer,
	cuts: cutsReducer,
	create: createReducer
});

export default rootReducer;
