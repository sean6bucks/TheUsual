import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const blue = '#2618cd';

export const Navbar = (props) => {

	const clickAction = props.clickAction;

	return (
		<View style={ styles.navbar }>
			<View style={ styles.addView }>
				<Button style={ styles.addText } color={ blue } title="+" className="navbar_add-cut" onPress={ clickAction }></Button>
			</View>
		</View>
	);

};

const styles = StyleSheet.create({
	navbar: {
		height: 60,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	addView: {
		width: 50,
		paddingVertical: 4,
		paddingHorizontal: 9,
		borderColor: blue,
		borderWidth: 1,
		borderRadius: 5
	}
});
