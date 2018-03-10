import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'
import { white, lightGrey, darkGrey, red } from './colors'

const FilterButton = ({ icon, text, value, active, handlePress }) => {
	const styles = {
		button: {
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'stretch',
			backgroundColor: active ? red : white
		},
		icon: {
			color: active ? white : darkGrey,
			textAlign: 'center',
			fontSize: 24
		},
		text: {
			textAlign: 'center',
			fontSize: icon ? 10 : 18
		}
	};

	return (
		<TouchableHighlight
			style={ styles.button }
			underlayColor={ lightGrey }
			onPress={ handlePress } >
			<View>
				{ icon ? (
					<Text style={ styles.icon }>
						<FontAwesome>{ Icons[ icon ] }</FontAwesome>
					</Text>
				) : null }
				{ text ? (
					<Text style={ styles.text }>{ text }</Text>
				) : null }
			</View>
		</TouchableHighlight>
	);
};

export const FilterBar = ({ filters, appliedFilter, style, selectFilter }) => {
	const default_styles = {
		height: 45,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'stretch',
		borderWidth: 1,
		borderColor: lightGrey,
		borderRadius: 10,
		overflow: 'hidden',
	};

	return (
		<View style={{ ...default_styles, ...style }}>
			{ filters.map( filter => (
				<FilterButton
					key={ filter.key || filter.value }
					icon={ filter.icon }
					text={ filter.text }
					value={ filter.value }
					active={ filter.value === appliedFilter }
					handlePress={ () => { selectFilter(filter.value); } }
				/>
			) ) }
		</View>
	);
};
