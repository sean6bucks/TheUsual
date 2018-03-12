import React, { Component } from 'react';
import {
	ActivityIndicator,
	View,
	FlatList,
	ScrollView,
	Text,
	Image,
	Button,
	Platform,
	StatusBar
} from 'react-native';
import Modal from 'react-native-modal'
import { ImageItem } from './ImageItem'
import { CutInfo } from './InfoBlock'
import { white, lightGrey } from '../globals/colors'

const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const styles = {
	header: {
		height: 50,
		backgroundColor: white,
		padding: 5,
		paddingTop: statusBarHeight + 5,
		borderBottomWidth: 1,
		borderBottomColor: lightGrey
	},
	list: {
		flex: 1,
		backgroundColor: white,
	}
};

class CutProfile extends Component {
	galleryLayout = ( images=[] ) => {
		return images.length <= 1 ? {
			flex: 1,
			justifyContent: 'center'
		} : {
			justifyContent: 'flex-start'
		};
	}
	render() {
		const cut = this.props.cut;
		return (
			<Modal
				isVisible={ this.props.show.cut }
				animationIn={ 'zoomIn' }
				avoidKeyboard={ true }
				hideModalContentWhileAnimating={ true }
				backdropOpacity={ 0 }
				style={{ margin: 0 }}
			>
				<View style={ styles.header }>
					<Button
						title="Close"
						onPress={ this.props.closeCutProfile }
					/>
				</View>
				{
					!cut.id || this.props.loading.cut ? (
						<ActivityIndicator style={ styles.list }/>
					) : (
						<ScrollView
							style={ styles.list }
							contentContainerStyle={ styles.container }
						>
							<FlatList
								horizontal={ true }
								data={ cut.images }
								renderItem={ ({ item }) => (
									<ImageItem
										key={ item.url }
										source={ item.url }
									/>
								)}
								keyExtractor={ ( item, index ) => item.url }
								contentContainerStyle={ this.galleryLayout(cut.images) }
								showsHorizontalScrollIndicator={ false }
							/>
							<CutInfo cut={ cut } />
						</ScrollView>
					)
				}
			</Modal>
		)
	}
}
export default CutProfile;
