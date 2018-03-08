import React, { Component } from 'react';
import { View, ScrollView, Button, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal'
import { white } from '../globals/colors'

const styles = {
	scroll: {
		backgroundColor: white,
		paddingLeft: 15,
		paddingRight: 15
	},
	view: {
		paddingTop: 50,
		paddingBottom: 50
	}
};

class Create extends Component {
	render() {
		return (
			<Modal
				isVisible={ this.props.create.show }
				avoidKeyboard={ true }
				hideModalContentWhileAnimating={ true }
				style={{ margin: 0 }}
			>
				<ScrollView style={ styles.scroll }>
					<View style={ styles.view }>
						<View style={{
								height: 50,
								marginBottom: 50,
								backgroundColor: 'red'
						}} ></View>
						<View style={{
								height: 50,
								marginBottom: 50,
								backgroundColor: 'red'
						}} ></View>
						<View style={{
								height: 50,
								marginBottom: 50,
								backgroundColor: 'red'
						}} ></View>
						<View style={{
								height: 50,
								marginBottom: 50,
								backgroundColor: 'red'
						}} ></View>
						<View style={{
								height: 50,
								marginBottom: 50,
								backgroundColor: 'red'
						}} ></View>
						<Button
							title="Close"
							style={{
								backgroundColor: white,
								padding: 15
							}}
							onPress={ this.props.resetCreateCut }
						/>
					</View>
				</ScrollView>
			</Modal>
		)
	}
}
export default Create;
