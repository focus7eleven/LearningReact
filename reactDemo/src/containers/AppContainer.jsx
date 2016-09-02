import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const AppComponent = React.createClass({
	render: function(){
		return this.props.children
	},
})

function mapStateToProps(state) {
	return {}
}
function mapDispatchToProps(dispatch) {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)