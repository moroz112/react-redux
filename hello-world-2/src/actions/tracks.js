var mockApiData = [
	{
		id: 1,
		name: 'enter'
	},
	{
		id: 1,
		name: 'enter some'
	},
	{
		id: 1,
		name: 'enter some'
	}
];
export const getTracks = () => dispatch => {
		setTimeout(() => {
			console.log('got tracks');
			dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData})
		}, 2000)
	};