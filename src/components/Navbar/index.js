import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { NavButton } from './NavButton'
import { white, lightGrey } from '../globals/colors'

const styles = {
	height: 60,
	flexDirection: 'row',
	justifyContent: 'space-around',
	alignItems: 'center',
	backgroundColor: white,
	borderTopWidth: 1,
	borderTopColor: lightGrey
};

class Navbar extends Component {

	changeRoute = route => {
		if ( route === this.props.route ) return;
		this.props.changeRoute( route );
		if ( route !== '/cuts' ) this.props.selectCutsFilter( 'favorite' );
	}

	createNew = () => {
		this.props.createNewCut();
	}

	render() {
		return (
			<View style={ styles }>
				<NavButton
					icon="scissors"
					route="/cuts"
					active={ this.props.route === '/cuts' }
					handlePress={ this.changeRoute }
				/>
				<NavButton
					large={ true }
					icon="plusCircle"
					active={ this.props.route === '/create' }
					handlePress={ this.createNew }
				/>
				<NavButton
					icon="userCircleO"
					route="/barbers"
					active={ this.props.route === '/barbers' }
					handlePress={ this.changeRoute }
				/>
			</View>
		)
	}
}
export default Navbar;
