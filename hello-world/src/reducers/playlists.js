const initialState = [
    'playlist 1',
    'playlist 2'
];
function playlists(state = initialState, action) {
    if(action.type == 'ADD_PLAYLIST'){
        return [
            ...state,
            action.payload
        ]
    }
    return state
}
export default playlists