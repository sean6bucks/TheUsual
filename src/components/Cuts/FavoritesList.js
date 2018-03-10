import React, { Component } from 'react'
import { View, FlatList, Text, Dimensions } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { FavoriteItem } from './FavoriteItem'
import { darkGrey, red } from '../globals/colors'

const width = Dimensions.get('window').width;
const slideWidth = width * 0.8;
const styles = {
	wrapper: {
		flex: 1,
		paddingTop: 65,
	},
	slide: {
		width: slideWidth,
		borderRadius: 10,
		marginBottom: 3,
		shadowColor: '#000',
		shadowOffset: { width: 2, height: 1 },
		shadowOpacity: 0.15,
		shadowRadius: 2
	},
	pagination: {
		paddingVertical: 5
	},
	dot: {
		marginHorizontal: 1,
		padding: 8
	}
};

export class FavoritesList extends Component {
    // LCOAL STATE FOR UI ONLY
	state = {
		activeSlide: 0
	}
	carousel = null;

	render() {
		return (
			<View style={ styles.wrapper }>
				<Carousel
					ref={ c => { this.carousel = c; } }
					data={ this.props.items }
					renderItem={ ({ item }) => <FavoriteItem key={ item.id } item={ item }/> }
					sliderWidth={ width }
					itemWidth={ slideWidth }
					layout={ 'stack' }
					slideStyle={ styles.slide }
					layoutCardOffset={ 12 }
					onSnapToItem={ index => this.setState({ activeSlide: index }) }
				/>
				<Pagination
					activeDotIndex={ this.state.activeSlide }
					dotsLength={ this.props.items.length }
					carouselRef={ this.carousel }
					tappableDots={ !!this.carousel }
					containerStyle={ styles.pagination }
					dotColor={ red }
					dotContainerStyle={ styles.dot }
					inactiveDotColor={ darkGrey }
				/>
			</View>
		)
	}
}
