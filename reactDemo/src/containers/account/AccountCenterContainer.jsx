import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Profile from './Profile'
import styles from './AccountCenter.scss'

const AvatarPanel = (props) => <div className={styles.avatarPanel}><img src={props.src}/></div>

const AccountCenterComponent = React.createClass({

	// Renders
	renderLeftMenu(){
		return (
			<div>
				<p>个人账户中心</p>
				<div>基础信息</div>
				<div>账户密码</div>
				<div>详细信息</div>
			</div>
		)
	},
	renderContentPanel(){
		return <Profile></Profile>
	},
	render(){
		return <div>
			<AvatarPanel src="https://unsplash.it/200"></AvatarPanel>
			<div className={styles.mainPanel}>
				{this.renderLeftMenu()}
				{this.renderContentPanel()}
			</div>
		</div>
	},
})

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountCenterComponent)