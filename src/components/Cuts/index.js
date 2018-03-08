import React, { Component } from 'react'
import { View } from 'react-native'
import { FilterBar } from '../globals/FilterBar'
import { FavoritesList } from './FavoritesList'
import { CutsList } from './CutsList'

const filters = [
	{
		icon: 'star',
		value: 'favorite',
	},
	{
		icon: 'list',
		value: 'all'
	}
];

const styles = {
	view: {
		flex: 1,
		justifyContent: 'flex-start',
		paddingTop: 50
	},
	filters: {
		position: 'absolute',
		top: 0,
		width: '100%',
		padding: 5
	}
};

class Cuts extends Component {
	favoriteCuts = () => {
		return this.props.cuts.filter( cut => cut.favorite )
	}

	render() {
		return (
			<View style={ styles.view }>
				<View style={ styles.filters }>
					<FilterBar
						filters={ filters }
						appliedFilter={ this.props.cuts_filter }
						selectFilter={ this.props.selectCutsFilter } />
				</View>
				{
					this.props.cuts_filter !== 'favorite' ? (
						<FavoritesList items={ this.props.cuts } />
					) : (
						<CutsList items={ this.props.cuts } />
					)
				}
			</View>
		)
	}
}
export default Cuts;
