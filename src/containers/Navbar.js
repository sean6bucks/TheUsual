import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
// CONTAINERS
import Navbar from '../components/Navbar'

const mapStateToProps = ( state, prop ) => {
	return {
		route: state.route
	}
}

const mapDispatchToProps = dispatch => bindActionCreators( actions, dispatch );

export default connect( mapStateToProps, mapDispatchToProps )( Navbar );
