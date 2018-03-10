import React from 'react'
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native'
import moment from 'moment'
import { white, lightGrey, darkRed, blue, darkBlue, black } from '../globals/colors'

export const CutItem = ({ item }) => {
	const width = Dimensions.get('window').width;
	const parent_pad = 10;
	const barber_sz = 40;
	const styles = {
		wrapper: {
			width: ( width - parent_pad ) / 2,
			padding: 5
		},
		shadow: {
			borderRadius: 8,
			shadowColor: black,
			shadowRadius: 2,
			shadowOpacity: 0.25,
			shadowOffset: { width: 1, height: 1 }
		},
		card: {
			flex: 1,
			height: 250,
			backgroundColor: white,
			borderRadius: 8,
			overflow: 'hidden'
		},
		cover: {
			flex: 1,
			overflow: 'hidden',
			backgroundColor: 'red'
		},
		image: {
			flex: 1,
			height: undefined,
			width: undefined
		},
		info: {
			position: 'absolute',
			bottom: 0,
			width: '100%',
			paddingVertical: 10,
			zIndex: 1
		},
		barber: {
			position: 'absolute',
			top: 5,
			right: 5,
			height: barber_sz,
			width: barber_sz,
			borderRadius: barber_sz / 2,
			overflow: 'hidden',
			backgroundColor: blue,
			zIndex: 1
		},
		barber_text: {
			width: barber_sz,
			lineHeight: barber_sz,
			textAlign: 'center',
			color: white,
			fontSize: 24
		},
		date: {
			textAlign: 'center',
			color: white,
			fontSize: 22,
			fontWeight: 'bold',
			textShadowColor: black,
			textShadowRadius: 2,
			textShadowOffset: { height: 1, width: 1 },
			backgroundColor: 'transparent'
		}
	};

	return (
		<View style={ styles.wrapper }>
			<TouchableOpacity
				activeOpacity={ 0.5 }
				style={ styles.shadow }
			>
				<View style={ styles.card }>
					<View style={ styles.cover }>
						<Image
							style={ styles.image }
							resizeMode={ 'cover' }
							defaultSource={ require('./MBartwork_full.jpg') }
							source={{ uri: item.cover }}
						/>
					</View>
					<View style={ styles.barber }>
						{ item.barber.thumbnail ? (
							<Image
								style={ styles.image }
								resizeMode={ 'cover' }
								source={{ uri: item.barber.thumbnail }}
							/>
						) : (
							<Text style={ styles.barber_text }>{ item.barber.name.substring(0,1).toUpperCase() }</Text>
						) }
					</View>
					<View style={ styles.info }>
						<Text style={ styles.date }>{ moment(item.timestamp).format('MMM DD, YYYY') }</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};
