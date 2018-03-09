import React, { Component } from 'react'
import { View, FlatList, Text, Dimensions } from 'react-native'
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
			</View>
		)
	}
}
