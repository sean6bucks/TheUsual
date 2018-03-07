import { combineReducers } from 'redux'

const loadingReducer = ( prevState={ fonts: true, user: true }, { type, bool } ) => {
	switch ( type ) {
		case 'FONT_LOADED':
			return { ...prevState, fonts: false };
		case 'USER_LOADED':
			return { ...prevState, user: false };
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

const routeReducer = ( prevState='cuts', { type, route } ) => {
	switch( type ) {
		case 'CHANGE_ROUTE':
			return route;
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
	loading: loadingReducer,
	user: userReducer,
	route: routeReducer,
	cuts: cutsReducer,
	create: createReducer
});

export default rootReducer;
