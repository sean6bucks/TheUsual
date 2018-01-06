import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export const Viewport = (props) => {

	return (
		<View style={ styles.viewport }>
			<Image style={ styles.image } source={ require('../../public/images/MBartwork_full.jpg') } />
		</View>
	);

};

const styles = StyleSheet.create({
	viewport: {
		flex: 1,
		backgroundColor: '#f8f8f8',
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		width: 100,
		height: 100
	},
});
