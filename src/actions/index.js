import axios from 'axios'
import { Font } from 'expo'
import { TYPES, ENDPOINT } from '../constants'

// LOADING DATA

export const loadFonts = () => ( dispatch ) => {
	Font.loadAsync({
		'FontAwesome': require('../assets/fonts/fontawesome.ttf'),
	}).then( () => {
		dispatch({
			type: TYPES.FONT_LOADED
		})
	})
};

export const loadUser = id => ( dispatch ) => {
	axios.get( `http://demo5794743.mockable.io/user` ).then(
		({ data }) => {
			dispatch({
				type: TYPES.UPDATE_USER,
				user: { ...data, loading: false }
			});
			dispatch({
				type: TYPES.UPDATE_CUTS,
				cuts: data.cuts
			});
		},
		errors => {
			console.log( errors )
		}
	)
};

// ROUTE NAVIGATION

export const changeRoute = route => {
	return {
		type: TYPES.CHANGE_ROUTE,
		route
	}
};

// CUTS LIST

export const selectCutsFilter = filter => {
	return {
		type: TYPES.SET_CUTS_FILTER,
		filter
	}
}

// CREATE CUT

export const createNewCut = () => {
	return {
		type: TYPES.TOGGLE_CREATE,
		payload: { show: true }
	}
};

export const resetCreateCut = () => ( dispatch ) => {
	dispatch({
		type: TYPES.TOGGLE_CREATE,
		payload: { show: false }
	})
	setTimeout( () => {
		dispatch({
			type: TYPES.RESET_CREATE,
		})
	}, 500 )
};
