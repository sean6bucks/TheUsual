import React from 'react'
import { View, FlatList, Text } from 'react-native'
import { CutItem } from './CutItem'

export const CutsList = ({ items }) => {
	return (
		<CutsList
			horizontal={ true }
			pagingEnabled={ true }
			showsHorizontalScrollIndicator={ false }
			data={ items }
			renderItem={ ({ item }) => (
				<CutItem key={ item.id } item={ item }/>
			)}
			keyExtractor={ ( item, index ) => item.id }
			ListEmptyComponent={ () => (
				<View>
					<Text>No cuts added yet</Text>
				</View>
			)}
		/>
	)
}
