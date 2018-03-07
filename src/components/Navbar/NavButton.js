import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Link } from 'react-router-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'

export const NavButton = ({ large, icon, route, active, handlePress }) => {
	const border_radius = 25;
	const styles = {
		button: {
			borderRadius: border_radius,
			height: 50,
			width: 50,
			overflow: 'hidden',
			backgroundColor: '#FFF'
		},
		icon: {
			padding: large ? 3 : 13,
			color: active ? '#ff4200' : '#666',
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
					underlayColor="#DDD"
					onPress={ () => { handlePress(route) } }>
					{ inner }
				</Link>
			) : (
				<TouchableHighlight
					underlayColor="#DDD"
					onPress={ handlePress }
				>
					{ inner }
				</TouchableHighlight>
			) }
		</View>
	)
}
