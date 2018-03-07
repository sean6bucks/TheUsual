import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions'
// COMPONENT
import Usual from '../components/Usual'

const mapStateToProps = ( state, prop ) => {
	return {
		loading: state.loading,
		user: state.user,
		route: state.route
	}
}

const mapDispatchToProps = dispatch => bindActionCreators( actions, dispatch );

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( Usual ) );
