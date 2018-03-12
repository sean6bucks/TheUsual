import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions'
// CONTAINERS
import Cuts from '../components/Cuts'

const mapStateToProps = ( state, prop ) => {
	return {
		show: state.show,
		user: state.user,
		filters: state.filters,
		cuts: state.cuts
	}
}

const mapDispatchToProps = dispatch => bindActionCreators( actions, dispatch );

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( Cuts ) );
