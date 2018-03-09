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

export const FavoritesList = ({ items }) => {
	return (
		<View style={ styles.fill }>
			<FlatList
				horizontal={ true }
				pagingEnabled={ true }
				showsHorizontalScrollIndicator={ false }
				data={ items }
				renderItem={ ({ item }) => (
					<FavoriteItem key={ item.id } item={ item }/>
				)}
				keyExtractor={ ( item, index ) => item.id }
				ListEmptyComponent={ () => (
					<View>
						<Text>No cuts added yet</Text>
					</View>
				)}
			/>
		</View>
	)
}
