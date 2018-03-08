import React, { Component } from 'react'
import { View, FlatList, Text, Dimensions } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { Indicator } from '../globals/ImageCarousel'
import { FavoriteItem } from './FavoriteItem'

const styles = {
	fill: {
		flex: 1
	},
	indicator: {
		height: 20
	}
};

export class FavoritesList extends Component {
	state = {
		activeSlide: 0
	}
	render() {
		const width = Dimensions('window').width;
		return (
			<View style={{ flex: 1 }}>
				<FlatList
					horizontal={ true }
					pagingEnabled={ true }
					showsHorizontalScrollIndicator={ false }
					data={ this.props.items }
					renderItem={ ({ item }) => (
						<FavoriteItem key={ item.id } item={ item }/>
					)}
					keyExtractor={ ( item, index ) => item.id }
					ListEmptyComponent={ () => (
						<View>
							<Text>No cuts added yet</Text>
						</View>
					)}
					onScrollEndDrag={ (stuff) => {
						console.log( stuff )
					}}
				/>
				<Indicator
					length={ this.props.items.length }
					activeIndex={ this.state.active_index }
					style={ styles.indicator } />
				<Carousel
					data={ this.props.items }
					renderItem={ ({ item }) => (
						<FavoriteItem key={ item.id } item={ item }/>
					)}
					itemWidth={ width }
					carouselWidth={ width }
					onSnapToItem={ (index) => this.setState({ activeSlide: index }) }
				/>
				<Pagination
					dotsLength={ this.props.items.length }
					activeDotIndex={ activeSlide }
				/>
			</View>
		)
	}
}
