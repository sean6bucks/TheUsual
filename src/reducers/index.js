import { combineReducers } from 'redux'

const routeReducer = ( prevState='cuts', { type, route } ) => {
	switch( type ) {
		case 'CHANGE_ROUTE':
			return route;
		default:
			return prevState;
	}
}

const loadingReducer = ( prevState={ data: true, cut: false }, { type, loading } ) => {
	switch ( type ) {
		case 'DATA_LOADED':
			return { ...prevState, data: false };
		case 'LOADING_CUT':
			return { ...prevState, cut: loading };
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

const filterReducer = ( prevState={ cuts: 'favorite' }, { type, filter } ) => {
	switch( type ) {
		case 'CHANGE_CUTS_FILTER':
			return { ...prevState, cuts: filter };
		default:
			return prevState;
	}
}

const showReducer = ( prevState={ cut: false, create: false }, { type, show } ) => {
	switch( type ) {
		case 'TOGGLE_CUT':
			return { ...prevState, cut: show };
		case 'TOGGLE_CREATE':
			return { ...prevState, create: show };
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

const cutReducer = ( prevState={}, { type, cut } ) => {
	switch( type ) {
		case 'SET_CUT':
			return { ...prevState, ...cut };
		case 'RESET_CUT':
			return {};
		default:
			return prevState;
	}
}

const createReducer = ( prevState={ show: false, info: {} }, { type, payload } ) => {
	switch( type ) {
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
	show: showReducer,
	cuts: cutsReducer,
	cut: cutReducer,
	create: createReducer
});

export default rootReducer;
