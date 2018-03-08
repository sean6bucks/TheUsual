import axios from 'axios'
import { Font } from 'expo'

const endpoint = 'http://demo5794743.mockable.io/';

export const loadFonts = () => ( dispatch ) => {
	Font.loadAsync({
		'FontAwesome': require('../../public/fonts/fontawesome.ttf'),
	}).then( () => {
		dispatch({
			type: 'FONT_LOADED'
		})
	})
};

export const loadUser = id => ( dispatch ) => {
	axios.get( `${ endpoint }/user` ).then(
		({ data }) => {
			dispatch({
				type: 'UPDATE_USER',
				user: data
			});
			dispatch({
				type: 'UPDATE_CUTS',
				cuts: data.cuts
			});
			dispatch({
				type: 'USER_LOADED'
			});
		},
		errors => {
			console.log( errors );
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
