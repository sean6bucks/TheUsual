import React from 'react'
import { View, Image, Text, TouchableWithoutFeedback, Dimensions } from 'react-native'
import { white, lightGrey } from '../globals/colors'

export const FavoriteItem = ({ item }) => {
	const width = Dimensions.get('window').width;
	const pad_width = width * 0.1;
	const styles = {
		wrapper: {
			flex: 1,
		},
		card: {
			flex: 1,
			backgroundColor: white,
			borderRadius: 10,
			borderWidth: 1,
			borderColor: lightGrey,
			overflow: 'hidden'
		},
		cover: {
			flex: 0,
			height: '75%',
			overflow: 'hidden',
			backgroundColor: 'red'
		},
		image: {
			flex: 1,
			height: undefined,
			width: undefined
		},
		info: {
			flex: 1,
			padding: 10
		}
	};

	return (
		<TouchableWithoutFeedback style={ styles.wrapper } >
			<View style={ styles.card }>
				<View style={ styles.cover }>
					<Image
						style={ styles.image }
						resizeMode={ 'cover' }
						defaultSource={ require('./MBartwork_full.jpg') }
						source={{ uri: item.cover }}
					/>
				</View>
				<View style={ styles.info }>
					<Text style={{ fontSize: 24 }}>{ item.barber.name }</Text>
					<Text>{ item.shop.name }</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};
