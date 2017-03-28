const initialState = [
    {name: 'My first track', id: 1234}
];

function tracks(state = initialState, action) {
    if(action.type == "ADD_TRACK"){
        return [
            ...state,
            action.payload
        ]
    }
    if(action.type == 'FETCH_TRACKS_SUCCESS') {
        return action.payload
    }
    return state
}
export default tracks