import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View } from 'react-native';

import { Viewport } from './Viewport';
import { Navbar } from './Navbar';

export default class Usual extends Component {
	constructor(props) {
		super(props);

		this.state = {
			percentage: 0,
			transferState: 'inactive'
		};

		this.createNewCut = this.createNewCut.bind(this);
	}

	createNewCut() {
		alert('New Cut');
	}

	render() {
		return (
			<SafeAreaView style={ styles.container }>
				<Viewport />
				<Navbar clickAction={ this.createNewCut }/>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	}
})
