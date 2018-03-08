import React from 'react'
import { View } from 'react-native'
import { lightGrey, darkGrey } from './colors'

const default_styles = {
	indicator: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	dot: {
		flex: 0,
		height: 5,
		width: 5,
		marginRight: 5,
		borderRadius: 5
	}
}

export const Indicator = ({ length, activeIndex, style, handlePress }) => {
	const items = new Array(length).fill();
	return (
		<View style={{ ...default_styles.indicator, ...style }}>
			{
				items.map( (item, index) => {
					const styles = {
						...default_styles.dot,
						backgroundColor: index === activeIndex ? darkGrey : lightGrey
					};
					return <View key={ index } style={ styles }></View>
				})
			}
		</View>
	)
}
