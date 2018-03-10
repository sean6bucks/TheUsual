import React from 'react'
import { View, FlatList, Text } from 'react-native'
import { CutItem } from './CutItem'

export const CutsList = ({ items }) => {
	const styles = {
		list: {
			flex: 1
		},
		container: {
			paddingHorizontal: 5,
			paddingTop: 65,
			paddingBottom: 10
		}
	};
	return (
		<FlatList
			data={ items }
			numColumns={ 2 }
			renderItem={ ({ item }) => (
				<CutItem key={ item.id } item={ item }/>
			)}
			keyExtractor={ ( item, index ) => item.id }
			ListEmptyComponent={ () => (
				<View>
					<Text>No cuts added yet</Text>
				</View>
			)}
			style={ styles.list }
			contentContainerStyle={ styles.container }
		/>
	)
}
