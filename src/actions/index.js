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
		'FontAwesome': require('../../public/fonts/fontawesome.ttf'),
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

export const createNewCut = () => {
	return {
		type: 'TOGGLE_CREATE',
		payload: { show: true }
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
