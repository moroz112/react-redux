const initialState = [
	'Work',
	'Home'
];

export default function playlists(state = initialState, action) {
	if (action.type === 'ADD_PLAYLIST') {
		return [
			...state,
			action.payload
		]
	}
	return state
}