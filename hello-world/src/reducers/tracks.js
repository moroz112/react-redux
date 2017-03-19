const initialState = [];

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