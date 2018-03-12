import React from 'react';
import { View, SectionList, Image, Text } from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'
import { white, lightGrey, darkGrey, red, blue } from '../globals/colors'

const barber_sz = 40;
const styles = {
	block: {
		paddingVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	title_text: {
		color: darkGrey,
		fontSize: 24,
	},
	text: {
		color: darkGrey,
		fontSize: 18
	},
	image: {
		flex: 1,
		height: undefined,
		width: undefined
	},
	icon: {
		color: red,
		fontSize: 24,
		marginRight: 10
	}
}

const barber_styles = {
	avatar: {
		height: barber_sz,
		width: barber_sz,
		borderRadius: barber_sz / 2,
		overflow: 'hidden',
		backgroundColor: blue,
		zIndex: 1
	},
	initial: {
		width: barber_sz,
		lineHeight: barber_sz,
		textAlign: 'center',
		color: white,
		fontSize: 24
	},
	name: {
		paddingHorizontal: 10
	}
}
const BarberInfo = ({ barber }) => {
	const initial = barber.name.substring(0,1).toUpperCase();
	return (
		<View style={ styles.block }>
			<View style={ barber_styles.avatar }>
				{ barber.thumbnail ? (
					<Image
						style={ styles.image }
						resizeMode={ 'cover' }
						source={{ uri: barber.thumbnail }}
					/>
				) : (
					<Text style={ barber_styles.initial }>{ initial }</Text>
				) }
			</View>
			<Text style={{ ...styles.title_text, ...barber_styles.name }}>{ barber.name }</Text>
		</View>
	)
}

const ShopInfo = ({ shop }) => {
	return (
		<View style={ styles.block }>
			<FontAwesome style={ styles.icon }>{ Icons[ 'mapMarker' ] }</FontAwesome>
			<Text style={ styles.text }>{ shop.name }</Text>
		</View>
	)
}

const InfoBlock = ({ info }) => {
	return (
		<View>
			<View style={ styles.block }>
				<FontAwesome style={ styles.icon }>{ Icons[ 'infoCircle' ] }</FontAwesome>
				<Text style={ styles.text }>Notes:</Text>
			</View>
			<SectionList
				sections={ [
					{
						title: 'Top',
						data: info.top
					},
					{
						title: 'Sides',
						data: info.sides
					}
				] }
				renderItem={ ({ item, index }) => {
					const text = item.type === 'Clippers' ? `#${ item.guard } Guard` : item.msg;
					return (
						<View key={ item.type + item.index }>
							<Text style={ styles.text }>{ item.type }:</Text>
							<Text style={ styles.text }>{ text }</Text>
						</View>
					)
				}}
				renderSectionHeader={ ({ section }) => (
					<Text style={ styles.title_text }>{ section.title }</Text>
				)}
				contentContainerStyle={{ paddingLeft: 20 }}
				ItemSeparatorComponent={{ paddingBottom: 5 }}
			/>
		</View>
	)
}

export const CutInfo = ({ cut }) => {
	return (
		<View style={{ padding: 10 }}>
			<BarberInfo barber={ cut.barber }/>
			<ShopInfo shop={ cut.shop } />
			<InfoBlock info={ cut.info } />
		</View>
	)
}
