import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-native'
import { View } from 'react-native';
import Cuts from '../../containers/Cuts'
import Create from '../Create'
import Barbers from '../Barbers'
import { background } from '../globals/colors'

const styles = {
	flex: 1,
	justifyContent: 'flex-start',
	backgroundColor: background,
};

class Viewport extends Component {
	render() {
		return (
			<View style={ styles } >
				<Route path="/cuts" component={ Cuts } />
				<Route path="/create" component={ Create } />
				<Route path="/barbers" component={ Barbers } />
				<Route exact path="/" render={ () => <Redirect to="/cuts"/> } />
			</View>
		);
	}
};
export default Viewport;
