import React, { Component } from 'react'
import { TouchableOpacity, ActivityIndicator, Image, Dimensions } from 'react-native'
import Lightbox from 'react-native-lightbox'
import { lightGrey } from '../globals/colors'

const winWidth = Dimensions.get('window').width;
const imgWidth = winWidth * 0.6;
const imgHeight = imgWidth * 1.33;

const styles = {
	img_wrap: {
		width: imgWidth,
		height: imgHeight,
		overflow: 'hidden',
		backgroundColor: 'rgba(0,0,0,0.15)'
	},
	loader: {
		position: 'absolute',
		top: imgHeight * 0.5,
		left: imgWidth * 0.5,
		zIndex: 1
	},
	image: {
		flex: 1,
		height: undefined,
		width: undefined
	},
};

export class ImageItem extends Component {
	state = {
		loading: true
	}
	render() {
		return (
			<TouchableOpacity
				style={ styles.img_wrap }
				activeOpacity={ 0.9 }
			>
				{ this.state.loading ? <ActivityIndicator style={ styles.loader }/> : null }
				<Image
					source={{ uri: this.props.source }}
					onLoad={ () => { this.setState({
						loading: false
					}); } }
					style={ styles.image }
				/>
			</TouchableOpacity>
		)
	}
}
