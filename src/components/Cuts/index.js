import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

import { CutItem } from './CutItem'

const styles = {};

class Cuts extends Component {
	render() {
		return (
			<View>
				<FlatList
					data={ this.props.cuts }
					renderItem={ ({ item }) => (
						<CutItem key={ item.id } item={ item }/>
					)}
					keyExtractor={ (item, index) => item.id }
					ListEmptyComponent={ () => (
						<View>
							<Text>No cuts added yet</Text>
						</View>
					)}
				/>
			</View>
		)
	}
}
export default Cuts;
