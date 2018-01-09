export default function tracks(state = [], action) {
	if (action.type === 'ADD_TRACK') {
		return [
			...state,
			action.payload
		]
	}
	return state;
}