import _ from 'underscore'

// App config the for development and deployment environment.
// const devServerURL = ''
const isProduction = process.env.NODE_ENV === "production"

const config = _.extend({
	// common config
	debug: !isProduction,
}, isProduction ? {
	// prod config
} : {
	// dev config
})

export default config
