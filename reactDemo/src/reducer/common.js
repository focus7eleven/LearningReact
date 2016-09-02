import {TOGGLE_INIT} from '../actions/common'

const initialState = {
	init: false,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_INIT:
			state.init = !state.init
			return state
		default:
			return state
	}
}