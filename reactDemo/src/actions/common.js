export const TOGGLE_INIT = "TOGGLE_INIT"

export function toggleInit() {
	return dispatch => {
		dispatch({
			type: TOGGLE_INIT,
		})
	}
}