import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions'
// CONTAINERS
import CutProfile from '../components/CutProfile'

const mapStateToProps = ( state, prop ) => {
	return {
		loading: state.loading,
		show: state.show,
		cut: state.cut
	}
}

const mapDispatchToProps = dispatch => bindActionCreators( actions, dispatch );

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( CutProfile ) );
