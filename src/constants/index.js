export const TYPES = {
	FONT_LOADED: 'FONT_LOADED',
	USER_LOADED: 'USER_LOADED',
	UPDATE_USER: 'UPDATE_USER',
	UPDATE_CUTS: 'UPDATE_CUTS',
	CHANGE_ROUTE: 'CHANGE_ROUTE',
	SET_CUTS_FILTER: 'SET_CUTS_FILTER',
	TOGGLE_CREATE: 'TOGGLE_CREATE',
	RESET_CREATE: 'RESET_CREATE'
}

export const INITIAL_STATE = {
	font_loaded: false,
	user: {
		loading: true
	},
	route: '/cuts',
	cuts_filter: 'favorite',
	cuts: [],
	create: {
		show: false,
		saving: false,
		info: {}
	},
	barbers_filter: '',
	barbers: []
}

export const ENDPOINT = 'http://demo5794743.mockable.io';
