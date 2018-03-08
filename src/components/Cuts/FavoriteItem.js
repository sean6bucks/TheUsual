import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import moment from 'moment'
import { white, lightGrey } from '../globals/colors'

export const FavoriteItem = ({ item }) => {
	const width = Dimensions.get('window').width;
	const pad_width = width * 0.1;
	const styles = {
		wrapper: {
			flex: 0,
			padding: 15,
			paddingLeft: pad_width,
			paddingRight: pad_width,
			width: width,
		},
		card: {
			flex: 1,
			backgroundColor: white,
			borderRadius: 10,
			borderWidth: 1,
			borderColor: lightGrey,
			overflow: 'hidden'
		}
	};

	return (
		<View style={ styles.wrapper }>
			<TouchableOpacity
				style={ styles.card }
				activeOpacity={ 0.75 } >
				<Text style={{ fontSize: 24 }}>{ item.barber.name }</Text>
				<Text>{ item.shop.name }</Text>
			</TouchableOpacity>
		</View>
	);
};
