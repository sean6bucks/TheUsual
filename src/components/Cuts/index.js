import React, { Component } from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import { FilterBar } from '../globals/FilterBar'
import { FavoritesList } from './FavoritesList'
import { CutsList } from './CutsList'

const filters = [
	{
		icon: 'star',
		value: 'favorite',
	},
	{
		icon: 'calendar',
		value: 'all'
	}
];

const width = Dimensions.get('window').width;
const styles = {
	view: {
		flex: 1,
		justifyContent: 'flex-start',
	},
	filters: {
		position: 'absolute',
		margin: 10,
		width: width - 20,
		zIndex: 1
	}
};

class Cuts extends Component {
	favoriteCuts = () => {
		return this.props.cuts.filter( cut => cut.favorite )
	}

	render() {
		return (
			<View style={ styles.view }>
				<FilterBar
					filters={ filters }
					appliedFilter={ this.props.filters.cuts }
					style={ styles.filters }
					selectFilter={ this.props.setCutsFilter } />
				{ this.props.filters.cuts === 'favorite' ? (
					<FavoritesList items={ this.favoriteCuts() } />
				) : (
					<CutsList items={ this.props.cuts } />
				)}
			</View>
		)
	}
}
export default Cuts;
