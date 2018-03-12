import axios from 'axios'
import { Font } from 'expo'

const endpoint = 'http://demo5794743.mockable.io/';

export const loadData = () => dispatch => {
	dispatch( loadFonts() )
		.then( () => {
			dispatch( loadUser() )
				.then( () => {
					dispatch({
						type: 'DATA_LOADED'
					})
				})
		})
}

const loadFonts = () => dispatch => new Promise( ( resolve, reject ) => {
	Font.loadAsync({
		'FontAwesome': require('../../public/fonts/fontawesome-webfont.ttf'),
	}).then( () => {
		resolve();
	}).catch( ()=> { reject(); } );
});

const loadUser = id => dispatch => new Promise( ( resolve, reject ) => {
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
			resolve();
		},
		errors => {
			console.log( errors );
			reject();
		}
	)
});

// ROUTE ACTIONS

export const changeRoute = route => {
	return {
		type: 'CHANGE_ROUTE',
		route
	};
};

// CUT ACTIONS

export const setCutsFilter = filter => {
	return {
		type: 'CHANGE_CUTS_FILTER',
		filter
	}
}

export const openCutProfile = id => dispatch => {
	dispatch( loadCut(id) );
	dispatch({
		type: 'TOGGLE_CUT',
		show: true
	});
}

const loadCut = id => dispatch => {
	dispatch({
		type: 'LOADING_CUT',
		loading: true
	});
    // TODO: ADD SUPPORT TO CHECK CACHE FOR PREVIOUSLY LOADED CUT INFO
	axios.get( `${ endpoint }/cut` ).then(
		({ data }) => {
			dispatch({
				type: 'SET_CUT',
				cut: data
			});
			dispatch({
				type: 'LOADING_CUT',
				loading: false
			});
		},
		errors => {
			console.log( errors );
		}
	)
};

export const closeCutProfile = () => {
	return dispatch => {
		dispatch({
			type: 'TOGGLE_CUT',
			show: false
		});
		setTimeout( () => {
			dispatch({
				type: 'RESET_CUT',
			});
		}, 500 );
	}
}

export const createNewCut = () => {
	return {
		type: 'TOGGLE_CREATE',
		show: true
	};
};

export const resetCreateCut = () => ( dispatch ) => {
	dispatch({
		type: 'TOGGLE_CREATE',
		payload: { show: false }
	});
	setTimeout( () => {
		dispatch({
			type: 'RESET_CREATE',
		});
	}, 500 );
};
