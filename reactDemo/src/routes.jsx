import React from 'react'
import AppContainer from './containers/AppContainer'
import AccountCenterContainer from './containers/account/AccountCenterContainer'
import {DefaultHeaderHOC} from './enhancers/Header'
import {Router, Route, browserHistory} from 'react-router'

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={AppContainer}>
			<Route path="account" component={DefaultHeaderHOC(AccountCenterContainer)}></Route>	
		</Route>		
	</Router>	
)

export default routes
