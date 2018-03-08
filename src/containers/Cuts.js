import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions'
// CONTAINERS
import Cuts from '../components/Cuts'

const mapStateToProps = ( state, prop ) => {
	return {
		user: state.user,
		cuts_filter: state.cuts_filter,
		cuts: state.cuts
	}
}

const mapDispatchToProps = dispatch => bindActionCreators( actions, dispatch );

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( Cuts ) );
