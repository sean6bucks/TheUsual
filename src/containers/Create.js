import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions'
// CONTAINERS
import Create from '../components/Create'

const mapStateToProps = ( state, prop ) => {
	return {
		create: state.create
	}
}

const mapDispatchToProps = dispatch => bindActionCreators( actions, dispatch );

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( Create ) );
