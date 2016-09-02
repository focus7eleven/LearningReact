import React from 'react'
import styles from './Header.scss'

export const DefaultHeaderHOC = (Component) => {
	const DefaultHeader = React.createClass({
		render() {
			return (
				<div>
					<div className={styles.defaultHeder}></div>
					<Component></Component>
				</div>
			) 
		},
	})

	return DefaultHeader
}