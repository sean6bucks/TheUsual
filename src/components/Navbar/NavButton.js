import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Link } from 'react-router-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'
import { white, lightGrey, darkGrey, blue } from '../globals/colors'

export const NavButton = ({ large, icon, route, active, handlePress }) => {
	const border_radius = 25;
	const styles = {
		button: {
			borderRadius: border_radius,
			height: 50,
			width: 50,
			overflow: 'hidden',
			backgroundColor: white
		},
		icon: {
			padding: large ? 3 : 13,
			color: active ? blue : darkGrey,
			textAlign: 'center',
			fontSize: large ? 44 : 24
		}
	};

	const inner = <Text style={ styles.icon }><FontAwesome>{ Icons[ icon ] }</FontAwesome></Text>;
	return(
		<View style={ styles.button }>
			{ route ? (
				<Link
					to={ `/${ route }` }
					underlayColor={ lightGrey }
					onPress={ () => { handlePress(route) } }>
					{ inner }
				</Link>
			) : (
				<TouchableHighlight
					underlayColor={ lightGrey }
					onPress={ handlePress }
				>
					{ inner }
				</TouchableHighlight>
			) }
		</View>
	)
}
