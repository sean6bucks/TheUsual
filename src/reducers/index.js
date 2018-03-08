import { combineReducers } from 'redux'
import { TYPES, INITIAL_STATE } from '../constants'

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

const userReducer = ( prevState=INITIAL_STATE.user, { type, user } ) => {
	switch( type ) {
		case TYPES.UPDATE_USER:
			return user;
		default:
			return prevState;
	}
};

const routeReducer = ( prevState=INITIAL_STATE.route, { type, route } ) => {
	switch( type ) {
		case TYPES.CHANGE_ROUTE:
			return route;
		default:
			return prevState;
	}
};

const cutsFilterReducer = ( prevState=INITIAL_STATE.cuts_filter, { type, filter } ) => {
	switch( type ) {
		case TYPES.SET_CUTS_FILTER:
			return filter;
		default:
			return prevState;
	}
};

const cutsReducer = ( prevState=INITIAL_STATE.cuts, { type, cuts } ) => {
	switch( type ) {
		case TYPES.UPDATE_CUTS:
			return cuts;
		default:
			return prevState;
	}
};

const createReducer = ( prevState=INITIAL_STATE.create, { type, payload } ) => {
	switch( type ) {
		case TYPES.TOGGLE_CREATE:
			return { ...prevState, show: payload.show };
		case TYPES.RESET_CREATE:
			return { ...prevState, info: {} }
		default:
			return prevState;
	}
};

const rootReducer = combineReducers({
	loading: loadingReducer,
	user: userReducer,
	route: routeReducer,
	cuts_filter: cutsFilterReducer,
	cuts: cutsReducer,
	create: createReducer
});

export default rootReducer;
