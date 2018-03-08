import React, { Component } from 'react'
import { SafeAreaView, Navigator, View, Text, Modal, ActivityIndicator } from 'react-native'

import Viewport from '../Viewport'
import Create from '../../containers/Create'
import Navbar from '../../containers/Navbar'

const styles = {
	flex: 1,
};

class Usual extends Component {
	componentWillMount() {
		this.props.loadFonts();
		this.props.loadUser();
	}

	render() {
		return this.props.font_loaded ? (
			<SafeAreaView style={ styles }>
				<Viewport />
				<Navbar />
				<Create />
			</SafeAreaView>
		) : null;
	}
}

export default Usual;
