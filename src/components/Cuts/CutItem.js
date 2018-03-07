import React from 'react'
import { View, Text } from 'react-native'

export const CutItem = ({ item }) => {
	const styles = {
		width: '100%',
		padding: 15,
		backgroundColor: '#fff',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#ddd',
	};

	return (
		<View style={ styles }>
			<Text style={{ fontSize: 24 }}>{ item.barber.name }</Text>
			<Text>{ item.shop.name }</Text>
		</View>
	);
};
