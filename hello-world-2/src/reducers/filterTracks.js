const initialState = null;

export default function filterTracks(state = initialState, action) {
	if(action.type === 'FIND_TRACK') {
		return action.payload
	}
	return state
}